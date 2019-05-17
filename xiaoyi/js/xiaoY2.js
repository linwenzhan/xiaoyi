$(function(){
	var yx = 0;
	$.ajax({
		type:"get",
		url:"css/xiaoYtwo.json",
		async:true,
		success:function(data){
			$(".navMa-one-img").attr("src",data.nav.img[0]);
			$.each(data.nav.tex, function(i,t) {$("<li><a class='navA' href='#'>"+t+"</a></li>").appendTo($(".navMa-two-ul"));});
			$(".navA:eq(4)").parent().attr("id","gM");
			$("<div id='navDm'><div><img src=''\><a href='#'></a></div><div><img src='' \><a href='#'></a></div></div>").appendTo("#gM");
			$.each(data.nav.navDm.txt, function(i,t) {$("#navDm div a:eq("+i+")").html(t)});
			$.each(data.nav.navDm.img, function(i,t) {$("#navDm div img:eq("+i+")").attr("src",t);});
			$("#gM").on("mousemove",function(){$("#navDm").css("display","block");$("#navDm").on("mousemove",function(){$(this).css("display","block");}).on("mouseout",function(){$(this).css("display","none");});}).on("mouseout",function(){$("#navDm").css("display","none");});
			$(".con-iM").attr("src",data.con.coniM[0]);
			$(".con-tex div h3").html(data.con.contex[0]);
			$(".con-tex div p").html(data.con.contex[1]);
			$(".con-iM2").attr("src",data.con.coniM2[0])
		}
	});	
})
