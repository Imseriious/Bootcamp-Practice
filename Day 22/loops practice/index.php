<?php
//while loop
$time_served = 0;
while($time_served < 10) {
    $time_served++;
    echo "The prisoner has served {$time_served} years<br>";
}
echo "<br>";
//do..while loop
$time_served = 0;
do { 
    $time_served++;
    echo "The prisoner has served {$time_served} years<br>";
    
} while($time_served < 10) ;
echo"<br>";
//for loop
for($time_served = 0; $time_served < 6; $time_served++)
{
    echo "The prisoner has {$time_served} more years to serve <br>";
}
//continue & break
for($time_served = 10; $time_served > 0; $time_served--)
{
    echo "The prisoner has {$time_served} more years to serve <br>";
 if($time_served > 5)
{
    continue;
    echo "<br>";
}
echo "Going to a parole hearing...<br>";

if ($time_served==2)
{
    echo "Paroled!<br>";
    break;
}
}
    




?>