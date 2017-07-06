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

	docHeight = $(window);
		
	$("#navBar").hover(function(){
		if($(window).scrollTop() > 0){
		$("#animateStu").animate({
			backgroundColor: "#dd5e5e"
		},{duration:500, queue: false});
		$("#navBar").children().children().animate({
			color: "#FFF"
		},{duration:500, queue: false});
		$("#menuText").animate({
			borderBottomColor:"#FFF"
		},{duration:500, queue: false});
		$(".icon-bar").animate({
			backgroundColor: "#FFF"
		},{duration:500, queue: false});
		}
	},function(){
		if($(window).scrollTop() > 0){
		$("#animateStu").animate({
			backgroundColor: "#FFF",
			opacity: 1.0
		},{duration:500, queue: false});
		$("#navBar").children().children().animate({
			color: "#000"
		},{duration:500, queue: false});
		$("#menuText").animate({
			borderBottomColor:"#000"
		},{duration:500, queue: false});
		$(".icon-bar").animate({
			backgroundColor: "#000"
		},{duration:500, queue: false});
	}
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
	},{ duration: 300, queue: false });
	$("body").addClass("noscroll");
	$("#toggleNav").css("z-index",107);
}

$("#navBack").click(function(){
	var top1 = docHeight*-2;
	$("#toggleNav").animate({
		top: top1,
		bottom:0,
		opacity:0
	},{duration:1000, queue: false});
	$("body").removeClass("noscroll");
	$("#toggleNav").css("display","hidden");
	$("#toggleNav").css("z-index",0);
});

var done = false;


$(window).scroll(function(){
	
	var scroll = $(window).scrollTop();

	if(scroll > 0){
		if(!done){
		$("#animateStu").animate({
			backgroundColor: "#FFF",
			opacity: 1.0
		},{duration:500, queue: false});
		$("#navBar").children().children().animate({
			color: "#000"
		},{duration:500, queue: false});
		$("#menuText").animate({
			borderBottomColor:"#000"
		},{duration:500, queue: false});
		$(".icon-bar").animate({
			backgroundColor: "#000"
		},{duration:500, queue: false});
		done = true;
		}
	}else{
		$("#animateStu").animate({
			opacity: 0.0
		},{duration:500, queue: false});
		$("#navBar").children().children().animate({
			color: "#FFF"
		},{duration:500, queue: false});
		$("#menuText").animate({
			borderBottomColor:"#FFF"
		},{duration:500, queue: false});
		$(".icon-bar").animate({
			backgroundColor: "#FFF"
		},{duration:500, queue: false});
		done = false;
	}
	
	
});
	
