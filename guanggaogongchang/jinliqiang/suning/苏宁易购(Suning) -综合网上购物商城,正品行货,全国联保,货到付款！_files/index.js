var index=index||{};index.priceDOM=[];index.getPriceFlag=false;(function(c,e,b){var a=b(c,e);c.util=c.util||{};c.util.toucher=c.util.toucher||a;c.define&&define(function(g,f,h){return a})})(this,document,function(g,j){function e(l,k){return l.className.match(new RegExp("(\\s|^)"+k+"(\\s|$)"))}function b(s,r,q){this._events=this._events||{};var n,p;if(typeof(r)=="string"){n=r.replace(/^\./,"");p=q}else{n=null;p=r}if(typeof(p)=="function"&&s&&s.length){var k=s.split(/\s+/);for(var l=0,o=k.length;l<o;l++){var m=k[l];if(!this._events[m]){this._events[m]=[]}this._events[m].push({className:n,fn:p})}}return this}function h(n,o){this._events=this._events||{};if(!this._events[n]){return}var k=this._events[n];var p=o.target;while(1){if(k.length==0){return}if(p==this.dom||!p){for(var m=0,r=k.length;m<r;m++){var l=k[m]["className"];var s=k[m]["fn"];if(l==null){f(n,s,p,o)}}return}var q=k;k=[];for(var m=0,r=q.length;m<r;m++){var l=q[m]["className"];var s=q[m]["fn"];if(e(p,l)){if(f(n,s,p,o)==false){return}}else{k.push(q[m])}}p=p.parentNode}}function f(l,m,p,o){var q=o.touches.length?o.touches[0]:{};var n={type:l,target:o.target,pageX:q.clientX||0,pageY:q.clientY||0};if(l=="swipe"&&o.startPosition){n.startX=o.startPosition.pageX,n.startY=o.startPosition.pageY,n.moveX=n.pageX-n.startX,n.moveY=n.pageY-n.startY}var k=m.call(p,n);if(k==false){o.preventDefault();o.stopPropagation()}return k}function i(l,k,n,m){return Math.abs(l-k)>=Math.abs(n-m)?(l-k>0?"Left":"Right"):(n-m>0?"Up":"Down")}function a(z){var s=this;var q=0;var k=0;var m,v,l,t;var r;var y;var x=false;var u=null;function n(A){x=false;clearTimeout(y);clearTimeout(r)}function o(A){u=A;m=A.touches[0].pageX;v=A.touches[0].pageY;l=0;t=0;x=true;q=new Date();h.call(s,"swipeStart",A);clearTimeout(y);y=setTimeout(function(){n(A);h.call(s,"longTap",A)},500)}function w(B){h.call(s,"swipeEnd",u);if(!x){return}var A=new Date();if(A-k>260){r=setTimeout(function(){n();h.call(s,"singleTap",u)},250)}else{clearTimeout(r);n(B);h.call(s,"doubleTap",u)}k=A}function p(B){u=B;B.startPosition={pageX:m,pageY:v};h.call(s,"swipe",B);if(!x){return}l=B.touches[0].pageX;t=B.touches[0].pageY;if(Math.abs(m-l)>2||Math.abs(v-t)>2){var A=i(m,l,v,t);h.call(s,"swipe"+A,B)}else{n(B);h.call(s,"singleTap",B)}n(B)}z.addEventListener("touchstart",o);z.addEventListener("MSPointerDown",o);z.addEventListener("pointerdown",o);z.addEventListener("touchend",w);z.addEventListener("MSPointerUp",w);z.addEventListener("pointerup",w);z.addEventListener("touchmove",p);z.addEventListener("MSPointerMove",p);z.addEventListener("pointermove",p);z.addEventListener("touchcancel",n);z.addEventListener("MSPointerCancel",n);z.addEventListener("pointercancel",n)}function c(k,l){var l=l||{};this.dom=k;a.call(this,this.dom)}c.prototype.on=b;return function(k){return new c(k)}});index.listloop=function(b){var e={wrap:"",loopBox:"",loopChild:"",triggerLeft:".switch-prev",triggerRight:".switch-next",curCount:"",totalCount:"",hasCount:false,isLoop:true,isLazyImg:false,isLazyDom:false,delay:0,hasLabel:true,hasLabelObj:null,labelObj:null,isRandom:false};$.extend(e,b);var m=$(e.wrap),u=m.find(e.triggerLeft),a=m.find(e.triggerRight),w=m.find(e.loopBox),k=w.find(e.loopChild),h=e.step.wide,q=e.scrollWidth.wide,z=Math.ceil(k.length/h),j=k.length,n=m.find(e.curCount),B=m.find(e.totalCount),A=$(e.hasLabelObj),y=0,C;if(!bigscreen){h=e.step.narrow;q=e.scrollWidth.narrow;C=k.length%h;z=Math.ceil(k.length/h);j=k.length-C}e.hasCount&&B.html(z);u.unbind().click(function(){s()});a.unbind().click(function(){t()});$(document).keyup(function(i){if(index.isInScreen(a)){if(i.which==37||i.which==75){s()}if(i.which==39||i.which==74){t()}}});if(!(!!window.ActiveXObject||"ActiveXObject" in window)){if(m.length>0){var D=util.toucher(m[0]);D.on("swipeLeft",function(){t()}).on("swipeRight",function(){s()})}}var p=b.labelObj,c="",l;if(p){if(z<=1){p.hide()}p.find(".prev").unbind().click(function(){s()});p.find(".next").unbind().click(function(){t()});for(l=0;l<z;l++){c+="<li></li>"}p.find("ul").html(c).find("li").click(function(){y=$(this).index();v(false,y)}).first().addClass("current")}function t(){if(z==1||w.is(":animated")){return false}if(!e.isLoop){y++;if(y>=z){y=z-1}v(false,y);return}if(y==z-1){for(var i=0;i<h;i++){k.eq(i).css({position:"relative",left:z*q+"px"})}}y++;v(function(){if(y==z){y=0;k.removeAttr("style");w.css("left",y*q)}},y)}function s(){if(z==1||w.is(":animated")){return false}if(!e.isLoop){y--;if(y<=0){y=0}v(false,y);return}if(y==0){for(var i=1;i<=h;i++){k.eq(j-i).css({position:"relative",left:-z*q+"px"})}}y--;v(function(){if(y==-1){y=z-1;k.removeAttr("style");w.css("left",-y*q)}},y)}function v(G,F){if(e.hasCount){if(F>z-1){F=0}if(F<0){F=z-1}n.html(F+1)}if(!G){G=function(){}}w.stop(true).animate({left:-y*q},300,G);f();o();for(var i=(y*h);i<((y+1)*h);i++){if(k.eq(i).attr("cptId")){pid=k.eq(i).attr("cptId");if(pid){try{apsAdboardCptPvObj.aps_adboard_loadAdCptPv(pid)}catch(E){}}}}r(y==z?0:y);if(p){p.find("li").removeClass("current").eq(y==z?0:y).addClass("current")}}function f(){if(!e.isLazyDom){return}var J=k.eq(y).find(".lazy-dom"),E=J.text(),I=E.length;if(I==0){return}var L=/\n+/g,H=/<!--.*?-->/ig,N=/\/\*.*?\*\//ig,F=/[ ]+</ig,K=E.replace(L,""),M=K.replace(H,""),G=M.replace(N,""),i=G.replace(F,"<");J.before(i).remove();o()}function o(){for(var E=0;E<h;E++){var i=k.eq(y*h+E).find("img[src3]");i.each(function(){var F=$(this);F.attr("src",F.attr("src3")).removeAttr("src3").addClass("err-product")})}}function x(){var F=[],E,G;F.push('<div class="banner-pager"><div class="black"></div><ul class="pager">');for(E=1;E<=z;E++){F.push("<li"+(E==1?' class="current"':"")+"></li>")}F.push("</ul></div>");var i=$(F.join("")).appendTo(A);i.find("li").hover(function(){var H=$(this).index(),I=H*h,J=(H+1)*h;G=setTimeout(function(){w.stop(true).animate({left:-H*q},300);r(H);if(e.hasCount){n.html(H+1)}y=H;if(e.isLazyDom){var R=k.eq(y).find(".lazy-dom"),L=R.text(),Q=L.length;if(Q==0){return}var T=/\n+/g,P=/<!--.*?-->/ig,V=/\/\*.*?\*\//ig,M=/[ ]+</ig,S=L.replace(T,""),U=S.replace(P,""),O=U.replace(V,""),K=O.replace(M,"<");R.before(K).remove()}if(e.isLazyImg){for(var N=I;N<J;N++){k.eq(N).find("img[src3]").each(function(){var W=$(this);W.attr("src",W.attr("src3")).removeAttr("src3").addClass("err-product")})}}},100)},function(){clearTimeout(G)})}function r(E){m.find(".pager li").removeClass("current").eq(E).addClass("current")}if(e.hasLabel&&z>1){x()}if(e.delay){var g=setInterval(function(){t()},e.delay);m.hover(function(){clearInterval(g)},function(){g=setInterval(function(){t()},e.delay)})}};index.Slide=function(a,b){this.opt=$.extend({event:"click",mouseOverDelay:0,auto:true,delay:5000,duration:500,showLabel:true,onchange:function(c){},onchangestart:function(c){},oninitend:function(c){}},b);this.container=$(a);this.items=this.container.find("li");this.index=0;this.pager=null;this.animating=false;this.screen=false;this.mouseIn=false;this._init()};index.Slide.prototype={_init:function(){var a=this;this.opt.showLabel&&this._createLabel();this.to(0);this.container.on("mouseenter mousemove",function(){a.mouseIn=true;a.autoPause()});this.container.on("mouseleave",function(){a.mouseIn=false;if(a.isInScreen()){a.autoStart()}});if(this.isInScreen()){a.autoStart();a.screen=true}$(window).scroll(function(){if(a.isInScreen()&&a.screen==false){a.screen=true;a.autoStart()}else{if(!a.isInScreen()&&a.screen==true){a.screen=false;a.autoPause()}}});this.opt.oninitend.call(this,this.container)},_createLabel:function(){var e=this,f=[],g,c,b;f.push('<div class="banner-nav">');for(c=1;c<=this.items.size();c++){f.push('<a href="javascript:;" class="page-item">'+c+"</a>")}f.push("</div>");this.pager=typeof this.opt.showLabel=="string"?this.container.find(this.opt.showLabel):$(f.join("")).appendTo(this.container.parent().find(".banner-nav-wrapper"));if(this.opt.mouseOverDelay){this.pager.find("a").hover(function(){var a=$(this).index();g=setTimeout(function(){e.to(a)},e.opt.mouseOverDelay)},function(){clearTimeout(g)})}else{this.pager.find("a").bind(this.opt.event,function(){e.to($(this).index())})}},autoStart:function(){var a=this;this.timer=setInterval(function(){a.next()},this.opt.delay)},autoPause:function(){clearInterval(this.timer)},prev:function(){this.to(this.index==0?this.items.size()-1:this.index-1)},next:function(){this.to(this.index==this.items.size()-1?0:this.index+1)},to:function(a){var b=this;if(this.animating){return false}this.opt.onchangestart.call(this,a);this.animating=true;this.items.stop().eq(a).fadeIn(this.opt.duration,function(){b.animating=false;lazyelem.detect()}).siblings().fadeOut(this.opt.duration);lazyelem.detect();if(this.items.eq(a).attr("cptId")){pid=this.items.eq(a).attr("cptId");if(pid){try{apsAdboardCptPvObj.aps_adboard_loadAdCptPv(pid)}catch(c){}}}this.pager&&this.pager.find("a").eq(a).addClass("current").siblings().removeClass("current");this.index=a;this.opt.onchange.call(this,a)},isInScreen:function(){var a=this.container;if(a.length>0){return($(document).scrollTop()+$(window).height()-100>a.offset().top)&&(a.offset().top+a.height()-100>$(document).scrollTop())}}};index.isInScreen=function(b){var a=b;if(a.length>0){return($(window).scrollTop()+$(window).height()>a.offset().top)&&a.offset().top+a.height()>$(window).scrollTop()}};index.banner=function(){var b=new index.Slide(".banner",{mouseOverDelay:200,duration:500,delay:5000}),f=$(".banner-wrapper"),a=f.find(".angle-btn"),e=f.find(".prev-btn"),c=f.find(".next-btn"),g=$(".banner-nav");e.click(function(){b.prev()});c.click(function(){b.next()});f.hover(function(){e.show();c.show()},function(){e.hide();c.hide()});a.hover(function(){b.autoPause()},function(){b.autoStart()});g.hover(function(){b.autoPause()},function(){b.autoStart()});a.hover(function(){a.css("opacity","1")},function(){a.css("opacity","0.6")})};index.slider=function(h){var e=h.find(".slider01");var b=new index.Slide(e,{mouseOverDelay:200,duration:500,delay:5000}),g=$(h).find(".banner-wrapper"),a=g.find(".angle-btn"),f=g.find(".prev-btn"),c=g.find(".next-btn"),i=$(".banner-nav");f.click(function(){b.prev()});c.click(function(){b.next()});g.hover(function(){f.show();c.show()},function(){f.hide();c.hide()});a.hover(function(){b.autoPause()},function(){b.autoStart()});i.hover(function(){b.autoPause()},function(){b.autoStart()});a.hover(function(){a.css("opacity","1")},function(){a.css("opacity","0.6")})};index.activityTab=function(){cpmRequire($(".activityEnter"));var a=$(".activityEnter .angle-btn");var b=$(".activityEnter li").length,f=b>4?4:b;for(var c=0;c<f;c++){if($(".activityEnter li").eq(c).attr("cptId")){pid=$(".activityEnter li").eq(c).attr("cptId");if(pid){try{apsAdboardCptPvObj.aps_adboard_loadAdCptPv(pid)}catch(g){}}}}$(".activityEnter li").each(function(k){var j=$(".activityEnter li").eq(k).attr("data-tlnumber");var l=$(".activityEnter li").eq(k).find("a");var e=$(".activityEnter li").eq(k).find("img");if(j!=""){var h=index.readcookie("custno");$.ajax({cache:true,url:sn.smartDomain+"/iss/turingShelf/ajaxGetAdItem_"+j+"_1_"+h+"_tlCallback"+k+".htm",type:"get",dataType:"jsonp",jsonpCallback:"tlCallback"+k,timeout:1000,success:function(o){var p=$(".activityEnter li").eq(k),q=o.shelfCode,n,m,i;if(o.success){n=o.turingAdShelfItemBo;p.find("a").attr({href:n.linkUrl,title:n.itemName}).end().find("img").attr({src:n.imgUrl,alt:n.itemName})}else{}},error:function(){}})}});if(b>4){index.listloop({wrap:".activityEnter",loopBox:"ul",loopChild:"li",triggerLeft:".prev-btn",triggerRight:".next-btn",step:{wide:4,narrow:4},scrollWidth:{wide:1200,narrow:1000},isLoop:true});$(".activityEnter").hover(function(){a.show()},function(){a.hide()})}};index.tellTab=function(){$(".show-case .infor-nav li").hover(function(){var c=$(this),a=c.index(),b=$(".infor-list .infor-item");c.addClass("current").siblings().removeClass("current");b.eq(a).show().siblings().hide()},function(){});$(".applist li").hover(function(){var b=$(this),a=b.index();b.addClass("current").siblings().removeClass("current");lazyelem.listen()},function(){var a=$(this);a.removeClass("current")})};index.getRecommand=function(){index.getCity(function(i){sn.cityId=i;var a="",g="",c="",f="";f=index.getCookie("custno");if(typeof f!="undefined"&&f){g=f}c=index.getCookie("_snma");if(typeof c!="undefined"&&c){a=c.split("|")[1]}$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?&u="+g+"&c="+a+"&cityId="+sn.cityId+"&sceneIds=12-14&count=18",type:"GET",cache:true,dataType:"jsonp",jsonpCallback:"recommandList",error:function(j,l,k){b()},success:function(j){if(j.sugGoods[0]["resCode"]=="01"||j.sugGoods[0]["resCode"]=="03"){if(j.sugGoods[0]["skus"].length<6){b()}else{h(j);e()}}else{b()}}});function e(){var k=$(".recommand-list li"),l=parseInt(k.length/6),j=1;k.each(function(){if($(this).index()>=0&&$(this).index()<6){$(this).show()}else{$(this).hide()}});if(l<2){$(".changeCommodity").hide();return}$(".changeCommodity").on("click",function(){if(j<l){k.each(function(){if($(this).index()>=j*6&&$(this).index()<j*6+6){$(this).show()}else{$(this).hide()}});j++}else{k.each(function(){if($(this).index()>=0&&$(this).index()<6){$(this).show()}else{$(this).hide()}});j=1}lazyelem.detect()})}function h(y){var q='<ul class="recommand-list">',t=y.sugGoods[0]["skus"],v=y.sugGoods[0]["skus"].length,o="";for(var p=0;p<v;p++){var u="";if(t[p]["promotionInfo"]!=""){u='<span class="cuxiao">'+t[p]["promotionInfo"]+"</span>"}var z=t[p]["sugGoodsId"];var x=t[p]["sugGoodsCode"];var s=t[p]["sugGoodsCode"].substring(9);var l=t[p]["vendorId"];var w=t[p]["handwork"];var n="index3_none_recscnxh_1-"+(p+1)+"_p_"+l+"_"+s+"_"+w;var k="baoguang_recscnxh_1-"+(p+1)+"_"+l+"_"+s+"_"+w;var j={picUrl:"",partNumber:s,shopPicUrl:"/uimg/b2c/newcatentries/",vendorCode:l,linkType:"",trickPoint:n,linkUrl:""};var r=t[p]["price"];var m=t[p]["sugGoodsName"];if(r){if(r.indexOf(".")<=-1){r=r}else{r=r.split(".")[0]+"."+r.split(".")[1]}}else{r=""}o='<li class="item'+(p%6+1)+'" style="display:none">';q+=o+'<a name="'+n+'" href="'+index.getUrl(j,n)+'" target="_blank" title="'+m+'"><img class="recommend-img" lazy-src="'+sn.imgHost+j.shopPicUrl+j.vendorCode+"-"+x+'_1_160x160.jpg" alt="'+m+'" /></a><p class="recommend-name"><a  name="'+n+'" id="'+k+'" href="'+index.getUrl(j,n)+'" target="_blank"  title="'+m+'">'+m+'</a></p><span class="price"><i>&yen;</i><em>'+r+"</em></span>"+u+"</li>"}q+="</ul>";$(".recommand-area").append(q);lazyelem.listen($(".recommand-list").find("img[lazy-src]"),"img");index.baoguangFun("baoguang_recscnxh_1")}function b(){var l=$("body").attr("data-pageCode"),m=$(".recommand-area").attr("data-fullId"),n;var k=window.location.host;var j=sn.cmsLibDomain+"/homepage/model/"+l+"_"+m+"_lazyload.json";$.ajax({url:j,cache:false,dataType:"jsonp",jsonpCallback:"lazyload",success:function(p){var o=new Date().getTime();n=p.data;$(".recommand-area").append(n);if($(".recommand-list li").size()<6){$(".recommand-area").hide()}e();lazyelem.listen($(".recommand-list").find("img[lazy-src]"),"img");lazyelem.listen($(".recommand-list").find("li[data-sku]"),"fn",function(q){index.priceDOM.push(q);if(index.getPriceFlag){return}index.getPriceFlag=true;GetPrice.queryprice(index.priceDOM,"1",index.getpricecallback)})}})}})};(function(){var b={};index.tmpl=function a(f,e){var c=!/\W/.test(f)?b[f]=b[f]||a(document.getElementById(f).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+f.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return e?c(e):c}})();index.featureLoad=function(){if(!featureList){return}var c=featureList,e="";for(var b=0;b<featureList.length;b++){var a=bigscreen?featureList[b].imgBig:featureList[b].imgSmall;e+='<li><a href="'+featureList[b].link+'" target="_blank" title="'+featureList[b].name+'"  name="'+featureList[b].trick+'" ><img lazy-src="'+a+'" alt="'+featureList[b].desc+'"/></a></li>'}$("#feature-list").html(e);lazyelem.listen($(".g-feature").find("img[lazy-src]"),"img");lazyelem.detect()};function isLocalStorageSupported(){var c="test",b=window.localStorage;if(index.ieVersion(7)||index.ieVersion(6)||typeof JSON=="undefined"){return false}try{b.setItem(c,"testValue");b.removeItem(c);return true}catch(a){return false}}index.lazyFloor=function(){lazyelem.listen(".lazy-recommand","fn",function(){index.getRecommand()});lazyelem.listen(".lazy-floor","fn",function(g){var j=$("body").attr("data-pageCode"),l=$(g).attr("data-fullId"),m="lazyload"+l;var e=window.location.host;var b=sn.cmsLibDomain+"/homepage/model/"+j+"_"+l+"_"+m+".json";var c=isLocalStorageSupported(),i,f;l="floorId"+l;if(c&&localStorage.getItem(l)){i=JSON.parse(localStorage.getItem(l));storeTime=parseInt(i.time)+10*60*1000;var k=new Date().getTime();if(k>storeTime){$.ajax({url:b,cache:false,dataType:"jsonp",jsonpCallback:m,success:function(o){var n=new Date().getTime();f=o;if(c){localStorage.setItem(l,JSON.stringify({time:n,floorContent:f}))}h(g,f);var p=$(g).find("div[tuling]");if(p&&p.length>0){index.getCity(function(r){sn.cityId=r;for(var q=0;q<p.length;q++){index.lazyLoadInit(p[q],r)}})}}})}else{f=i.floorContent;h(g,f);var a=$(g).find("div[tuling]");if(a&&a.length>0){index.getCity(function(o){sn.cityId=o;for(var n=0;n<a.length;n++){index.lazyLoadInit(a[n],o)}})}}}else{$.ajax({url:b,cache:false,dataType:"jsonp",jsonpCallback:m,success:function(o){var n=new Date().getTime();f=o;if(c){localStorage.setItem(l,JSON.stringify({time:n,floorContent:f}))}h(g,f);var p=$(g).find("div[tuling]");if(p&&p.length>0){index.getCity(function(r){sn.cityId=r;for(var q=0;q<p.length;q++){index.lazyLoadInit(p[q],r)}})}}})}function h(p,o){if(!o||!o.data){if(c&&localStorage.getItem(l)){i=JSON.parse(localStorage.getItem(l));o=i.floorContent;if($(p).hasClass("g-floor")){$(p).find(".floor-main").append(o.data)}else{$(p).html(o.data)}}else{return}}else{if($(p).hasClass("g-floor")){$(p).find(".floor-main").append(o.data)}else{$(p).html(o.data)}}lazyelem.listen($(p).find("img[lazy-src]"),"img");lazyelem.detect();if($(p).hasClass("g-feature")){index.featureLoad()}if($(p).hasClass("g-floor")){var n=$(p).find(".g-tab-list").eq(0);n.find("a").each(function(r){if(n.find("a").eq(r).attr("cptId")){var q=n.find("a").eq(r).attr("cptId");if(q){try{apsAdboardCptPvObj.aps_adboard_loadAdCptPv(q)}catch(s){}}}});index.floorTab(p);index.slider(p);cpmRequire(p);$(".g-tab-list .col4").find("img[n-src]").each(function(){srcAttr=bigscreen?$(this).attr("w-src"):$(this).attr("n-src");$(this).attr("src",srcAttr)});lazyelem.listen($(p).find(".g-tab-list"),"dom",function(q){SFE.base.getCity(function(t){sn.cityId=t;var s=q.find("li[lazy-sku]");var r=q.find("li[data-sku]");lazyelem.listen(s,"fn",function(u){index.priceDOM.push(u);if(index.getPriceFlag){return}index.getPriceFlag=true;GetPrice.queryprice(index.priceDOM,"1",index.getpricecallback)});lazyelem.listen(r,"fn",function(u){index.priceDOM.push(u);if(index.getPriceFlag){return}index.getPriceFlag=true;GetPrice.queryprice(index.priceDOM,"1",index.getpricecallback)})})})}if($(p).hasClass("floor-zone")){lazyelem.listen($(p).find("img[lazy-src]"),"img");lazyelem.detect();index.switchBtn(".floor-zone",".floor-zone-main .switch-btn");index.listloop({wrap:".floor-zone-main",loopBox:".hots-and-share-main",loopChild:".hots-and-share-item",hasLabelObj:".hots-and-share",triggerLeft:".switch-prev",triggerRight:".switch-next",step:{wide:1,narrow:1},scrollWidth:{wide:1000,narrow:800},isLazyDom:true,isLazyImg:true})}}})};window.passport_config=window.passport_config||{base:"/",loginTheme:"b2c_pop"};index.collectShop=function(){$(".brands-list li").hover(function(){$(this).find(".black-cover").show();$(this).find(".cover-content").show()},function(){$(this).find(".black-cover").hide();$(this).find(".cover-content").hide()});index.getCollectNumber($(".brands-list").eq(0));$(".brands-list a.collect").on("click",function(){var a=$(this);ensureLogin(function(){var b=a.closest("li").attr("data-shopId");$.ajax({url:sn.favoriteDomain+"/favorite/ajax/mobile/addShopFavorite.do?shopId="+b+"&entrance=shopHome&channel=1&callback=shopCollect",cache:false,dataType:"jsonp",jsonpCallback:"shopCollect",success:function(c){if(c.returnCode==1||c.returnCode==0){a.addClass("collect-already")}}})})})};index.brandTab=function(b){var a=$(b).find(".floor-tab li"),c=null;a.hover(function(){var f=$(this),e=f.index();c=setTimeout(function(){f.addClass("on").siblings().removeClass("on");f.find("span").show().parent().siblings().find("span").hide();f.find("em").addClass("hover-font").parent().parent().siblings().find("em").removeClass("hover-font");var g=$(b).find(".g-tab-list").hide().eq(e).show();lazyelem.detect()},200)},function(){clearTimeout(c)})};index.getCollectNumber=function(b){var k=b.find("li[data-sale]"),l=k.size(),f=[],a,g=$(b).index(".brands-list");for(var e=0;e<Math.ceil(l/10);e++){var c={index:e,shopId:[],doms:[]};f.push(c)}k.each(function(i){var m=$(this).attr("data-shopId"),i=Math.ceil((i+1)/10)-1;f[i].shopId.push(m);f[i].doms.push(this)});for(var h=0;h<f.length;h++){j(h)}function j(m){var i=f[m];$.ajax({dataType:"jsonp",url:sn.favoriteDomain+"/ajax/getShopFavoritedNum.do?shopIdStr="+i.shopId.join("_"),jsonpCallback:"getNumberCallback"+g+m,cache:true,success:function(n){if(n&&n.shopFavoritedCnt){for(var o=0;o<n.shopFavoritedCnt.length;o++){a=n.shopFavoritedCnt[o].shopCustCnt;if(a>=10000){a=(a/10000).toFixed(1)+"万"}$(f[m].doms[o]).find(".cover-content p").html("已有"+a+"人收藏")}}}})}};index.priceDOMBaogunag=new Array();index.getBaogunagFlag=false;index.baoguangFun=function(a){if(typeof _analyseExpoTags=="function"){_analyseExpoTags("a",a)}else{setTimeout(function(){index.baoguangFun(a)},2000)}};index.downShiftFlag=false;index.baseObj={id:"",name:"",trickPoint:"",vendorCode:"",partNumber:"",linkType:"1",shopPicUrl:"/uimg/b2c/newcatentries/",floorNum:""};index.data={data:[]};index.getUrl=function(h,e){var b="";if(h.trickPoint&&h.trickPoint.length>0){b="?srcPoint="+h.trickPoint}if(h.linkUrl&&h.linkUrl!=""){if(h.linkUrl.indexOf("http://")==0){return h.linkUrl+b}else{return"http://"+h.linkUrl+b}}else{var c=h.linkType;var a=h.vendorCode;var f=h.partNumber;var g=sn.productDomain;if(g.substring(g.length-1)!="/"){g=g+"/"}if(null!=e){if(a&&a.length>0){return g+a+"/"+f+".html?srcPoint="+e+"&src="+e}else{return g+f+".html?srcPoint="+e+"&src="+e}}else{if(a&&a.length>0){return g+a+"/"+f+".html"+b}else{return g+f+".html"+b}}}};index.getPic=function(f,b){var c=sn.imgHost;if(c.substring(c.length-1)!="/"){c=c+"/"}if(f.picUrl&&f.picUrl!=""){return c+f.picUrl}else{var e=f.shopPicUrl;var a="1";var b="200x200";if(c){e=e.substring(1)}if(f.vendorCode&&f.vendorCode.length>0){return c+e+f.vendorCode+"-000000000"+f.partNumber+"_"+a+"_"+b+".jpg"}return c+"/b2c/catentries/000000000"+f.partNumber+"_"+a+"_"+b+".jpg"}};index.getSku=function(f){var c=f.partNumber+"|1|";var e="";var b=f.linkType;var a=f.vendorCode;if(b&&b!="1"){if(b=="2"){e="4|"}else{if(b=="3"){e="5|"}else{if(b=="4"){e="6|"}else{if(b=="5"){e="7|"}else{if(b=="6"){e="8|"}else{if(b=="7"){e="9|"}}}}}}}else{if(a&&a!=""){if(a=="0000000000"){e="3|"}else{e="2|"+f.vendorCode}}else{e="|"}}return'lazy-sku="'+c+e+'"'};index.getId=function(f,c){var h="";var g="0000000000";var e=f.trickPoint;if(e&&""!=e){var b=e.indexOf("rec");var a="";if(-1!=b){a=e.substring(b)}if(f.vendorCode&&f.vendorCode.length>0){g=f.vendorCode}h="baoguang_"+a+"-"+c+"_"+g+"_"+f.partNumber+"_0"}return h};index.getTrickForPic=function(g,f,a){var b="";var e=g.partnumber;if(!e){e=g.partNumber}if(e&&e.length>9){e=e.substring(9)}var c="c";if(a){c="p"}var h="0000000000";if(g.vendorCode&&g.vendorCode.length>0){h=g.vendorCode}b=g.trickPoint+"-"+f+"_"+c+"_"+h+"_"+e+"_0";return b};index.getExpo=function(g,f){var a="";var c=g.partnumber;if(!c){c=g.partNumber}if(c&&c.length>9){c=c.substring(9)}var h="0000000000";if(g.vendorCode&&g.vendorCode.length>0){h=g.vendorCode}var e=g.floorNum;var b="";if(f>9){b=f}else{b="0"+f}a="index_lcsp0"+e+""+b+":"+h+"|"+c;return a};index.getJsonObj=function(f,c,e){var i=index.getTrickForPic(f,c,true);var a=index.getUrl(f,i);var h=index.getPic(f);var j=index.getSku(f);var b=index.getId(f,c);var g=index.getTrickForPic(f,c,false);var l=index.getExpo(f,c);var k={id:b,name:f.name,href:a,trickPoint:f.trickPoint,trickPointT:g,trickPointP:i,pic:h,sku:j,expo:l};return k};index.load=function(){var e=index.data.data;var c=index.lazyLoadArr[0];var b=$(c).attr("domId");if(c&&b&&b.length>0){b=$(c).attr("domId")}if(e.length>0){var a=index.tmpl(b,index.data);$(c).html('<script type="text/html">'+a+"<\/script>")}$(c).show()};index.lazyLoadInit=function(a,b){index.lazyLoadArr.push(a);if(!index.lazyLoadStatus){index.lazyLoadStatus=true;index.lazyLoadData(b)}};index.checkSmart=function(){$.ajax({url:sn.smartDomain+"/iss/turingShelf/ajaxIsNormalLevel_index.lazyLoadSmart.html",async:false,cache:false,type:"GET",dataType:"jsonp",jsonp:index.lazyLoadSmart,success:function(a){}})};index.lazyLoadSmart=function(c,f){index.downShiftFlag=c;var a=index.lazyLoadArr[0];var g="";var i=sn.cityId;var j="";var k="";var e=$(a).attr("dataCode");var b=$(a).attr("showCount");if(c=="h"){j=d("custno");k=d("_snma");if(k&&k.length>0){var h=k.split("_");if(h.legnth>2){k=h[1]}else{k=""}}else{k=""}}else{if(c=="l"){return false}}$.ajax({url:sn.smartDomain+"/iss/turingShelf/ajaxGetShelfItem_"+e+"_"+b+"_"+g+"_"+i+"_"+j+"_"+k+"_smartCb.html",cache:true,async:false,type:"GET",jsonp:false,jsonpCallback:"smartCb",timeout:3000,dataType:"jsonp",error:function(l,n,m){},success:function(l){}})};var smartCb=function(e){var a=index.lazyLoadArr[0];var c=$(a).attr("trickPoint");var b=$(a).attr("floorNum");if(e&&e.success&&e.shelfInfo){var h=e.shelfInfo;var k=e.vendor;if(h.itemList&&h.itemList.length>0){var j=new Array();for(var f=0;f<h.itemList.length;f++){var m=h.itemList[f];var l=m.partnumber;if(l&&l.length>9){l=l.substring(9)}var g=f+1;if(f<9){g="0"+g}index.baseObj.name=m.itemName;index.baseObj.trickPoint=c;index.baseObj.vendorCode=m.vendorCode;index.baseObj.partNumber=l;index.baseObj.floorNum=b;j.push(index.getJsonObj(index.baseObj,f+1,true))}index.data.data=j}}else{index.data.data=[]}index.lazyLoadCallBack()};index.lazyLoadArr=new Array();index.lazyLoadStatus=false;index.lazyLoadCallBack=function(){index.load();index.lazyLoadArr.shift();if(index.lazyLoadArr.length>0){index.lazyLoadData(sn.cityId)}else{index.lazyLoadStatus=false}};index.isLazyLoad=function(b,a){index.lazyLoadArr.push(domObj);if(!index.lazyLoadStatus){index.lazyLoadStatus=true;index.lazyLoadData(a)}};index.lazyLoadData=function(a){if(index.lazyLoadArr.length>0){if(index.downShiftFlag){index.lazyLoadSmart(index.downShiftFlag,a)}else{index.checkSmart()}}};index.getCity=function(a){SFE.base.getCity(function(b){if(a&&$.isFunction(a)){a(b)}})};index.SetCookie=function(c,e,a){var b=new Date;b.setTime(b.getTime()+a*24*60*60*1000);document.cookie=c+"="+escape(e)+";expires="+b};index.getCookie=function(e){var c;return(c=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)")))?decodeURIComponent(c[2].replace(/\+/g,"%20")):null};index.readcookie=function(c){var b=document.cookie.split("; "),f="";for(var e=0;e<b.length;e++){var a=b[e].split("=");if(c==a[0]){f=unescape(a[1])}}return f};index.ieVersion=function(c){var a=document.createElement("b");a.innerHTML="<!--[if IE "+c+"]><i></i><![endif]-->";return a.getElementsByTagName("i").length===1};index.setData=function(a,b){if(window.localStorage){localStorage.setItem(a,b)}};index.getData=function(a){if(window.localStorage){return localStorage.getItem(a)}return null};index.browserZoomTip=function(){if(/ipad|iphone|android|mac/ig.test(navigator.userAgent)){return}if(index.getData("zoomTip")){return}detectZoom=function(){var f=0,e=0,e=window.screen,h=navigator.userAgent.toLowerCase(),g=/mac/ig.test(h);(window.devicePixelRatio!==void 0&&!g)?f=window.devicePixelRatio:~h.indexOf("msie")?e.deviceXDPI&&e.logicalXDPI&&(f=e.deviceXDPI/e.logicalXDPI):window.outerWidth!==void 0&&window.innerWidth!==void 0&&(f=window.outerWidth/window.innerWidth);f&&(f=Math.round(f*100));window.devicePixelRatio&&window.devicePixelRatio===1&&(e=Math.round(window.outerWidth/window.innerWidth*100),Math.abs(f-e)>2&&(f=e));return f};function a(){var c='<div id="browserZoomTip" class="browser-zoom-tip"><div class="wrapper"><a href="javascript:void(0);" class="close">&times;</a><i></i>您的浏览器目前处于缩放状态哦，会导致页面显示不正常，您可以在键盘上同时按下<b>Ctrl</b>+<b>0</b>键恢复初始状态。<a href="javascript:void(0);" class="noagain">不再提示</a></div></div>',b=detectZoom();if(b!=100&&$("#browserZoomTip").length==0){$("body").prepend(c);$("#browserZoomTip").find(".close").click(function(){$("#browserZoomTip").remove()});$("#browserZoomTip").find(".noagain").click(function(){index.setData("zoomTip",1);$("#browserZoomTip").remove();$(window).unbind("resize.zoom")})}if(b==100&&$("#browserZoomTip").length>0){$("#browserZoomTip").remove()}}a();$(window).bind("resize.zoom",function(){a()})};index.recmdActive=function(){var j=$(".recmd-active"),c=j.find(".btn"),i=j.find(".bg"),f=true,e,h=false,g=false,k=bigscreen?1190:990;if(index.ieVersion(6)||j.length==0){return}var m=index.getCookie("recmdActive"),l=bigscreen?595:495,b;function n(){e=Math.ceil($(document).width()/2-l<0?0:$(document).width()/2-l)}n();$(window).bind("scroll resize",function(){n()});if(!m){h=true}function a(){if(h){j.show().stop(true).animate({left:e},600);c.removeClass("btn-open").addClass("btn-close").attr({title:"收起",name:"收起按钮的埋点值"});i.fadeOut()}}a();$(window).bind("resize",function(){if(h&&c.hasClass("btn-close")){j.css("left",e)}});j.on("click",".btn",function(){g=true;clearTimeout(b);var o=$(this);if(o.hasClass("btn-open")){i.fadeOut();c.removeClass("btn-open").addClass("btn-close").attr({title:"收起",name:"收起按钮的埋点值"});j.stop(true).animate({left:e},300)}else{i.fadeIn();c.removeClass("btn-close").addClass("btn-open").attr({title:"展开",name:"展开按钮的埋点值"});j.stop(true).animate({left:-k},300)}});if(f){f=false;index.SetCookie("recmdActive",true,30)}if(!g&&c.hasClass("btn-close")){b=setTimeout(function(){i.fadeIn();c.removeClass("btn-close").addClass("btn-open").attr({title:"展开",name:"展开按钮的埋点值"});j.stop(true).animate({left:-k},300)},7000)}};index.topActive=function(){var f=$("#__TOP_ACTIVE__"),e=f.find(".top-active-wrap"),b=e.find("img"),a=parseInt(e.attr("data-height")),c=f.find(".btn"),g=true;f.on("click",".btn",function(){var i=$(this);if(!i.hasClass("btn-open")){c.removeClass("btn-close").addClass("btn-open").attr({title:"打开",name:"打开埋点值"});if(a>0){e.stop(true).animate({height:0},200)}else{e.hide()}}else{c.removeClass("btn-open").addClass("btn-close").attr({title:"关闭",name:"关闭埋点值"});if(a>0){e.stop(true).animate({height:a},200)}else{e.show().css("height","auto")}}var h=new Date();h.setTime(h.getTime()+12*60*60*1000);if(g){g=false;document.cookie="topActiveStatus=true;expires="+h}})};index.newUser=function(){var b=$(".new-user"),c,a=function(){var g=$(".dialog-overlay"),f=b.find(".close"),e=$(document).height();g.css("height",e);b.show();g.show();f.on("touchstart click",function(){g.hide();b.hide()});index.setData("newUserDialog",new Date().getTime()+600000)};if(index.ieVersion(6)||b.length==0){return}if(index.getCookie("logonStatus")){return}if(!index.getCookie("idsLoginUserIdLastTime")){if(window.localStorage){c=parseInt(index.getData("newUserDialog"));if(!c||c<new Date().getTime()){a()}}else{a()}}};index.activeDialog=function(){index.recmdActive();var a=index.getCookie("recmdActive");if(!a){index.newUser()}};index.oldBrowser=function(){index.SetCookie("indexCheckBrowser",1,1);var b='<div class="old-browser-warning"><span class="old-browser-warning-close"></span><a class="old-browser-warning-content" href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie" target="_blank">IE浏览器最新版</a><div class="old-browser-warning-bg"></div></div><div class="old-browser-dialog-overlay"></div>';$("body").append(b);var c=$(".old-browser-dialog-overlay"),a=$(".old-browser-warning");c.dblclick(function(){$(this).unbind().remove();a.remove()});a.find(".old-browser-warning-close").one("click",function(){c.unbind().remove();a.remove()});if(index.ieVersion(6)){var f=$(window).height();var e=$(window).scrollTop();a.css({top:e+f/2});c.css({top:e,height:f});$(window).scroll(function(){var g=$(this).scrollTop();a.css({top:g+f/2});c.css({top:g})})}};index.floorTab=function(b){var a=$(b).find(".floor-tab li"),c=null;a.hover(function(){var f=$(this),e=f.index();c=setTimeout(function(){f.addClass("on").siblings().removeClass("on");f.find("span").show().parent().siblings().find("span").hide();f.find("em").addClass("hover-font").parent().parent().siblings().find("em").removeClass("hover-font");var k=$(b).find(".g-tab-list").hide().eq(e).show();lazyelem.detect();var h="";var j=$(b).find(".g-tab-list").eq(e).attr("trickpoint");if(j){var g=j.indexOf("rec");if(-1!=g){h="baoguang_"+j.substring(g)}index.baoguangFun(h)}cpmRequire($(b));var i=$(b).find(".g-tab-list").eq(0);i.find("a").each(function(m){if(i.find("a").eq(m).attr("cptId")){var l=i.find("a").eq(m).attr("cptId");if(l){try{apsAdboardCptPvObj.aps_adboard_loadAdCptPv(l)}catch(n){}}}})},200)},function(){clearTimeout(c)})};index.picOpacity=function(e,b){var c=$(e),a=b;c.on("mouseenter","a img",function(){$(this).css("opacity",a)}).on("mouseleave","a img",function(){$(this).css("opacity",1)})};index.switchBtn=function(b,a){$(b).hover(function(){$(a).stop(true,true).fadeIn("fast")},function(){$(a).stop(true,true).fadeOut("fast")})};index.getFloorNum=function(){var c=$(".floor");var a=c.length;for(var b=0;b<a;b++){c.eq(b).addClass("J-floor"+(b+1))}};index.floatBar=function(){var b={contents:null,align:"right",vertical:"middle",zIndex:10000,css:null,id:null,ieFixed:true};var c=($.browser.msie)?parseInt($.browser.version):false;if(arguments.length<1||!(arguments[0] instanceof Object)){return $.error("ECode.floatBar: 参数必须为JSON对象")}$.extend(b,arguments[0]);var a={position:"fixed",top:"-9999em",left:"-9999em"};if(c&&c<=6){a.position="absolute"}$('<div class="ECode-floatBar"></div>').css(a).appendTo("body");var h=$("body").find(".ECode-floatBar:last");h.append(b.contents);var e=h.width(),i=h.height(),g={zIndex:b.zIndex};if(b.id!=null){h.attr("id",b.id)}switch(b.align){case"right":g.left="auto";g.right=0;break;case"left":g.right="auto";g.left=0;break;case"center":g.right="auto";g.left="50%";g.marginLeft=-e/2;break}switch(b.vertical){case"top":g.top=0;break;case"bottom":g.top="auto";g.bottom=0;break;case"middle":g.top="50%";g.marginTop=-i/2;if(c&&c<=6){g.marginTop=0}break}h.css($.extend(g,b.css));var f=function(){var n=$(document).scrollTop(),j=$(window).height(),k=$(document).width();switch(b.vertical){case"top":h.stop().animate({top:n});break;case"bottom":var m=j+n-i;if(b.css.marginBottom!=null){var l=parseInt(b.css.marginBottom);if(l>=0){m-=l}}h.css({marginTop:0}).stop().animate({top:m});break;case"middle":h.stop().animate({top:j/2+n-i/2});break}};if(b.ieFixed&&c&&c<=6){f();$(window).scroll(function(){f()});$(window).resize(function(){f()})}};index.floatBarEffect=function(){var c=$(".ECode-floatBar"),f=index.ieVersion(6),b=$(".recmd-active");function a(){var g=parseInt($(document).scrollTop()),h=$(".floor:first").offset().top,i=$(".ng-footer").offset().top;if(g+$(window).height()>h&&i>(g+$(window).height()-200)){if(f){c.show()}else{c.stop(true,true).fadeIn(500);if(b.find(".btn").hasClass("btn-open")){b.hide()}}}else{if(f){c.hide()}else{c.stop(true,true).fadeOut(500);if(b.find(".btn").hasClass("btn-open")){b.show()}}}}function e(){var g=parseInt($(document).scrollTop()),h=$(".floor:first").offset().top,i=$(".ng-footer").offset().top;if(g+$(window).height()>h&&i>(g+$(window).height()-200)){if(b.find(".btn").hasClass("btn-open")&&!f){b.hide()}}else{if(b.find(".btn").hasClass("btn-open")&&!f){b.show()}}}bigscreen&&a()||e();$(window).bind("scroll resize",function(){bigscreen&&a()||e()})};index.floorGuide=function(){var a=$(".floor-guide"),h=a.find("li"),f,j,c,g=$("#goTop"),e=true;g.click(function(){e=false;$("html, body").stop(true).animate({scrollTop:0},"fast",function(){e=true})});if(a.length==0){return}h.click(function(){e=false;var k="."+$(this).attr("rel");if($(k).length==0){return}$(this).addClass("on").siblings().removeClass("on");$("html, body").stop(true).animate({scrollTop:$(k).offset().top-50},"fast",function(){e=true})});h.hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});function b(l){var k=$(".floor").eq(l-1);if(k.length>0){return k.offset().top-$(document).scrollTop()}}function i(){var k=h.length;if(b(1)<=0){for(var l=2;l<=k;l++){if(b(l)-150>0){h.eq(l-2).addClass("on").siblings().removeClass("on");return}}h.eq(k-1).addClass("on").siblings().removeClass("on")}else{h.removeClass("on").eq(0).addClass("on")}}i();$(window).scroll(function(){if(e){i()}})};index.getpricecallback=function(c){for(var a=0;a<c.length;a++){if(c[a]){var b=0;var e=0;if(c[a].price){b=c[a].price}if(/^[\u4e00-\u9fa5]+$/i.test(b)){index.priceDOM[0].find(".price").html("<b>"+b+"</b>")}else{if(c[a].snPrice){e=c[a].snPrice}if(parseFloat(b)<=0){index.priceDOM[0].find(".price").html("暂无报价")}else{index.priceDOM[0].find(".price").html("<i>&yen;</i><span>"+b+"</span>")}}}else{index.priceDOM[0].find(".price").html("暂无报价")}index.priceDOM.shift()}if(index.priceDOM.length>0){GetPrice.queryprice(index.priceDOM,"1",index.getpricecallback)}else{index.getPriceFlag=false}};index.gonggao=function(){var a=true,f=$(".show-case"),c=$(".infor-content"),e=$(".infor-nav-narrow"),b=$(".show-btn");if(!bigscreen){b.on("click",function(){if(a){f.css("height","455px");c.show();e.hide();b.addClass("close-btn");a=false}else{f.css("height","54px");c.hide();e.show();b.removeClass("close-btn");a=true}})}};$(function(){lazyelem.listen();if(!(!!window.ActiveXObject||"ActiveXObject" in window)){var a=$(".first-screen .banner");if(a.length>0){var b=util.toucher(a[0]);b.on("swipeLeft",function(){Banner._pauseAuto();Banner._startAuto();Banner.switchType=0;Banner.next()}).on("swipeRight",function(){Banner._pauseAuto();Banner._startAuto();Banner.switchType=0;Banner.prev()})}}index.topActive();index.banner();index.gonggao();index.getFloorNum();if(screen.width<=1280){index.floatBar({zIndex:10000,contents:$(".floor-guide"),align:"center",vertical:"middle",css:{"margin-left":"-653px"}})}else{index.floatBar({zIndex:10000,contents:$(".floor-guide"),align:"center",vertical:"middle",css:{"margin-left":"-670px"}})}index.floatBarEffect();index.floorGuide();index.activityTab();index.tellTab();index.lazyFloor();index.activeDialog();index.browserZoomTip();index.brandTab(".g-brand");index.collectShop();index.picOpacity(".main-cont","0.8");lazyelem.listen()});