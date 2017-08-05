<?php

require_once 'Log.php';

class Auth
{
    
    public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';
    public static $username = 'guest';

    public static function attempt($username, $password)
    {   
     
        $loginAttempts = new Log ();
        $loginAttempts->logMessage($username, ' attempted to log in');

        if (($username === self::$username) && (password_verify($password, self::$password)))
        {
            header('Location: authorized.php');
            return $_SESSION['logged_in_user'] = $username;
            $loginAttempts->logMessage($username, ' successful login');

        } else if (($username == null) && ($password == null)) {
            return null;
            
        } else {
            return "invalid username or password";
        }
    }


    public static function check()
    {
        return isset($_SESSION['logged_in_user']);
    }

 
    public static function user()
    {
       $user = $_SESSION['logged_in_user'] ?? null;
       return $user;

    }


    public static function logout()
    {
        session_unset();
        session_destroy();
        session_regenerate_id(true);
        header('Location: login.php');
    }
}
