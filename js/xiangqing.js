;(function($){
	var n=0, len=$('.pics>li').length,c_main;
	var myScroll = new IScroll('#main', {
   		disableMouse: true,
    	disablePointer: true,
    	scrollbars:false
	});

	(function (doc, win) {
    var docEl = doc.documentElement, //获取html标签
		//orientationchange方向改变事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
			//当前设备视口宽度
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


	$(".pics").on("swipeLeft",function(){
		n++;
		if(n>=len) n=len-1;
		changeimg($(".pics"),n,$(".style1>li"));
	})
	.on("swipeRight",function(){
		n--;
		if(n<=0) n=0;
		changeimg($(".pics"),n,$(".style1>li"));
	})
	function changeimg(dom,n,bg){
		bg.eq(n).addClass("on").siblings().removeClass("on");
		dom.animate({"-webkit-transform":"translate3d("+(-n*100)+"%,0,0)"})
	}

	//点击分享出现分享菜单
	$("#enjoy").on("click",function(){
		$(".enjoy").animate({"bottom":"0"});
		$(".all_bg").css({"display":"block"});
		$(".nav").css({"display":"none"});
	})

	//点击购物车出现购物弹框
	$(".car").on("click",function(){
		$(".shop_car").css({"display":"block"});
		$(".all_bg").show();
	})
	//点击再逛逛，返回商品信息页
	$(".align_btn").on("click",function(){
		$(".shop_car").css({"display":"none"});
		$(".all_bg").hide();
	})
	//点击联系按钮出现联系弹出框
	$("#artical").on("click",function(){
		$(".artical").css({"display":"block"});
		$(".all_bg").show();
	})
	//点击黑色背景分享菜单隐藏
	$(".all_bg").on("click",function(){
		$(".enjoy").animate({"bottom":"-0.8rem"});
		$(".all_bg").hide();
		$(".nav").css({"display":"block"});
		$(".artical").hide();
		$(".shop_car").hide();
	})
	//切换大页面函数
	$("body").on("click","a",function(e){
		e.preventDefault();

		var curPage=$(this).attr("href");
		if(curPage.length==1){
			return false;
		}else if(curPage.indexOf("html")!=-1){
			location.href=curPage.replace("#","");
			return false;
		}
	})
	$(".size_list").on("tap","span",function(){
		var curIdx=$(this).index();
		$(".size_list").find("span").eq(curIdx).addClass("on").siblings().removeClass("on");
		var curTxt=$(".size_list").find(".on").html();
		$("#size").html(curTxt);
		
	})
	$(".res_btn").on("tap",function(){
		location.href="dingdanxiangqing.html";
	})
})(Zepto)