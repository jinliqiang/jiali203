var GetPrice=GetPrice||{};GetPrice.priceDOM=new Array();GetPrice.getPriceFlag=false;GetPrice.cityLESId="";GetPrice.districtLESId="";GetPrice.channel="";GetPrice.callback="";GetPrice.queryprice=function(h,j,m){GetPrice.priceDOM=h;GetPrice.channel=j;GetPrice.callback=m;if(GetPrice.cityLESId==""){GetPrice.cityInf(GetPrice.cityInfCallback)}else{var g=h[0];var o=h.length>20?20:h.length;var a="";var b="";var k="";for(var f=0;f<o;f++){var e=[];if(typeof(h[f].attr("data-sku"))=="undefined"){e=h[f].attr("lazy-sku").split("|")}else{e=h[f].attr("data-sku").split("|")}var l=e[0];var n="";var c="1";if(e[2]=="2"){n=e[3];c="2"}else{if(e[2]=="3"){n="0000000000";c="2"}}a+="000000000"+l;b+=n;k+=c;if(f!=o-1){a+=",";b+=","}}$.ajax({url:icpsDomain+"/icps-web/getVarnishAllPrice014/"+a+"_"+GetPrice.cityLESId+"_"+GetPrice.districtLESId+"_"+b+"_"+j+"_pricecallback.vhtm",cache:true,dataType:"jsonp",jsonp:false,jsonpCallback:"pricecallback",timeout:3000,error:function(i,q,p){},success:function(i){m(i)}})}};GetPrice.cityInf=function(c){var g=d("SN_CITY");if(g&&compareMDMIdAndLesId(g)){var f=analyzeCookie(g);if(typeof c=="function"){c(f)}}else{var e=/^(\w*)(pre)(\w*)(.cnsuning.com)$/;var h=/^(\w*)(sit)(\w*)(.cnsuning.com)$/;var i=/^(\w*)(dev)(\w*)(.cnsuning.com)$/;var b=document.location.hostname;var j="//ipservice.suning.com";if(e.test(b)){j="//ipservicepre.cnsuning.com"}else{if(h.test(b)){j="//ipservicesit.cnsuning.com"}else{if(i.test(b)){j="//ipservicesit.cnsuning.com"}}}var a=j+"/ipQuery.do";$.ajax({type:"GET",url:a,cache:true,async:false,dataType:"jsonp",jsonpCallback:"cookieCallback",success:function(k){k.flag="2";k.count=0;if(typeof c=="function"){c(k)}},error:function(){if(typeof c=="function"){c("")}}})}};var cookieCallback=function(a){};var compareMDMIdAndLesId=function(c){var a=c.split("|");if(a.length>0){var b=a[0].split("_");if(b[0]==b[1]){return false}else{return true}}};var analyzeCookie=function(e){var b=e.split("|");var a=null;if(b.length>0){var c=b[0].split("_");a={};a.provinceMDMId=c[0];a.cityLESId=c[1];a.cityMDMId=c[2];a.cityCommerceId=c[3];a.districtLESId=c[4];a.districtCommerceId=c[5];a.flag=c[6];a.count=c[7]}return a};var pricecallback=function(a){};GetPrice.cityInfCallback=function(a){sn.cityId="9017";GetPrice.cityLESId="010";GetPrice.cityLESId="0100101";if(null!=a&&""!=a){GetPrice.cityLESId=a.cityLESId;GetPrice.districtLESId=a.cityLESId+a.districtLESId+"01";sn.cityId=a.cityCommerceId}GetPrice.queryprice(GetPrice.priceDOM,GetPrice.channel,GetPrice.callback)};$(function(){});