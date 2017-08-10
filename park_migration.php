<?php

require "dbconnect.php";

$dbc->exec("DROP TABLE IF EXISTS national_parks");

$dbc->exec("

	CREATE TABLE IF NOT EXISTS national_parks (
 	id int(10) unsigned NOT NULL AUTO_INCREMENT,
  	name varchar(126),
  	location varchar(126),
  	date_est DATE NOT NULL,
  	area DOUBLE(14,2),
  	PRIMARY KEY (ID)
  );

	");


  ?>