$(function(){
	var yx = 0;
	$.ajax({
		type:"get",
		url:"css/xiaoY3.json",
		async:true,
		success:function(data){
			$(".navMa-one-img").attr("src",data.nav.img[0]);
			$.each(data.nav.tex, function(i,t) {$("<li><a class='navA' href='#'>"+t+"</a></li>").appendTo($(".navMa-two-ul"));});
			$(".navA:eq(5)").parent().attr("id","gM");
			$("<div id='navDm'><div><img src=''\><a href='#'></a></div><div><img src='' \><a href='#'></a></div></div>").appendTo("#gM");
			$.each(data.nav.navDm.txt, function(i,t) {$("#navDm div a:eq("+i+")").html(t)});
			$.each(data.nav.navDm.img, function(i,t) {$("#navDm div img:eq("+i+")").attr("src",t);});
			$("#gM").on("mousemove",function(){$("#navDm").css("display","block");$("#navDm").on("mousemove",function(){$(this).css("display","block");}).on("mouseout",function(){$(this).css("display","none");});}).on("mouseout",function(){$("#navDm").css("display","none");});
			$(".con-iM").attr("src",data.con.coniM[0]);
			$(".con-tex div h3").html(data.con.contex[0]);
			$(".con-tex div p").html(data.con.contex[1]);
			$("a").on("mousemove",function(){var yx = $(this).css("color");$(this).css("color","rgb(217, 23, 72)");}).on("mouseout",function(){$(this).css("color",yx);});
			$.each(data.navDis.tex, function(i,t) {$(".navDis-con").append($("<div class='navDisR'><img class='navDisIm  nav"+i+"' src="+data.navDis.img[i]+"><div class='navDisTx'>"+t+"</div></div>"));});
			$(".navMa-two-ul li:eq(3)").on("mousemove",function(){$(".navDis").css("display","block");$(".navDis").on("mousemove",function(){$(this).css("display","block");}).on("mouseout",function(){$(this).css("display","none");});}).on("mouseout",function(){$(".navDis").css("display","none");});
			$.each(data.aimain.ztBoxShadow.img, function(i,t) {$(".aiImg:eq("+i+")").attr("src",t);});
			$.each(data.aimain.ztBoxShadow.texA, function(i,t) {$(".index-p1-txt:eq("+i+") h4").html(t);});
			$(".index-p1-txt").off("mousemove");
			$(".index-p1-txt:eq(0)").css("background","#67D400");
			$(".index-p1-txt:eq(1)").css("background","#FFA000");
			$(".index-p1-txt:eq(2)").css("background","#ff6633");
			$.each(data.aimain.ztBoxShadow.texB, function(i,t) {$(".index-p1-txt:eq("+i+") p:eq(0)").html(t);});
			$.each(data.aimain.ztBoxShadow.texC, function(i,t) {$(".pcont:eq("+i+")").html(t);});
			$(".index-tit h1").html(data.aimain.containerA.tex[0]);
			$(".index-tit p").html(data.aimain.containerA.tex[1]);
		}
	})
})
