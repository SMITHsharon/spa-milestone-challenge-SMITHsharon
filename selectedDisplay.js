
var CarLot = (function (oldCarLot) {

	var editCarDesc = document.getElementById("userInput");
	var carDescEditField = document.getElementById("userInput");
	var changedCarChar = document.getElementById("userInput");

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


	// function displays the Description for the selected Car element
	// in the text input field; makes that field the focus allowing 
	// user to edit; mirrors the text changes in the selected Car card
	oldCarLot.editCarDescription = function(thisCar) {

		var thisCarID = thisCar.childNodes[3].id;

		changedCarChar.focus();

		// writes the selected Car's <description> to the user input text field
  		editCarDesc.value = thisCar.childNodes[3].innerHTML;

  		changedCarChar.addEventListener("keyup", function(e) {
    
    		if (e.which === 13) { // the <Enter> key

       			carDescEditField.value ="Car Description"; // reset placeholder for text input field

       			// write the edited description to <carInventory> array
       			CarLot.updateCarDescription (thisCarID, thisCar.innerHTML);

     		} else { // user is editing the Car description for this car

      			thisCar.childNodes[3].innerHTML = editCarDesc.value;
  // console.log("thisCarID :: ", thisCarID); // changes are writing (looping) to all prior selected cards ?
  
     		} // end <else>   
  		}) // end <editCarDesc.addEventListener>
	} // end <editCarDescription> function>

	return oldCarLot;

})(CarLot || {});

