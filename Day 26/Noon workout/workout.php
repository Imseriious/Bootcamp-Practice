<?php

require_once '';

$user_id = 4; //currently logged in user

session_start();

var_dump($_SESSION);

$_SESSION['user_id']= $user_id;

$username = 'Bruce';

$user = [
    'user_id' => $user_id,
    'username' => $username
];

Auth::addUser(['user_id' => 1, 'username' => 'Kevin']);

Auth::addUser(['user_id' => 2, 'username' => 'Stuart']);

Auth::addUser(['user_id' => 3, 'username' => 'Bob']);

 

var_dump(Auth::getUsers());

Auth::addUser($user);



