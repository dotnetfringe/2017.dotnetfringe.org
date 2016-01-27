<?php

$file = 'emails.csv';

$newEmail = urldecode($_GET["email"]) . "\n";

file_put_contents($file, $newEmail, FILE_APPEND | LOCK_EX);

echo "Saved new email: ".$newEmail;

?>