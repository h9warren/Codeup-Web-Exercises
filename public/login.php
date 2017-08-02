<?php

$userName = isset($_POST['un']) ? $_POST['un'] : "";
$passWord = isset($_POST['pw']) ? $_POST['pw'] : "";

function checkID($userName, $passWord) {
  $message = [];
  if (!empty($_POST))
  {
    if (($userName === 'Pizza') && ($passWord === 'Party'))
    {
      // $message['status'] = "valid";
      header('Location: authorized.php');
      die();
    } else {
      //if invalid, print message
      $message['status'] = "invalid username or password";
    }
    return $message;
  } else {
    $message['status'] = "";
    return $message;
  }
}
extract(checkID($userName, $passWord));

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
    <input type="text" name="pw" value="">
    <button type="submit">Submit</button>
  </form>
  <p><?php echo $status ?></p>
</body>
</html>
