<?php

session_start();
// var_dump($_SESSION);
// session_destroy();

if (isset($_POST['logout'])) {
  session_unset();
  session_destroy();
  session_regenerate_id(true);
  header('Location: login.php');
}
if (!isset($_SESSION['logged_in_user'])) {
  header('Location: login.php');
} else {
  $user = $_SESSION['logged_in_user'];
}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
  <a href="login.php"> << back</a>
  <h1> Hello, <?php echo $user.". " ?> You are logged in! </h1>
  <form method="POST">
    <button type="submit" name="logout" value="true">LOGOUT</button>
  </form>
</body>
</html>
