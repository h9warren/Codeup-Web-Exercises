<?php
	
	require "dbconnect.php";

	echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";

?>