<?php
$people = [
     ['FirstName' => 'John',
     'LastName' => 'Hygy',
     'Age' => 30],
     ['FirstName' => 'Marry',
     'LastName' => 'hihi',
     'Age' => 29],
     ['FirstName' => 'Lisa',
     'LastName' => 'Snnr',
     'Age' => 14],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Loop</title>
</head>
<body>
          
          <table style="width:100%">
               <tr>
                    <th>FirstName</th>
                    <th>Lastname</th>
                    <th>Age</th>
               </tr>
               <tr>
               <?php foreach($people as $guys) : ?>
                    <?php foreach ($guys as $key) : ?>
                    <td><?= $key ?></td>
               <?php endforeach; ?>
               <?php endforeach; ?>
               </tr>
          </table> 
                    
</body>
</html>
          
