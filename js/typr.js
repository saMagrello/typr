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
	var theWriter = function(){
		clearPrompt();
		writePrompt(contenidoPrompt);
	};
	
	// function for writing on click - bound to .typr
	$(".typr").click(function(){
		contenidoPrompt = $(this).attr("data-prompt");
		theWriter();
	});
	
	// function for writing on hover - bound to .typr
	$(".typr").hover(function(){
		contenidoPrompt = $(this).attr("data-prompt");
		theWriter();
		}
	, 
		function(){
			clearPrompt();
		}
	);
	
	
	});