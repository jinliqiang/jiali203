<?php
//用户注册
/**验证客户端提交的用户名是否已经存在**/
header('Content-Type: text/plain');


$userName = $_REQUEST['use'];
$conn = mysqli_connect('127.0.0.1','root','','suning',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
$sql = "SELECT pid FROM user WHERE userName='$userName'";
$res = mysqli_query($conn, $sql);


if($res===FALSE){    //SQL语法错误
  echo 'sql err:'.$sql;
}else {
  $row = mysqli_fetch_assoc($res);
  if($row===NULL){		//未读取到记录
	echo 'bucunzai';
  }else{				//读取到同名记录
	echo 'cunzai';
  }
}