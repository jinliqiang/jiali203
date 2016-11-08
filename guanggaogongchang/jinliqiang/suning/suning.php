<?php
//用户注册
/**保存新用户注册**/
header('Content-Type: application/json');

$pid = $_REQUEST['pid'];
$userName = $_REQUEST['use'];
$pwd1 = $_REQUEST['pwd1'];
$phone = $_REQUEST['phone'];

$conn = mysqli_connect('127.0.0.1','root','','suning',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

$sql = "INSERT INTO user VALUES(NULL,'$userName','$pwd1','$phone')";
$result = mysqli_query($conn, $sql);


if($result===FALSE){
	echo '<h3>执行失败</h3>';
	echo "<p>请检查SQL语句：$sql</p>";
}else {
	echo json_encode($userName);
}