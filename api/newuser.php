<?php
    $name = $_GET['name'];
    $pass = $_GET['pass'];

	if (empty($name)) {
		die('Please include all required url parameters.');
    }
    if (empty($pass)) {
		die('Please include all required url parameters.');
    }
    
    $userpass = array($name, ":", $pass);
    
    file_put_contents('.htpasswd', implode($userpass) . "\r\n", FILE_APPEND);
?>