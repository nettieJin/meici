;(function($){
	//动态设置html的font-size
	var ini_width=640/2;
	function set_font(){
		var set_scale=$(window).width()/ini_width*100;//ip5下的尺寸正好为2:1 所以设置font-size为100;
		$("html").css("font-size",set_scale);
	}
	$(window).on("resize",function(e){
		set_font();
	})
	var n=0, len=$(".pics>li").length;
	$(".imgs").on("swipeLeft",function(){
		n++;
		if(n>=len) n=len-1;
		changeImg();
	})
	$(".imgs").on("swipeRight",function(){
		n--;
		if(n<=0) n=0;
		changeImg();
	})
	function changeImg(){
		//$("#bg>li").eq(n).addClass("on").siblings().removeClass("on");
		$(".pics").animate({"-webkit-transform":"translate3d("+(-n*100)+"%,0,0)"});
	}
	$(".share").on("tap",function(e){
		location.href="shouye.html";
	})
})(Zepto)