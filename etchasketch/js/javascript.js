$(document).ready(function(){
	defaultsetting();
	singlecolor();
	changecolor();
});

function defaultsetting(){
	var size = 10;
	var side = 960/size;
	for(var i = 0; i < size*size; i++){
		$("#container").append("<div class='square'></div>");
	};
	$(".square").css("width",side);
	$(".square").css("height",side);
	changecolor();

};

function singlecolor(){
	$("#newgrid").click(function(){	
	makediv();
	changecolor();
	});

};

function makediv(){
		$("#container").empty();
		var size = prompt("enter size of grid");
		var side = 960/size;
		for(var i = 0; i < size*size; i++){
			$("#container").append("<div class='square'></div>");
		};
		$(".square").css("width",side);
		$(".square").css("height",side);
		$(".square").css("background-color","white");
};

function changecolor(){
	$(".square").mouseover(function(){
		$(this).css("background","blue");
	});

};