;(function($){

	$(window).on("load",function(){
		$(".container").css({
			"left":"0",
			"-webkit-transition":"all .3s"
		});
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

