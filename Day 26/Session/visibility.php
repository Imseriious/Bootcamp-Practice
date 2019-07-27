<?php

require_once 'warehouse.php';

//Create warehouse 1
$warehouse1 = new Warehouse;
$warehouse1->name = 'Trainyard warehouse'; //We can change it this way because its public.
//$warehouse1->crates[] = 'Beer'; // We can not acces this way, its protected.
$warehouse1->addCrates('Beer'); 
//Create warehouse 2
$warehouse2 = new Warehouse;
$warehouse2->name = 'Docks Warehouse';

var_dump($warehouse1);

var_dump($warehouse2);