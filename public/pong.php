<?php

function pageController() {
  $count = (isset($_GET["count"])) ? $_GET["count"] : 0;
  $dataArray = [
    "count" => $count
  ];
  return $dataArray;
}

extract(pageController());
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <style media="screen">
  .bigdiv {
    text-align:center;
    margin-top: 100px;
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
    <h1><?= $count ?></h1>
    <a href=
    <?php
    $count++;
    echo "ping.php?count=".$count;?>
    >HIT</a>
    <a href=
    <?php
    $count=0;
    echo "?count=".$count;?>
    >MISS</a>
  </div>
</body>
</html>
