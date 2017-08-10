<?php

	require_once "env.php";

	$dbc = new PDO("mysql:host=127.0.0.1;dbname=".dbName, username, password);

	$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	

?>