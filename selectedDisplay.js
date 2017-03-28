
var CarLot = (function (oldCarLot) {


	// function changes border thickness and background color 
	// for the selected Car element 
	oldCarLot.changeSelected = function(thisCard) {

		thisCard.style.borderWidth="thick";
		thisCard.style.backgroundColor="#D8E3E8";
		thisCard.style.color="A38788";
	};


	// function resets border thickness and background color 
	// for this Car element back to initial values
	oldCarLot.resetCardToInit = function(thisCard) {
		
		thisCard.style.borderWidth="thin";
		thisCard.style.backgroundColor="#EBDFDF";
	};

	return oldCarLot;

})(CarLot || {});

