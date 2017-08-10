<?php

require "dbconnect.php";

use parks_db;

PDO::exec(DROP TABLE IF EXISTS national_parks);

PDO::exec(CREATE TABLE IF NOT EXISTS national_parks (
 	id int(10) unsigned NOT NULL AUTO_INCREMENT,
  	name varchar(126),
  	location varchar(126),
  	date_est YEAR(4),
  	area DOUBLE(14,2),
  	PRIMARY KEY (ID)
  );


  ?>