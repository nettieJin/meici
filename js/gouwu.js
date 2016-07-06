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
	$(".header").on("tap","li",function(){
		var idx=$(this).index();
		changePage(idx);
	})
	function changePage(idx){
		$(".header li").eq(idx).addClass("on").siblings().removeClass("on");
		$(".item").eq(idx).animate({"-webkit-transform":"translate3d(0,0,0)"}).siblings().css({"-webkit-transform":"translate3d(100%,0,0)"});
	}
		
	$('.list_item').on("swipeLeft",function(){
		$(this).animate({"-webkit-transform":"translate3d(-36%,0,0)"});
	})
	$('.list_item').on("swipeRight",function(){
		$(this).animate({"-webkit-transform":"translate3d(0,0,0)"});
	})
	$('.list_item').on("swipeLeft",function(){
		if($("#write").text()=="删除"){
			$(this).animate({"-webkit-transform":"translate3d(0,0,0)"});
		}
	})
	

	$('#write').on("tap",function(){
		if($(this).text()=="编辑"){
			$(this).text("删除");
			$(".radio").css({"display":"block"});
			$(".list_item").animate({"-webkit-transform":"translate3d(0,0,0)"});
		}else if($(this).text()=="删除"){
			$(this).text("编辑");
			$(".radio").css({"display":"none"});
				$(".radio p").find("input:checked").parents(".list").remove();
		}
	})

	$(".radio").on("click","input",function(){
		if($(this).prop("checked")==true){
			$(this).parents("p").addClass("on");
		}else{
			$(this).parents("p").removeClass("on");
		}
	})

	$(".remove").on("click",function(){
		$(this).parents(".list").remove();
	})
	$(".callect").on("click",function(){
		$(this).parents(".list_item").animate({"-webkit-transform":"translate3d(0,0,0)"});
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
})(Zepto)