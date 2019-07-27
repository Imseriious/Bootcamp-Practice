<?php 

require_once 'DBBlackbox.php'; 

$errors = []; 
//prepare empty or saved data
if(!empty($_GET['id'])) 
{
    $array = find($_GET['id']); 
    $name = $array['name']; 
} else {
    $name = null;
}

if($_POST)
{
    $name = isset($_POST['name']) ? $_POST['name'] : $name;
    $valid = true;

    if($name == '')
    {
        $errors[] = 'Please fill in the name';
        $valid = false;
    }
    if(strlen($name) < 3)
    {
        $errors[] = 'Must be at least 3';
        $valid = false;
    }
    if($valid)
    {
        if(!empty($_GET['id']))
        {
            update($_GET['id'], ['name' => $name]);
            $id = $_GET['id'];
        } else {
            $id = insert(['name' => $name]);
        }
        header('Location: form.php?=id' . $id);
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="" method='post'>
    
    <input type="text" name='name' value="<?php htmlspecialchars($name);?>">
    <br>
    <input type="submit" value="Save">
    
    </form>
</body>
</html>