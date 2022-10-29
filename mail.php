<?php
require 'vendor/autoload.php';
use \Mailjet\Resources;

define('API_USER','ad1352c9c81e85c1fff87d57bb805f25');
define('API_LOGIN','2614e66ed03ec27209d490867716aa79');

$mj = new \Mailjet\Client('API_USER','API_LOGIN',true,['version' => 'v3.1']);


$email = htmlspecialchars($_POST['email']);
$object = htmlspecialchars($_POST['object']);
$message = htmlspecialchars($_POST['message']);

$body = [
    'Messages' => [
        [
            'From' => [
                'Email' => "diasnabil.pro@protonmail.com",
            ],
            'To' => [
                [
                    'Email' => "diasnabil.pro@protonmail.com",
                ]
            ],
            'object' => $object, $email,
            'TextPart' => $message,
            
        ]
    ]
];

$response = $mj->post(Resources::$Email, ['body' => $body]);
$response->success();

echo 'email envoyé avec succès'


?>