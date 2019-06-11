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
			$("a").on("mousemove",function(){var yx = $(this).css("color");$(this).css("color","rgb(217, 23, 72)");}).on("mouseout",function(){$(this).css("color",yx);});
			$.each(data.navDis.tex, function(i,t) {$(".navDis-con").append($("<div class='navDisR'><img class='navDisIm  nav"+i+"' src="+data.navDis.img[i]+"><div class='navDisTx'>"+t+"</div></div>"));});
			$(".navMa-two-ul li:eq(2)").on("mousemove",function(){$(".navDis").css("display","block");$(".navDis").on("mousemove",function(){$(this).css("display","block");}).on("mouseout",function(){$(this).css("display","none");});}).on("mouseout",function(){$(".navDis").css("display","none");});
			$(".aimain .ailist .title h3").html(data.aimain.ailist.title[0]);
			$.each(data.aimain.ailist.container.img, function(i,t) {$(".index-p1-img a img:eq("+i+")").attr("src",t);});
			$.each(data.aimain.ailist.container.tex, function(i,t) {$(".index-p1-txt h4:eq("+i+")").html(t);});
			$(".index-p1-txt:eq(0)").css("background","#ff6633");
			$(".index-p1-txt:eq(1)").css("background","#FFA000");
			$(".index-p1-txt:eq(2)").css("background","#67D400");
			$(".index-p1-txt").off("mousemove");
			$(".aniText-box-1").html(data.aimain.pary.solTit2H1[0]);
			$(".sol-p4-img img").attr("src",data.aimain.pary.containerImg[0]);
			$(".aniText-box-4").html(data.aimain.indexCasees.indexTit.h1[0]);
			$(".aniText-box-2").html(data.aimain.indexCasees.indexTit.p[0]);
			$.each(data.aimain.indexCasees.indexCasees.caseimg, function(i,t) {$(".caseimg img:eq("+i+")").attr("src",t);});
			$.each(data.aimain.indexCasees.indexCasees.casetxt, function(i,t) {$(".casetag + span:eq("+i+")").html(t);});
			$(".caseimg:eq('0')").css("border-bottom","4px solid #ff5533");
			$(".caseimg:eq('1')").css("border-bottom","4px solid #ff9f01");
			$(".caseimg:eq('2')").css("border-bottom","4px solid #48d6f3");
			$(".casetag:eq('0')").css("color","#ff5533");
			$(".casetag:eq('1')").css("color","#ff9f01");
			$(".casetag:eq('2')").css("color","#48d6f3");
			$(".more-s2 a").off("mousemove");
			$(".lg img:eq(0)").attr("src",data.footer.loadmain.lgImg[0]);
			$(".lg img:eq(1)").attr("src",data.footer.loadmain.lgImg[1]);
			$(".blist p a:eq('0')").html(data.footer.loadmain.blistTxt[0]);
			$(".blist p a:eq('1')").html(data.footer.loadmain.blistTxt[1]);
			$(".blist p a").off("mousemove");
			$(".you h3").html(data.footer.loadmain.yoyTxt[0]);
			$(".intro").html(data.footer.loadmain.intro[0]);
			$(".navMa-two-ul li:eq(0) a").attr("href","new_file01.html");
			$(".navMa-two-ul li:eq(1) a").attr("href","new_file02.html");
			$(".dmJs").on("mousedown",function(){alert("点 不 了 的点别的看看");})
			$(".navMa-two-ul li:eq(2) a").addClass("dmJs");
			$(".navDisIm").addClass("dmJs");
			$(".navMa-two-ul li:eq(3) a").addClass("dmJs");
			$(".navMa-two-ul li:eq(4) a").addClass("dmJs");
			$(".dmJs").on("click",function(){alert("点 不 了 的点别的看看");})
		}
	});
})
