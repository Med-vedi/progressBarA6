
function init () {



	$(".btn").click(operationButtonClick);

	const progressBar = $('#progressbar').width();

	let count = 0;	

	// innerHTML of the buttons
	function operationButtonClick (eventObject) {

		let clickedElement = eventObject.currentTarget;
		let inputValue = Number(clickedElement.innerHTML);
		makeOperation(inputValue);

	};

	// progressbar actions
	function makeOperation(inputValue) {
		 $('.progress-bar').width(count + '%');
		 $('#progressbar').html(count);

		if (count >= 100) {
			count = 0;
		} 
		else {
			count = inputValue + count;	
			};

		
	};

};

$(document).ready(init);


