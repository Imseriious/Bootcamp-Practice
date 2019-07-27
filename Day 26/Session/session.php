<?php 

session_start(); //Creates a session 'Makes a unique id and gives it to the server.' Value = unique ID.
                 //Next time the browser sees the same id the server knows who is it. (IN COOKIE)

var_dump($_SESSION);

//Flashing data: Putting into SESSION for the duration of one request only.

$_SESSION['succes'] = 'All went well!' //If session worked well we tell the user.


