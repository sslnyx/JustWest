<?php

namespace App\Http\Controllers;

use App\LassoLead;
use App\Mail\NewRegistrant;
use App\RegistrantSubmitter;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    public function submit(Request $request)
    {
        $clientId = '1866';
        $projectId = '12612';
        $apiKey = 'e~z%28dn*x';

        if (empty($clientId) || empty($projectId) || empty($apiKey)) {
            throw new Exception('Required parameters are not set, please
                               check that your $clientId, $projectId and $apiKey are
                               configured correctly');
        }

        $lead = new LassoLead($request['FirstName'],
            $request->LastName,
            $projectId,
            $clientId,
        $apiKey);
        $lead->addEmail($request['email']);
        $lead->addPhone($request['phone']);
        $lead->addAddress(
            $request['city'],
            $request['postal-code']
        );
        
		foreach($_REQUEST['Questions'] as $questionId => $value){
			$lead->answerQuestionById($questionId, $value);
			}
		
        $lead->answerQuestionByIdForText(83448,$_REQUEST['Questions'][83448]);

        $lead->sendAssignmentNotification();

        $submitter = new RegistrantSubmitter();
        $curl = $submitter->submit('https://api.lassocrm.com/registrants', $lead, $apiKey);

        $result =  (object) array_merge( (array)json_encode($lead),(array)curl_getinfo($curl));
		
		return response()->json($result, 200);
    }

}
