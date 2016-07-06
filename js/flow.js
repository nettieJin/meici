/*---------滑块插件---------*/
//结构
/*<nav id="subnav" class="follow_nav com_nav follow_nav1">
	<a href="#discover" style="color:#fff">发现</a>
	<a href="#com_follow">关注</a>
	<a href="#me">我的</a>
	<span class="flow flow1" id="flow"></span>
</nav>*/
;(function($){
	function flowTool(options){
		var defaults={
			wrapId:"subnav",//整体盒子id
			wrapColor:"#ccc",//wrap北京颜色
			flowId:"flow",//滑块id
			flowColor:"orange",//滑块颜色
			flowHeight:"5px",//滑块高度
			aColor:"red",//a字体颜色
			wrapHeight:"54px",//wrap高度
			aActiveColor:"#fff"//点击状态下a的字体颜色
		} 
		var settings=$.extend({},defaults,options);//替换拓展参数
		//设置style样式;
		//宽度;父盒子的款第
		var parentWidth=$("#"+settings.wrapId).parent().width();
		$("#"+settings.wrapId).width(parentWidth);
		$("#"+settings.wrapId).css({
			"display":"-webkit-box",
			"position":"relative"
		});
		$("#"+settings.wrapId).find("a").css({
			"color":settings.aColor,
			"-webkit-box-flex":"1",
			"text-align":"center",
			"display":"block",
			"overflow":"hidden"
		})
		$("#"+settings.wrapId).find("a").eq(0).css("color",settings.aActiveColor);
		//获取a的长度
		var a_len=$("#"+settings.wrapId).find("a").eq(0).width();
		//获取a的相对偏移值
		var a_Left=$("#"+settings.wrapId).find("a").eq(0).offset().left;
		//获取a的夫级元素距离浏览器的距离
		var a_parent_left=$("#"+settings.wrapId).offset().left;
		$("#"+settings.flowId).css({
			"width":a_len+"px",
			"height":settings.flowHeight,
			"background":settings.flowColor,
			"position":"absolute",
			"left":a_Left-a_parent_left+"px",
			"top":settings.wrapHeight
		})
		//点击a的时候flow移动
		$("#"+settings.wrapId).on("click","a",function(e){
			e.preventDefault();
			//获取index
			var idx=$(this).index();
			//获取当前a的left值
			var curLeft=$(this).offset().left;
			$(this).css("color",settings.aActiveColor).siblings().css("color",settings.aColor);
			$("#"+settings.flowId).css({
				"width":a_len+"px",
				"height":settings.flowHeight,
				"background":settings.flowColor,
				"position":"absolute",
				"left":curLeft+"px",
				"top":settings.wrapHeight,
				"-webkit-transition":"left .3s ease-in-out"
			})
		})
	}
	$.flow=function(options){
		return new flowTool(options);
	}
	/*function flowTool(options){
		var defaults={

		}
		$.extend({},defaults,options)
	}
	$.flow=function(options){
		return new flowTool(options);
	}*/
})(Zepto)