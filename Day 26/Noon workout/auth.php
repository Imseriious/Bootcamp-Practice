<?php

class Auth
{
    protected static $users = [];

    public static function addUser($user)
    {
        static::$users[] = $user; 
    }

    public static function getUser()
    {
        return static::$users;
    }

    protected static function getCurrentUserId()
    {
        if(!empty($_SESSION['user_id'])) { //if there is 'user id ' in $_SESSIONM and its not emptu
            return $_SESSION['user_id']; //return it
        } else {
            return null; //return null - indication of no user id being in $_SESSION.
        }
    }

    public static function getCurrentUser()
    {
        $user_id = static::getCurrentUserId();

        foreach(static::$users as $user) {
            var_dump($user);
            if($user['user_id'] == $user_id){
                return $user;
            }
        }

        return null;
    }
}

