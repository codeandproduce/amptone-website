$(".one-event").hover(function(){
	if(this.id == "1-event"){
		$("#1-event > .tint").animate({
			opacity:0.5
		}, 50);
	}
	if(this.id == "2-event"){
		$("#2-event > .tint").animate({
			opacity:0.5
		}, 50);
	}
	if(this.id == "3-event"){
		$("#3-event > .tint").animate({
			opacity:0.5
		}, 50);
	}
	if(this.id == "4-event"){
		$("#4-event > .tint").animate({
			opacity:0.5
		}, 50);
	}
}, function(){
	$(".one-event > .tint").animate({
		opacity: 0
	}, 50);
});