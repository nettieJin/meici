;(function($){
	/*$("window").on("load",function(){
		$(".container").css({
			"left":"0",
			"-webkit-transition":"all .3s"
		});
	})*/


	 
	$.ajax({
		url:"tuijian.json",
		dataType:"json",
		type:"get",
		async:false,
		success:function(data){
			var html1="",html2="";
			$.each(data.tuijian1,function(i,val){
				html1+="<a href='#'><dl><dt><img src='"+val.imgs+"'></dt><dd><p>"+val.title1+"</p><p>"+val.title2+"</p></dd></dl></a>";
			})
			$.each(data.tuijian2,function(i,val){
				html2+="<a href='#'><dl><dt><img src='"+val.imgs+"'></dt><dd><p>"+val.title1+"</p><p>"+val.title2+"</p></dd></dl></a>";
			})
			$(".left").append(html1);
			$(".right").html(html2);
		},
		error:function(){
			alert("获取数据失败");
		}
	})
	$("#faxian").on("click",function(){
		location.href="faxiandiyicidianji.html";

	})
	
	$(window).on("load",function(){
		console.log($(".contain").height());
		newScroll=new iScroll("main",{
			onBeforeScrollStart:function(e){
			//判断如果事件目标时input,select,textarea是否为这些元素
			var tagName=e.target.nodeName.toLowerCase();
			if(tagName!="input" && tagName!="select" && tagName!="textarea" && tagName!="a"){
					//取消默认行为
					e.preventDefault();
				}
			}
		});
	 newScroll.refresh();
	})
})(Zepto)