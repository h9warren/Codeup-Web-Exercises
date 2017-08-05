<?php

require_once "../Input.php";
require 'functions.php';

function pageController() {

  $count = Input::get("count", 0);
  $shot = Input::get("shot", "go");
  
  $dataArray = [
    "count" => $count,
    "shot" => $shot
  ];
  return $dataArray;
}

extract(pageController());

var_dump($_REQUEST);
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <style media="screen">
  .bigdiv {
    text-align:center;
    /*margin-top: 20px;*/
    margin-left: auto;
  }
  h1 {
    color: black;
    font-size: 200px;
    font-family: "Helvetica";
  }
  a {
    color: blue;
    font-size: 60px;
    font-family: "Helvetica";
    padding: 20px;
  }

  </style>
</head>
<body>
  <div class="bigdiv">
    <h1><?= escape($count) ?></h1>
    <a href=
    <?php
    escape($count++);
    $shot = "hit";
    echo "ping.php?count=".$count."&shot=".$shot;?>
    >HIT</a>
    <a href=
    <?php
    escape($count=0);
    $shot = "miss";
    echo "?count=".$count."&shot=".$shot;?>
    >MISS</a>
  </div>
</body>
</html>
