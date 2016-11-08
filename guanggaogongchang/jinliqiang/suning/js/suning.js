$(document).ready(function () {
	//登录按钮
	$("#register").on("click", function () {
		$("#register_window").css("display", "block")
	})
	//注册按钮
	$('[data-close="me"]').on("click", function (e) {
		e.preventDefault();
		$(this).parent().css("display", "none");
	});
	$("#nav_list>li").on("mouseover", function () {
		$(this).children("div").css('display', 'block');
	})
	$("#nav_list>li").on('mouseout', function () {
		$(this).children("div").css('display', 'none');
	})

	$("#new_zhuce").on("click", function () {
		$("#zhuce").css("display", "block")
	});
	$("#zhuce a").on("click", function (e) {
		e.preventDefault();
		$("#zhuce").css("display", "none")
	});
	$("#useName").on("focus", function () {
		$("#useName_span").html("");
		$("#useName_span").html("6~10位数字、字母下划线组合");
		useName_span.style.color = '#0a0';
	});
	/****************top**********************/
	$('[data-display="block"]').on('mouseover', function () {
		$(this).children('ul').css('display', 'block');
		$(this).children('a').css('color', '#f00');
		$(this).find('b').addClass('hover')
	})
	$('[data-display="block"]').on('mouseout', function () {
		$(this).children('ul').css('display', 'none');
		$(this).children('a').css('color', '#666');
		$(this).find('b').removeClass('hover')
	})
	//异步数据库验证
	var useName;
	$("#useName").on("blur", function () {
		var n = this.value;
		if (!n) { //输入为空，无需验证
			return;
		}
		$("#useName_span").html("");
		var reg = /^\w{6,10}$/;
		var r = reg.test($("#useName").val());
		if (r) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) { //响应完成且成功
						doResponse(xhr);
					} else {  //响应完成但有错误
						alert('响应完成但有错误！');
					}
				}
			}
			xhr.open('get', 'suningName.php?use=' + n, true);
			xhr.send(null);
		} else {
			$("#useName_span").html("用户名太短");
			useName_span.style.color = '#a00';
			useName = false;
		}
		/**无刷新无提交的验证用户名是否存在——异步请求**/

	});
	function doResponse(xhr) {
		var txt = xhr.responseText;
		if (txt === 'cunzai') {
			useName_span.innerHTML = '该用户名已被占用！';
			useName_span.style.color = '#a00';
			useName = false;
		} else if (txt === 'bucunzai') {
			useName_span.innerHTML = '该用户名可以使用！';
			useName_span.style.color = '#0a0';
			useName = true;
		}
	}

//密码验证
	var usePwd;
	$("#usePwd").on("focus", function () {
		$("#usePwd_span").html("");
		$("#usePwd_span").html("8~12位数字、字母下划线组合");
		$("#usePwd_span").css("color", '#0a0')
	});
	$("#usePwd").on("blur", function () {
		$("#usePwd_span").html("");
		var reg = /^\w{8,12}$/;
		var r = reg.test($("#usePwd").val());
		if (r) {
			$("#usePwd_span").html("密码强度合格");
			$("#usePwd_span").css("color", '#0a0');
			usePwd = true;
		} else {
			$("#usePwd_span").html("密码强度不够");
			$("#usePwd_span").css("color", '#a00');
			usePwd = false;
		}
	});

	$("#usepwd2").on("focus", function () {
		$("#usePwd2_span").html("");
		$("#usePwd2_span").html("8~12位数字、字母下划线组合");
		$("#usePwd2_span").css("color", '#0a0');
	});
	var usepwd2;
	$("#usepwd2").on("blur", function () {
		$("#usePwd2_span").html("");
		if ($("#usepwd2").val()) {
			if ($("#usePwd").val() == $("#usepwd2").val()) {
				$("#usePwd2_span").html("请牢记密码");
				usepwd2 = true;
			} else {
				$("#usePwd2_span").html("密码不一致");
				$("#usePwd2_span").css("color", '#a00');
				usepwd2 = false;
			}
		}
	});
	var phone;
	$("#phone").on("blur", function () {
		$("#phone_span").html("");
		var reg = /^1[34578]\d{9}$/;
		var r = reg.test($("#phone").val());
		if (r) {
			$("#phone_span").html("验证通过");
			$("#phone_span").css("color", '#0a0');
			phone = true;
		} else {
			$("#phone_span").html("手机号格式不正确");
			$("#phone_span").css("color", '#a00');
			phone = false;
		}
	});
//debugger;
	var i = 0;

	function valiAll(e) {
		//console.log(usePwd);
		//debugger;
		//用户名验证不通过	
		console.log("调用" + i++);
		if (!useName) {
			$("#useName").focus();
			return;
		}
		console.log(usePwd);
		//密码验证不通过
		if (!usePwd) {
			$("#usePwd").focus();
			return;
		}
		//密码验证不通过
		if (!usepwd2) {
			$("#usepwd2").focus();
			return;
		}
		//手机验证不通过
		if (!phone) {
			$("#phone").focus();
			return;
		}
		//debugger;
		var requestData = $('#form').serialize();
		$.post('suning.php', requestData, function (data) {
			$('#register').html('欢迎回来：' + data);
			$("#new_zhuce").css("display", "none");
		});
		$('#zhuce').fadeOut(500);
		console.log("执行完成");
	}

	$("#sub").on(
		"click", function (e) {
			e.preventDefault();
			valiAll();
		}
	);

	/****2 当用户点击“提交登录信息”时，进行服务器端验证****/
	$('#denglu').click(function () {
		//获得用户的所有输入——表单序列化
		var requestData = $('#denglu_form').serialize();
		/**将用户输入异步提交给服务器，进行用户名和密码的验证**/
		$.post('denglu.php', requestData, function (data) {
			if (data.code !== 1) { //登录失败
				$('#yanzheng').html(data.msg);
			} else { //登录成功
				$('#register_window').fadeOut(500);
				var uname = $('[name="user_name"]').val();
				$('#register').html('欢迎回来：' + uname);
				$("#new_zhuce").css("display", "none");
			}
		});
	});
	/********************************随着页面滚动异步加载内容**********************************/
	var fangxin = true;
	var f_1 = true;
	var f_2 = true;
	var f_3 = true;
	var f_4 = true;
	var f_5 = true;
	var f_6 = true;
	var f_7 = true;
	var f_8 = true;
	var f_9 = true;
	var f_10 = true;
	var f_11 = true;
	window.addEventListener("scroll", function () {
		//console.log(main_box1.offsetTop);   //#main_box1距离文档顶部的距离
		//console.log(document.body.scrollTop);//获得页面滚动的距离
		//console.log(innerHeight);//浏览器窗口的高度
		var a = document.body.scrollTop + innerHeight;
		floor(a);
	})

	function floor(num) {
		if (num >= main_box1.offsetTop + 200) {
			$("#d1").css("display", "block");
			if (fangxin) {
				fangxin = false;
				$.get('fangxin.php', function (arr, msg, xhr) {
					//console.log('开始处理响应数据...');
					//console.log(arguments);
					for (var i = 0; i < arr.length; i++) {
						var msg = arr[i];
						$('#main_box1>ul.rt').append(`<li>
						<a href="#"><img src=${msg.img}></a>
						</li>`
						);
					}
				});
			}
		} else {
			$("#d1").css("display", "none");
		}
	}

	/*******************评价********************************/
	$('#clickme').on('click', function () {
		console.log($('#liuyan').val());
		if ($('#liuyan').val()) {
			var Data = $('#evaluate').serialize();
			$.post('pingjia.php', Data);
			alert("感谢您的反馈");
		}
	})
})

