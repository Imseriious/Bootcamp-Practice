<?php

$my_name = "Sam";
$height = "1.7?";

var_dump($my_name);
var_dump($height);
//Function 1 and 2
function headline($text)
{
    return "<h1>" . $text . "</h1>";
}

echo headline("My website");
//Function 3
$inches = 12;

function inchesToCentimeters($inches)
{
    return "Cm : " . $inches * 2.54;
}

echo inchesToCentimeters($inches);
echo "<br>";
//Function 4
$celsius = 100;

function celsiusToFahrenheit($celsius)
{
    return "F : " . ((9/5) * $celsius + 32);
}

echo celsiusToFahrenheit($celsius);
echo "<br>";
//Conditions 1
$temperature = 36.5;



function isHealthy($temperature,$scale)
{
    if($scale == 'f'){
        $temperature = (($temperature - 32) * (5/9));
    } else {
        $temperature = $temperature;
    }

    if($temperature < 37){
        echo "true";
    } else{
        echo "false";
    }
}
echo isHealthy($temperature, 'f');
echo "<br>";

//Ternary operator
$number = 42;

function evenOrOdd($number)
{
    return ($number % 2 == 0) ? 'Even' : 'Odd';
}


echo evenOrOdd($number);
echo "<br>";
//Concatenation
$weekday = "Tuesday";

function sayWeekday($weekday)
{
    echo "Today is " . $weekday;
}

sayWeekday($weekday);
echo "<br>";
//Concatenation 2
$year_of_birth = '1997';

function sayBirthday($year_of_birth)
{
    $this_year = '2019';
    echo 'I was born in ' . $year_of_birth . ' so this year I am celebrating my ' . ($this_year - $year_of_birth) . '. birthday';
}

sayBirthday($year_of_birth);
echo "<br>";
//Conditions
function assessHeight($cent)
{
    if($cent > 180){
        return 'Tall';
    }elseif($cent < 180 && $cent > 160){
        return 'Avarage';
    }else{
        return 'Small';
    }
}

echo assessHeight(170);
echo "<br>";
//Switch
function getLanguageUsage($lang)
{
    switch($lang) {
        case 'php' :
            return 'serverside';
            break;
        case 'ruby':
            return 'serverside';
            break;
        case 'javascript':
            return 'clientside';
            break;
    }
}
echo getLanguageUsage('PHP') .'<br>';

echo getLanguageUsage('php') .'<br>';

echo getLanguageUsage('Php') . '<br>';

echo getLanguageUsage('javascript') . "<br>";

echo getLanguageUsage('JavaScript') .  "<br>";
//Logical operators






?>




