<?php

session_start();
require "../Auth.php";

if (isset($_POST['logout'])) {
  auth::logout();
}
if(!auth::check()) {
  header('Location: login.php');
} else {
  $user = auth::user();
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



