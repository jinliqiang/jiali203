<?php
//评价
header('Content-Type: application/json');

$pid = $_REQUEST['pid'];
$pingjia = $_REQUEST['pingjia'];


$conn = mysqli_connect('127.0.0.1','root','','suning',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

$sql = "INSERT INTO pingjia VALUES(NULL,'$pingjia')";
$result = mysqli_query($conn, $sql);
