<?php
/**
接收客户端提交的uname和upwd,
验证是否正确，返回验证结果*/

header('Content-Type: application/json');

$uname = $_REQUEST['user_name'];
$upwd = $_REQUEST['user_pwd'];

$conn = mysqli_connect('127.0.0.1','root','','suning',3306);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
//验证登录信息的SQL 
$sql = "SELECT userName FROM user WHERE userName='$uname' AND pwd1='$upwd'";
$result = mysqli_query($conn,$sql);

$output = ['code'=>0, 'msg'=>''];
if($result===FALSE){ //SQL语法错误
	$output['code'] = -1;
	$output['msg'] = '执行失败！请检查SQL：'.$sql;
}else {  //执行成功
	$row = mysqli_fetch_assoc($result);
	if($row===NULL){ //没有查询到记录
		$output['code'] = -2;
		$output['msg'] = '用户名或密码输入错误';
	}else { //查询到一行记录
		$output['code'] = 1;
		$output['msg'] = '用户名或密码均正确';
	}
}

echo json_encode($output);