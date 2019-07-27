<?php 

$pathinfo = pathinfo(__FILE__ , PATHINFO_EXTENSION); //Path info shows you the information about the path. 
                                                    //Second argumant can be detailed information



$img_files=scandir($img_dir);

var_dump($img_files);

var_dump(__FILE__);

$myFiles = opendir()

while (false !== ($file = readdir($myFiles))) {

}