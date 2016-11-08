//window.$=HTMLElement.prototype.$=
//  function(selector){
//    var elems=
//      (this==window?document:this)
//        .querySelectorAll(selector);
//    return elems.length==0?null:
//           elems.length==1?elems[0]:
//                           elems;
//  }
/*广告图片数组*/
var images=[
{"i":0,"img":"imag/146856550789994412.jpg"},
{"i":1,"img":"imag/146848106182056969.jpg"},
{"i":2,"img":"imag/146848352635976265.jpg"},
{"i":3,"img":"imag/146863801829778599.jpg"},
{"i":4,"img":"imag/146847724762003117.jpg"},
];

var slider={
	LIWIDTH:0,//保存每个li的宽度
	DISTANCE:0,//保存轮播移动的总距离
	DURATION:1500,//保存轮播的总时间
	STEPS:100,//保存轮播的总步数
	interval:0,//保存每步轮播的时间间隔
	step:0,//保存每步轮播的步长
	timer:null,//保存当前轮播的序号
	moved:0,//保存本次轮播已经移动的步数
	WAIT:300,//保存自动轮播之间的时间间隔
	canAuto:true,//保存能否启动自动轮播
	init:function(){
		//计算 每步轮播的时间间隔 interval=轮播的总时间DURATION/轮播的总步数STEPS
		this.interval=this.DURATION/this.STEPS;
		//获得id为adv的元素计算后的width属性，转为浮点数，保存在LIWIDTH属性中
		this.LIWIDTH=parseFloat(
			$("#adv").css("width")
		);
		this.updateView();//更新页面
		var me=this;//留住this
		this.autoMove();//启动自动轮播
	},
	autoMove:function(){//启动自动轮播
		this.timer=setTimeout(//启动一次性定时器
			function(){
				if(this.canAuto){//如果canAuto是true
				  this.move(1);//调用move，移动1次
				}else{
				  this.autoMove();//重新等待
				}
			}.bind(this),this.WAIT
		);
		
	},
	move:function(n){//启动一个轮播
		//n*LIWIDTH，保存在DISTANCE属性中
		this.DISTANCE=n*this.LIWIDTH;
		//DISTANCE/STEPS，保存在属性step中
		this.step=this.DISTANCE/this.STEPS;
		if(n<0){//如果是右移
			//删除images结尾的n个元素,拼接到images开头,将结果保存回images
			images=images.splice(images.length+n,-n).concat(images);
			this.updateView();//更新页面
			//设置id为adv_box的元素的left为n*LIWIDTH
			$("#adv_box").css("left",n*this.LIWIDTH+"px");
		}
		//启动一次性定时器，设置任务为moveStep(提前绑定this),间隔为interval,将序号保存在timer中
		this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
	},
	moveStep:function(n){//移动一步
		//获得id为adv_box的元素计算后的left，转为浮点数保存在变量left中
		var left=parseFloat($("#adv_box").css("left"));
		//设置id为imgs的元素的left为left-step
		$("#adv_box").css("left",left-this.step+"px");
		this.moved++;//moved+1
		//如果moved<STEPS,就启动一次性定时器
		if(this.moved<this.STEPS){
			this.timer=setTimeout(
			this.moveStep.bind(this,n),this.interval);
		}else{
			this.timer=null;
			this.moved=0;
			if(n>0){//左移
				//删除images开头的n个元素，将删除的结果拼接到images结尾，将结果保存回images
				images=images.concat(images.splice(0,n));
				this.updateView();//更新界面
			}
			//将id为adv_box的元素的left清除
			$("#adv_box").css("left","");
			this.autoMove();//启动自动轮播:
		}
	},
	updateView:function(){//按数组更新页面
		//遍历images数组,同时声明空字符串html1和html2
		for(var i=0,html1="",html2="";i<images.length;i++){
			//向html1中拼接:
			//<li><img src="当前元素的img"></li>
			html1+='<li><img src="'+images[i].img+'"></li>';
			//console.log(images[i].i);
			//向html2中拼接:<li>i+1</li>
			//html2+="<li>"+(i+1)+"</li>";
		}//(遍历结束)
		//设置id为imgs的元素的内容为html1
		$("#adv_box").html(html1);
		//设置id为imgs的元素的宽为:
		//images数组的元素个数*LIWIDTH
		$("#adv_box").css("width",images.length*this.LIWIDTH+"px");
	},
}
window.addEventListener(
  "load",function(){slider.init();}
);