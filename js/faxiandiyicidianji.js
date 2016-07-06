;(function($){
	$(window).on("load",function(){
		$(".container").css({
			"left":"0",
			"-webkit-transition":"all .3s"
		});
	})
	

		$.ajax({
			url:"find.json",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				var imgs="";
				$.each(data.find,function(i,val){
					imgs+="<a href='#xiangqing.html' data-id='"+val.id+"'><dl><dt><img src="+val.pics+"></dt><dd><p>"+val.tit1+"</p><p>"+val.tit2+"</p><p><span><img src="+val.bg+"></span>"+val.num+"</p></dd></dl></a>";
				})
				$("#pos").html(imgs);
		           
			},
			error:function(){
					alert("数据获取失败");
				}
			})			
				
            var imgNum=$("#pos>a").length;
            	console.log(imgNum),
            	idx=0;
           
           $("#pos").on("swipeLeft","a",function(){

      			idx++;
      			console.log(imgNum)
      			if(idx>imgNum-1) {
      				idx=imgNum-1;
      				return false;
      			}
      			console.log(idx);
				$(".find-item a").eq(idx-1).fadeOut().next().fadeIn();
				}).on("swipeRight","a",function(){
		
		   		idx--;
		   		
		   		if(idx<0) {
		   			idx=0;
		   			return false;
		   		}
		   		console.log(idx);
				$(".find-item a").eq(idx+1).fadeOut().prev().fadeIn();
			});

				$("#cover").on("swipe",function(){
					$(this).fadeOut();
				})		 
				
				$("#share").hide();
				$("#fenxiang").on("click",function(){
					$("#share").fadeIn();
				});
				$("#share").on("tap",function(){
					$(this).fadeOut();
				})

				$("#tuijian").on("tap",function(){
					location.href="2faxian-tuijian.html";
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