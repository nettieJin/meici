;(function($){
	var jsonData=null,tui_huan_huo,jsonData2=null,c_main;
	//动态设置html的font-size
	var ini_width=640/2;
	function set_font(){
		var set_scale=$(window).width()/ini_width*100;//ip5下的尺寸正好为2:1 所以设置font-size为100;
		$("html").css("font-size",set_scale);
	}
	$(window).on("resize",function(e){
		set_font();
	})
 
 	
	init();
	//初始化函数
	function init(){
		$(window).on("load",function(){
			//局部滚动
			var MEICI_jieshao=new iScroll("MEICI_jieshao",{
				onBeforeScrollStart:function(e){
					//判断如果事件目标是input/select/textarea是否为这些元素
					var tagName=e.target.nodeName.toLowerCase();
					if(tagName!="input" && tagName!="select" && tagName!="textarea" && tagName!="a"){
						//取消默认行为
						e.preventDefault();	
					}		
				}
			});	
			//局部滚动
			tui_huan_huo=new iScroll("tui_huan_huo",{
				onBeforeScrollStart:function(e){
					//判断如果事件目标是input/select/textarea是否为这些元素
					var tagName=e.target.nodeName.toLowerCase();
					if(tagName!="input" && tagName!="select" && tagName!="textarea" && tagName!="a"){
						//取消默认行为
						e.preventDefault();	
					}		
				}
			});	
			
	 		//局部滚动
	 		c_main=new iScroll("c_main",{
				onBeforeScrollStart:function(e){
					//判断如果事件目标是input/select/textarea是否为这些元素
					var tagName=e.target.nodeName.toLowerCase();
					if(tagName!="input" && tagName!="select" && tagName!="textarea" && tagName!="a"){
						//取消默认行为
						e.preventDefault();	
					}		
				}
			});		
			//局部滚动
			var guan_yu_mei_xi=new iScroll("guan_yu_mei_xi",{
				onBeforeScrollStart:function(e){
				//判断如果事件目标是input/select/textarea是否为这些元素
				var tagName=e.target.nodeName.toLowerCase();
				if(tagName!="input" && tagName!="select" && tagName!="textarea" && tagName!="a"){
					//取消默认行为
					e.preventDefault();	
				}		
			}
		});		
	})			
		//请求退换货页的数据
		JSON();
		//请求退换货页的数据
		JSON2();
		//绑定事件函数
		addEvent();
}

	//请求退换货页的数据
	function JSON(){
		$.ajax({
			url:"tui_huan_huo.json",
			type:"get",
			dataType:"json",
			success:function(e){
				jsonData=e;
				//数据渲染
				showData();
			},
			error:function(){
				alert("数据请求失败！");
			}
		})
	}

	//请求退换货页的数据
	function JSON2(){
		$.ajax({
			url:"chi_ma.json",
			type:"get",
			dataType:"json",
			async:false,
			success:function(e){
				jsonData2=e;
				//数据渲染
				showData2();
			},
			error:function(){
				alert("数据请求失败！");
			}
		})
	}

	//退换货页数据渲染函数
	function showData(){
		var str="";
		$.each(jsonData,function(i,val){
			str+='<div class="t_con">'
					+'<dl>'
						+'<dt>'
							+'<img src="images/'+val.img+'">'
						+'</dt>'
						+'<dd>'+val.title+'</dd>'
					+'</dl>';
			$.each(val.content,function(i,val){
				str+='<p>'+val+'</p>';
					
			})
			str+='</div>';					
		})
		$("#t_main").html(str);
		
	}

	//商品尺码页数据渲染函数
	function showData2(){
		var str2="";
		$.each(jsonData2,function(i,val){
			str2+='<div class="c_con">';
			$.each(val.img,function(i,val){
				str2+='<img src="images/'+val+'"/>';
			})
			str2+='</div>';		
		})
		$(".c_main>div").html(str2);


	}

	//绑定事件函数
	function addEvent(){	
		//为所有的a添加单击事件
		$(".box").on("click","a",function(e){
			//取消默认行为
			e.preventDefault();
			//获取a路径
			var pageHref=$(this).attr("href");
			$(pageHref).css({"-webkit-transform":"translate3d(0,0,0)","-webkit-transition":"transform .5s"}).siblings().css({"-webkit-transform":"translate3d(100%,0,0)","-webkit-transition":"transform .3s"});
		})

		//为登录页的确定按钮添加单击事件
		$(".w_surebtn").on("click",function(){
			$(".h_header>dl>dd").text("欢迎您，美西会员");
		})

		$(".zhe_zhao").hide();//先令遮罩隐藏
		//为分享按钮添加单击事件
		$("#fen_xiang_btn").on("click",function(){
			$(".zhe_zhao").show();//单击分享，令遮罩显示
		})
		//为遮罩添加单击事件
		$(".zhe_zhao").on("click",function(){
			$(".zhe_zhao").hide();
		})

		//为尺码页中的导航添加单击事件
		$(".c_menu>a").on("click",function(){
			var inx=$(this).index();
			$(this).addClass("c_on").siblings().removeClass("c_on");
			
			$(".c_con").eq(inx).css({"-webkit-transform":"translate3d(0,0,0)","-webkit-transition":"transform .5s"}).siblings().css({"-webkit-transform":"translate3d(100%,0,0)","-webkit-transition":"transform .3s"});
							
	})
		
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