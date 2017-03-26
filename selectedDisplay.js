
var CarLot = (function (oldCarLot) {

	var editCarDesc = document.getElementById("userInput");
	var carDescEditField = document.getElementById("userInput");
	var changedCarChar = document.getElementById("userInput");

	// function changes border thickness and background color 
	// for the selected car element 
	oldCarLot.changeSelected = function(thisCard) {
console.log("in changesSelected / thisCard", thisCard);

		thisCard.style.borderWidth="thick";
		thisCard.style.backgroundColor="#D8E3E8";
		thisCard.style.color="A38788";
	};


	// function resets border thickness and background color 
	// for this car element back to initial values
	oldCarLot.resetCardToInit = function(thisCard) {
		
		thisCard.style.borderWidth="thin";
		thisCard.style.backgroundColor="#EBDFDF";
	};


	// function displays the Description for the selected Car
	// in the text input field; makes that field the focus allowing 
	// user to edit; mirrors the text changes in the selected Car card
	oldCarLot.editCarDescription = function(thisCar) {
console.log("thisCar.childNodes[3].id", thisCar.childNodes[3].id);

		var thisCarID = thisCar.childNodes[3].id;

		changedCarChar.focus();

		// writes the selected Car's <description> to the user input text field
  		editCarDesc.value = thisCar.childNodes[3].innerHTML;

  		changedCarChar.addEventListener("keyup", function(e) {
    
    		if (e.which === 13) { // the <Enter> key

       			carDescEditField.innerHTML ="Car Description"; // reset placeholder for text input field

       			// write the edited description to <carInventory> array
       			CarLot.updateCarDescription (thisCarID, thisCar.innerHTML);

     		} else { // user is editing the Car description for this car

      			thisCar.innerHTML = editCarDesc.value;
  console.log("thisCarID :: ", thisCarID);
     		} // end <else>   
  		}) // end <editCarDesc.addEventListener>
	} // end <editCarDescription> function>

	return oldCarLot;

})(CarLot || {});

