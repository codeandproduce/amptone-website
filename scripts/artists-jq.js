$(document).ready(function(){
	
	$(".artist-block").hover(function(){
		if(this.id == "1-artist"){
			$("#1-artist > .tint").animate({
			opacity: 0.4
		}, 50);
		}
		if(this.id == "2-artist"){
			$("#2-artist > .tint").animate({
			opacity: 0.4
		}, 50);
		}
		if(this.id == "3-artist"){
			$("#3-artist > .tint").animate({
			opacity: 0.4
		}, 50);
		}
		if(this.id == "4-artist"){
			$("#4-artist > .tint").animate({
			opacity: 0.4
		}, 50);
		}
	},function(){
		$(".artist-block > .tint").animate({
			opacity: 0
		}, 50);
	});
});