<?php

require_once("apiconnection.php");

abstract class TAPIConnection extends Connection
{

    function __construct($api_key)
    {
        parent::__construct();
        $this->API_KEY = $api_key;
        $this->HEADER_API_VARIABLE = 'apikey';
        $this->BASE_API_URL = "http://api.hotwire.com/v1/search/car?";
    }

}