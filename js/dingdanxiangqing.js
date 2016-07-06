;(function($){
	function init(){
		setFontsize()
	}
	function setFontsize(){
		var ini_width=640/2;
		function set_font(){
			var set_scale=$(window).width()/ini_width*100;//ip5下的尺寸正好为2:1 所以设置font-size为100;
			$("html").css("font-size",set_scale);
		}
		$(window).on("resize",function(e){
			set_font();
		})
	}

	//设置全额支付的动画
	$(".allPay").on("click",function(e){
		var curId=$(this).attr("for");
		console.log(curId);
		if($("#"+curId+"").prop("checked")==true){
			$("#icon").css({
				"right":"25px",
				"-webkit-transition":"all .1s ease-in-out"
			})
			$(".allPay").css({
				"background":"#fff",
				"-webkit-transition":"all .1s ease-in-out"
			})
			$(".difPay").css("display","block");
			$(this).parents("li").find("*").css("color","#ccc");
		}else{
			$("#icon").css({
				"right":"-1px",
				"-webkit-transition":"all .1s ease-in-out"
			})
			$(".allPay").css({
				"background":"#4BD661",
				"-webkit-transition":"all .1s ease-in-out"
			})			
			$(".difPay").css("display","none");
			$(this).parents("li").find("*").css("color","#000");
		}
	})
	//设置iscroll
	//$(window).on("load",function(){
		isc(main,"main");
	//})
	function isc(name,obj){
		name=new iScroll(obj,function(e){
			console.log(e);
			var tagname=e.target.nodeName.toLowerCase();
			if(tagName!="input"&&tagName!=textarea&&tagName!="select"){
				e.preventDefault();
			}
			name.refresh();
		})
	}
})(Zepto)