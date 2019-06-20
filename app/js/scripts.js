	//= parts/jquery.v3.3.1.js
	//= parts/slickQuiz-config.js
	//= parts/slickQuiz.js


	function clickAnswer(e)
	{  
		
	    // 	parElem.addClass('open');
		$(e).addClass('classOne');
		

		var parElem = $(e).parent();

		console.log(parElem)

		parElem.addClass('checkAnswerList');

		// $(".checkAnswer").click();
		
		
	}


	// (function() {
	// 	var itemAnswer = $('.answers li');
	// 	for (var i = 0; i < itemAnswer.length; i++) {
	// 		// console.log(itemAnswer[i]);
			
	// 		itemAnswer[i].onclick = function(e) {
	// 			var parElem = this.parentNode;
	// 			console.log(parElem)
	// 			parElem.classList.addClass("open");
	// 		};
	// 	};
	// });
	
$(document).ready(function () {

	$('#slickQuiz').slickQuiz();

	// var itemAnswer = $('.answers li');
	// for (var i = 0; i < itemAnswer.length; i++) {
	//     // console.log(accordeonItemTrigger[i]);
	// 	itemAnswer[i].onclick = function(e) {
	// 		var parElem = this.parentNode;
	//     	parElem.classList.addClass("open");
	// 	};
	// };
	



}); //document


