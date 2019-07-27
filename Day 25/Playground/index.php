<?php

class BlogPost 
{
    public $id = null;
    public $headline = null;
    public $text = null;
    public $added_at = null;
    public $user_id = null;
    public $status = 'not-published';
}

$firstPost = new Blogpost();
$firstPost->id = 1;
$firstPost->headline = 'The first post';
$firstPost->text = 'I have decided to write my own blog. This is my first post, beautiful in it\'s simplicity.';
$firstPost->added_at = date('Y-m-d H:i:s');
$firstPost->user_id = 1;
$firstPost->status = 'published';



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog</title>
</head>
<body>
    <h1><?php $firstPost->headline ?></h1>
</body>
</html>

