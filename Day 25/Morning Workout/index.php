<?php

$page_title = 'Shopping list';
$page = 'home';
if(isset( $_GET['page'] )) //We are asking if this exist
{
    $page = $_GET['page'];
}

//Another way: $page = isset($_GET['page']) ? $_GET['page'] : 'home' ;

$items = [];

if(!empty($_POST['items'])) //if array with key 'items'                                 exist in $post and its not empty
{
    $items = $_POST['items'];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form</title>
</head>
<body>

    <h1><?php echo $page_title;?></h1>

    <nav>
        <a href="?page=form">Form</a>
        <a href="?page=home">Home</a>
    </nav>

    <?php if ($page == 'home') : ?>
        <?php include 'home.php'; ?>
    <?php endif; ?>

    <?php if ($page == 'form') : ?>
        <?php include 'form.php'; ?>
    <?php endif; ?>
        


</body>
</html>