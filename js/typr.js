// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// typrJs jQuery Plugin
// Author: Samuel SS - samuel@samuelss.com.br
// Release Date: 09/02/2014
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$(document).ready(function(){
	// function for "typing" content into #elPrompter
	// any argument can be passed as function argument ( eltexto can be a variable, an element's attr value, ... )	
	var writePrompt = function(eltexto){
		var conta = -1;
		setInterval(function(){
			conta++;
			if(conta < eltexto.length) {
				$("#elPrompter").append(eltexto[conta]);
    		} else {
				clearInterval();
			};
		}, 30);
	};
	
	// function for clearing prompt content
	var clearPrompt = function(){
		$("#elPrompter").empty();
	};
	
	// function for complete - clear and write - action.
	var theWriter = function(textToPass){
		clearPrompt();
		writePrompt(textToPass);
	};
	
	// function for writing on click - bound to .typr
	$(".typr").click(function(){
		theWriter($(this).attr("data-prompt"));
	});
	
	// function for writing on hover - bound to .typr
	$(".typr").hover(function(){
		theWriter($(this).attr("data-prompt"));
		}
	, 
		function(){
			clearPrompt();
		}
	);
	
	
	});