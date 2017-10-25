<?php

require_once("lib/tapiconnection.php");

class Rentalcar extends TAPIConnection
{
    function samplesearch()
    {
        return $this->makeRequest("&dest=LAX&startdate=01/20/2010&enddate=01/23/2010&pickuptime=10:00&dropofftime=13:30");
    }



}