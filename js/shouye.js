;(function($){
	//渲染数据
	init();
	function init(){
		randerHtml();
		setFontsize()
	}
	function randerHtml(data,that){
		$.ajax({
			url:"first.json",
			type:"post",
			dataType:"json",
			async:false,
			data:{
				data:data
			},
			success:function(e){
				if(!data){//如果不传值为渲染的主页面
					$.each(e.firstPage,function(key,val){
						var html="";	
							html='<div class="main_info">';
							html+='<dl>'+
									'<dt><img src="images/'+val.pic+'"></dt>'+
									'<dd>'+val.txt+'</dd>'+
									'<dd>'+val.eng+'</dd>'+
								 '</dl>';
							html+='</div>';
						$(".main_info_content").append(html);			
					})
				}
				else if(that==false){
					//console.log(e.fillter[data-1]);
					var html="<ul class='fillter_info'>";
					$.each(e.fillter[data-1],function(key,val){

						html+="<li><i><a href='#female_filter' data-tip='"+data+"'>"+val+"</a></i></li>"
					})
					html+="</ul>";
					$("#female_filter_cata_detail").html(html);	
					isc(female_filter_cata_detail,"female_filter_cata_detail");
				}
				else{//传值为渲染的点击导航后的页面
					$.each(e.data,function(key,val){
						if(key==data){
							//改变header中的文字
							var curTxt=that.find("dd").html();
							if(curTxt=="摇一摇"||curTxt=="品牌")return;
							$(".header_female").find("i").html(curTxt);
							var html="";
							$.each(val,function(k,v){
								html+='<a href="#xiangqing.html">'+
											'<dl>'+
												'<dt><img src="images/'+v.pic+'"></dt>'+
												'<dd>'+v.brand+'</dd>'+
												'<dd>'+v.price+'</dd>'+
											'</dl>'+
										'</a>';							
							})
							//console.log(html);
							$(".female_box").html(html);	
							isc(female_detail,"female_detail");//渲染完成后添加iscroll
						}	
					})
				}
			},
			error:function(){
				alert("Ajax Error!");
			}
			
		})
	}

	 /*var main; 
	 function loaded(){ 
	  setTimeout(function () { 
	 	main = new iScroll('main'); 
	 }, 100); 
	} 
	window.addEventListener('load', loaded, false); */



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
	//由于iscroll高度塌陷需要动态设置main_detail的高度
	/*var curHeight=$(".main_detail").height();
	console.log(curHeight);
	console.log($(".main_info_content").height());*/

	//$(".main_detail").height(5892);//此 值应为获取到的值但此处应该等于curHeight的值但高度获取的不准确所以暂且先设定为定值



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
		var randerIdx=$(this).data("idx");
		var that=$(this);

		randerHtml(randerIdx,that);
		$(curPage).css({
			"left":0,
			"-webkit-transition":"all .3s ease-in-out"
		}).siblings().css({
			"left":"100%",
			"-webkit-transition":"all .3s ease-in-out"
		})
	})
	
	//点击品牌品类切换
	$(".header_brand").on("tap","a",function(){
		var curPage=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".contaienr_brand_box_page").eq(curPage).show().siblings().hide();
		
	})
	var curPage=0;
	//点击品牌的导航显示切换
	$(".nav_swap").on("tap","a",function(e){
		curPage=$(this).index();
		$(this).parent().parent().find(".brand_page").eq(curPage).show().siblings().hide();
		$(".letter").eq(curPage).show().siblings(".letter").hide();
	})
	//点击筛选中的条件跳转到相应页面并渲染数据
	$("#filter_detail ul").on("tap","a",function(e){
		var curIdx=$(this).parent("li").index()+1;
		console.log(curIdx);
		randerHtml(curIdx,false);
	})

	//点击品牌中的导航字母跳转到对应页面
	//遍历所有brand_page_box_detail中的tip获取相同的值的offsetTop值 设置为当前样式
	swapLetter($("#letter1"),"band_page");
	swapLetter($("#letter2"),"band_page2");
	swapLetter($("#letter3"),"band_page3");
	function swapLetter(obj,scrObj){
		obj.on('tap',"li",function(e){
			var arr=[];
			$(".brand_page_box_detail").eq(curPage).find(".tip").each(function(){
				arr.push($(this).offset().top);
			})
			var curIdx=$(this).index();
			var band_page=new iScroll(scrObj);
			band_page.scrollTo(0,arr[curIdx]-arr[0],300,"relative");
			//console.log(arr);
			arr=[];
		})
	}
	$("#female_detail_back").on("tap",function(){
		
		//找到female_detail里的div删除
		$("#female_detail").find("div").remove();
		$(".female_box").attr("style","");

	})
	$("#female_filter_cata_detail").on("tap","li",function(){
		var curTip=$(this).find("a").html(),
			curIdx=$(this).find("a").data("tip");
		$("#filter_detail").find("li").eq(curIdx-1).find("a").html(curTip);
	})




	//调用flow滑动插件
	$.flow({
		wrapId:"subnav",//整体盒子id
		wrapColor:"#fff",//wrap北京颜色
		flowId:"flow",//滑块id
		flowColor:"#E8203B",//滑块颜色
		flowHeight:"3px",//滑块高度
		aColor:"#000",//a字体颜色
		aActiveColor:"#E8203B"//点击状态下a的字体颜色
	})
	$.flow({
		wrapId:"subnav2",//整体盒子id
		wrapColor:"#fff",//wrap北京颜色
		flowId:"flow2",//滑块id
		flowColor:"#E8203B",//滑块颜色
		flowHeight:"3px",//滑块高度
		aColor:"#000",//a字体颜色
		aActiveColor:"#E8203B"//点击状态下a的字体颜色
	})
	//局部滚动
	$(window).on("load",function(){
		isc(main,"main");
		isc(band_page,"band_page");
		isc(band_page2,"band_page2");
		isc(band_page3,"band_page3");
		isc(fuzhuang,"fuzhuang");
		isc(baodai,"baodai");
		isc(xielv,"xielv");
		isc(peishi,"peishi");
		isc(filter_detail,"filter_detail");		
	})


	
	function isc(name,obj){
		name=new iScroll(obj,function(e){
			var tagName=e.target.nodeName.toLowerCase();
			if(tagName!="input"&&tagName!="textarea"&&tagName!="select"){
				e.preventDefault();
			}
			name.refresh();
		})

	}
})(Zepto)