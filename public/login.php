<?php
session_start();

require '../Auth.php';
require 'functions.php';
require_once '../Input.php';

// $sessionId = session_id();
if(auth::check()) {
  header('Location: authorized.php');
  die();
}

$username = escape(Input::get('un'));
$password = Input::get('pw');     

$status = auth::attempt($username,$password);




?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
  <form method=POST>
    <label>Username</label>
    <input type="text" name="un" value="">
    <label>Password</label>
    <input type="password" name="pw" value="">
    <button type="submit">Submit</button>
  </form>
  <p><?php echo $status ?></p>
</body>
</html>
