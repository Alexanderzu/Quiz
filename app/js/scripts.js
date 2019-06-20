	//= parts/jquery.v3.3.1.js
	//= parts/slickQuiz-config.js
	//= parts/slickQuiz.js

function clickAnswer(e)
{  
	$(e).addClass('classOne');
	var parElem = $(e).parent();
	parElem.addClass('checkAnswerList');	
}

$(document).ready(function () {
	$('#slickQuiz').slickQuiz();
}); //document


