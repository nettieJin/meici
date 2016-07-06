;(function($){
	$(window).on("load",function(){
		$(".container").css({
			"left":"0",
			"-webkit-transition":"all .3s"
		});
	})
	$(".remove").on("click",function(){
		$(this).parents(".list").remove();
	})
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
	$('#bianji').on("tap",function(){
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

		$(".remove").on("click",function(){
			$(this).parents(".list").remove();
		})
$(".radio").on("click","input",function(){
		if($(this).prop("checked")==true){
			$(this).parents("p").addClass("on").siblings().removeClass("on");
		}
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