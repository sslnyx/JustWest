<?php

require('src/LassoLead.php');
require('src/RegistrantSubmitter.php');

$clientId  = '1866';
$projectId = '12612';
$apiKey = 'e~z%28dn*x';

if (empty($clientId) || empty($projectId) || empty($apiKey)){
	throw new Exception('Required parameters are not set, please
						check that your $clientId, $projectId and $apiKey are
						configured correctly');
	}

$lead = new LassoLead(
	$_REQUEST['FirstName'],
    $_REQUEST['LastName'],
    $projectId,
    $clientId
	);

$lead->addPhone($_REQUEST['Phone']);

$lead->addEmail($_REQUEST['Email']);

$lead->addAddress(
    'sample street',
    $_REQUEST['City'],
    'BC',
    $_REQUEST['PostalCode'],
    'Canada'
	);

foreach($_REQUEST['Questions'] as $questionId => $value){
	$lead->answerQuestionById($questionId, $value);
	}

$lead->answerQuestionByIdForText(83448,$_REQUEST['Questions'][83448]);

$lead->sendAssignmentNotification();



// return response()->json($_REQUEST);
// print_r(json_encode($_REQUEST));

print_r(json_encode($lead->toArray()));


// $submitter = new RegistrantSubmitter();
// $curl      = $submitter->submit('https://api.lassocrm.com/registrants', $lead, $apiKey);