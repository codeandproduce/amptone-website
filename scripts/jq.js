$(document).ready(function(){
	$('.carousel').carousel({
        interval: 3000
    });
    $('.carousel').carousel('cycle');
    
    $("#navBack").hover(function(){
		$(".arrow").css("margin-right","5px");
	},function(){
		$(".arrow").css("margin-right","15px");
	});
	
	$("#toggle").hover(function(){
		$("#menuText").css("margin-right", "5px");
		$("#menuText").css("opacity","0.7");
		$("#toggle").css("opacity","0.7");
	},function(){
		$("#menuText").css("margin-right", "15px");
		$("#menuText").css("opacity","1.0");
		$("#toggle").css("opacity","1.0");
	});
	$("#menuText").hover(function(){
		$("#menuText").css("margin-right", "5px");
		$("#menuText").css("opacity","0.7");
		$("#toggle").css("opacity","0.7");
	},function(){
		$("#menuText").css("margin-right", "15px");
		$("#menuText").css("opacity","1.0");
		$("#toggle").css("opacity","1.0");

	});



});

var docHeight;
$(window).resize(function(){
	docHeight = $(window).height();
});

$("#toggle").click(function(){
	bringNavUp();
});

$("#menuText").click(function(){
	bringNavUp();
})

function bringNavUp(){
	$("#toggleNav").css("display","block");
	$("#toggleNav").animate({
		top: 0,
		bottom:0,
		opacity:1
	},300);
	$("body").addClass("noscroll");
	$("#toggleNav").css("z-index",101);
}

$("#navBack").click(function(){
	$("#toggleNav").animate({
		top: docHeight*-2,
		bottom:0,
		opacity:0
	},1000);
	$("body").removeClass("noscroll");
	$("#toggleNav").css("display","hidden");
	$("#toggleNav").css("z-index",0);
});

var done = false;

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll > 0){
		if(!done){
		$("#animateIsFuckingStupid").animate({
			backgroundColor: "#FFF",
			opacity: 1.0
		},500);
		$("#navBar").children().children().animate({
			color: "#000"
		},500);
		$("#menuText").animate({
			borderBottomColor:"#000"
		},500);
		$(".icon-bar").animate({
			backgroundColor: "#000"
		},500);
		done = true;
		}
	}else{
		console.log(scroll);
		$("#animateIsFuckingStupid").animate({
			opacity: 0.0
		},500);
		$("#navBar").children().children().animate({
			color: "#FFF"
		},500);
		$("#menuText").animate({
			borderBottomColor:"#FFF"
		},500);
		$(".icon-bar").animate({
			backgroundColor: "#FFF"
		},500);
		done = false;
	}
});
	
