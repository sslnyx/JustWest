<?php

namespace App\Http\Controllers;

// use App\Mail;
use App\LassoLead;
use App\Mail\NewRegistrant;
use App\RegistrantSubmitter;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    //
    public function submit(Request $request)
    {
        $this->validate($request, [

            'FirstName' => 'required|string',
            'LastName' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required',
            'city' => 'required',
            'postal_code' => 'required',
            'options' => 'required',
            'check' => 'accepted',
        ]);

        $client = new Client();
        $response = $client->post(
            "https://www.google.com/recaptcha/api/siteverify?secret=6LcMl8QUAAAAAAg1WA_kZWtD1k8H2ca5ZpERVNoN&response={$request->token}"
        );
        $json = $response->getBody();
        $recaptcha = json_decode($json);

        if (isset($recaptcha->success) && $recaptcha->score <= 0.5) {
            return false;
        }

        $clientId = '1866';
        $projectId = '12612';
        $apiKey = 'e~z%28dn*x';

        if (empty($clientId) || empty($projectId) || empty($apiKey)) {
            throw new Exception('Required parameters are not set, please
                               check that your $clientId, $projectId and $apiKey are
                               configured correctly');
        }

        /*
         * Constructing and submitting a lead:
         * Map your forms fields into the lead object and submit
         */

        $lead = new LassoLead($request['FirstName'],
            $request->LastName,
            $projectId,
            $clientId);
        $lead->addEmail($request['email']);
        $lead->addPhone($request['phone']);
        $lead->addAddress(
            '',
            $request['city'],
            '',
            $request['postal_code'],
            'Canada'
        );
        $lead->answerQuestionById(
            $request->isCoRealtor['id'],
            $request->isCoRealtor['answer']
        );
        $lead->answerQuestionById(
            $request->isRealtor['id'],
            $request->isRealtor['answer']
        );
        $lead->answerQuestionById(
            $request->options['id'],
            $request->options['answer']
        );
        $lead->answerQuestionByIdForText(
            $request->otherReason['id'],
            $request->otherReason['answer']
        );
        $lead->answerQuestionById(
            $request->options2['id'],
            $request->options2['answer']
        );
        $lead->answerQuestionById(
            $request->options3['id'],
            $request->options3['answer']
        );

        $submitter = new RegistrantSubmitter();
        $curl      = $submitter->submit('https://api.lassocrm.com/registrants', $lead, $apiKey);

        if (curl_getinfo($curl, CURLINFO_HTTP_CODE) == 201) {
            Mail::to(explode(',', env('MAIL_TEST_RECIPIENT')))->send(new NewRegistrant($request));
            return response()->json(curl_getinfo($curl, CURLINFO_HTTP_CODE));
        } else {
            return response()->json(curl_getinfo($curl, CURLINFO_HTTP_CODE));
            // die('Error: Submission Error');
        }
    }

}
