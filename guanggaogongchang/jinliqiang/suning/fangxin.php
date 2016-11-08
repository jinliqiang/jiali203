<?php
header('Content-Type: application/json');

$conn = mysqli_connect('127.0.0.1','root','','suning',3306);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT * FROM fangxin_products";
$result = mysqli_query($conn,$sql);

$orderList = [];
while( ($order=mysqli_fetch_assoc($result))!==NULL ){
	$orderList[] = $order;
}

echo json_encode($orderList);