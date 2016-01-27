<?php

$subject = "Moonhunters";
$contactName = $_GET["name"];
$contactEmail = urldecode($_GET["email"]);
$contactMessage = $_GET["message"];

mail("youremail@gmail.com", $subject, "Message from: $contactName : ".$contactMessage, "From: $contactEmail\n");

echo "Thank you! We will reply soon!";

?>