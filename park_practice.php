<?php

require "dbconnect.php";

function getUsers($dbc)
{


	$stmt = $dbc->query('SELECT * FROM national_parks');

	print_r($stmt);

	while ($row = $stmt->fetch()) {
		print_r($row);
	}

	echo "rows:" . $stmt->rowCount() . PHP_EOL;
	
}

getUsers($dbc);

?>


