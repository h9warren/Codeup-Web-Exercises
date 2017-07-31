<?php


function randomGrad() {
  $dir = ['up','down','left','right'];
  $color1 = ['#bc29e1','#1cd786', '#cc32e8', '#e832d5'];
  $color2 = ['#35d7e6','#ab3af2','#f2b83a', '#f2913a'];
  $rand3 = mt_rand(2,3);
  $rand4 = mt_rand(0,3);
  $rand5 = mt_rand(0,3);
  $direction = $dir[$rand3];
  $col1 = $color1[$rand4];
  $col2 = $color2[$rand5];
  $background = [
    'gradient' => "$direction, $col1, $col2"
  ];
  return $background;
}
  extract(randomGrad());

function serverName() {
  $arr1 = ['International', 'Cosmic3842', 'Nouveau', 'Data', 'W A V E', 'Deluxe', 'Prism', 'Tokyo', 'Visual', 'aesthetic'];
  $arr2 = ['SEGA', 'Windows 91', 'Ltd.', 'Visions', 'Hyper', 'Infinity', 'Miami', 'Cyber', 'VHS', 'Mall', 'S O U L'];
  $rand = mt_rand(1,count($arr1));
  $rand2 = mt_rand(1,count($arr2));
  $word1 = $arr1[($rand-1)];
  $word2 = $arr2[($rand2-1)];
  $serverName = [
    "serverFirstName" => $word1,
    "serverLastName" => $word2
  ];
  return $serverName;
}
  extract(serverName());




?>
<!DOCTYPE html>
<html>
  <head>
    <!-- put some cool CSS here -->
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
      body {
        text-align: center;
        background: -webkit-linear-gradient(<?php
        echo $gradient;
        ?>);
      }
      h1 {
        font-family: "Helvetica";
        font-size: 100px;
        color: white;
        padding-top: 100px;
      }
      </style>
    </head>
  <body>
    <h1>
        <?php
        echo $serverFirstName . " " . $serverLastName;
        ?>
      </h1>
    </body>
  </html>
