<?php

require_once("lib/bytapiconnection.php");

class Accommodation extends BYTAPIConnection
{
    function geosearch($lat, $lng)
    {
        return $this->makeRequest("/accommodation/geosearch/".$lat."/".$lng);
    }

    function search($name)
    {
        return $this->makeRequest("/accommodation/search/".$name);
    }


}