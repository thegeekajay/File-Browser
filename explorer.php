<?php
$path=getcwd();
$path=$path.$_GET['path'];
$files1 = scandir($path);
$files1 = array_diff($files1, array('.', '..', '.DS_Store'));
foreach ($files1 as &$value) {
    if(is_dir($value))
        $result[]=array("name" => "$value","isDir" => "1");
    else
        $result[]=array("name" => "$value","isDir" => "0");
}     
header('Content-type: application/json');
echo json_encode($result);
?>

