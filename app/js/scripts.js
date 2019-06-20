	//= parts/jquery.v3.3.1.js
	//= parts/slickQuiz-config.js
	//= parts/slickQuiz.js

$(document).ready(function () {
	$('#slickQuiz').slickQuiz();
}); //document
function clickAnswer(e)
{  
	$(e).addClass('classOne');
	var parElem = $(e).parent();
	parElem.addClass('checkAnswerList');
}



