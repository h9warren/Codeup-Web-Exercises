<?php

session_start();
$userName = isset($_POST['un']) ? $_POST['un'] : "";
$passWord = isset($_POST['pw']) ? $_POST['pw'] : "";
$sessionId = session_id();
if (isset($_SESSION['logged_in_user'])) {
  header('Location: authorized.php');
  die();
}

function checkID($userName, $passWord) {
  $message = [];
  if (!empty($_POST))
  {
    if (($userName === 'Hunter') && ($passWord === 'Warren'))
    {
      $_SESSION['logged_in_user'] = $userName;
      header('Location: authorized.php');
      die();
    } else {
      // $_SESSION['logged_in_user'] = false;
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
    <input type="password" name="pw" value="">
    <button type="submit">Submit</button>
  </form>
  <p><?php echo $status ?></p>
</body>
</html>
