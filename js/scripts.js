// JavaScript Document
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// PROMPT BLOCK EFFECT
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$(document).ready(function() {
	// "prompt-like" animation bound to span.promtEr
	var $prompt = $('.promptEr');
    setInterval(function(){
        $prompt.animate({
            opacity:1
        }, 450, function() {
            $prompt.animate({
            opacity:0
			}, 450);
        });
    }, 900);
});
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// PROMPT BLOCK EFFECT ENDS
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
