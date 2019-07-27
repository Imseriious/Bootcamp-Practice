<!-- Logic starts -->
<?php 

require 'DBBlackbox.php'; //"database operations library"

//Errors that we want to display to the user
$errors = [];

//determiine whether is creating a new one\
//or editing an existing one
if(!empty($_GET['id'])) // if its not empty = this edit
{                       // == if there is an identifier of the edited record in the url
    $array = find($_GET['id']); //find record in database
    $name = $array['name']; //just to get aroung the limitations
} else { //otherwise is creating new record
    $name = null; //prepare empty data
}

//now we have $name 

if($_POST) //if the form was submitted
{  
    //update data from reuest
    //$name = $_POST['id']; //principle way
    $name = isset($_POST['name']) ? $_POST['name'] : $name; //beter way, checks existence in request

    //validation
    $valid = true; // first we assume everything is fine

    if($name == '') //if name is empty
    {
        $errors[] = 'Please fill-in the name'; //We inform the user
        $valid = false; //we indicate something is wrong 
    }
    if(strlen($name) < 3)  //if name is less than 3 characters
    {
        $errors[] = 'Must be at least 3'; //We inform the user
        $valid = false; //we indicate something is wrong 
    }

    // If the data is valid
    if($valid) //This is true or false
    {
        //save de data
        if(!empty($_GET['id'])) //same logic as above
        {
            update($_GET['id'], ['name' => $name]); //update existing data
            $id = $_GET['id']; //prepare $id from request
        } else {
            $id = insert(['name' => $name]); // insert new data, get the identifier(id)
        }

        //inform the user
        //todo

        //Rediret to a page with GET
        header('Location: form.php?id='.$id);
    }

}

?>
<!-- Presentation starts -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Well made Form</title>
</head>
<body>



    <!-- display any errors to the user -->
    <?php var_dump($errors); ?>

    <form action="" method="POST">

        
        <input type="text" name="name" value="<?= htmlspecialchars($name);?>">
        <br>

        <input type="submit" value="Save">

    </form>

    
</body>
</html>