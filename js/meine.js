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
	//json数据渲染
	$.ajax({
		url:'js/meine.json',
		type:'post',
		dataType:'json',
		success:function(data){
			page(data);
		}
	})

	function page(data){
		var html="";
		$.each(data,function(i,val){
			$.each(val,function(i,val){
				html+="<div class='item'><a href='#'><dl><dt><img src='"+val.img+"'></dt><dd>"+val.title+"</dd></dl></a><p><b>"+val.leibie+"</b><b class='days'>"+val.time+"</b><span class='num1'><em></em>"+val.num1+"</span><span class='num2'><em></em>"+val.num2+"</span></div>"
			})
		})
		$(".main").html(html);
	}
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