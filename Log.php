<?php

  class Log {

    public $filename;
    public $handle;

    //take in a log level and message
    public function __construct($prefix='log') {
      $date = date('Y-m-d');
      $this->filename = $prefix."-".$date."-log";
      $this->handle = fopen($this->filename, 'a+');
    }
    public function logMessage($level, $message) {
      // open $filename to append
      $date = date('Y-m-d');
      $time = date('h:i:s');
      $messageToWrite = "$date $time $level $message" .PHP_EOL .PHP_EOL;
      fwrite($this->handle, $messageToWrite);
      return $messageToWrite;
    }
    public function __destruct() {
      fclose($this->handle);
    }

    // take in log message
    public function info($message) {
      // pass it to logMessage()
      $this->logMessage("INFO", $message);
    }
    // take in error message
    public function error($message) {
      // pass it to logMessage()
      $this->logMessage("INFO", $message);
    }
  }

?>
