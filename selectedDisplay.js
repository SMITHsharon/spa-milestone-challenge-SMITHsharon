
var CarLot = (function (oldCarLot) {

	// function changes border thickness and background color 
	// for the selected car element 
	oldCarLot.changeSelected = function(thisCard) {

		thisCard.style.borderWidth="thick";
		thisCard.style.backgroundColor="#EBC0C0";
	};


	// function resets border thickness and background color 
	// for this car element back to initial values
	oldCarLot.resetCardToInit = function(thisCard) {
		
		thisCard.style.borderWidth="thin";
		thisCard.style.backgroundColor="#EBDFDF";
	};


	// function 
	oldCarLot.editCarDescription = function(carDescription) {

		var editCarDesc = document.getElementById("userInput");
		editCarDesc.focus();

		// writes the selected Car's <description> to the user input text field
  		editCarDesc.value = carDescription.innerHTML;

  		editCarDesc.addEventListener("keyup", function(e) {
    
    		if (e.which === 13) { // the <Enter> key

       			editCarDesc.value ="Car Description"; // reset placeholder for text input field

       			// write the edited description to <carInventory> array
       			CarLot.updateCarDescription (carDescription.id, carDescription.innerHTML);

     		} else { // user is editing the Car description for this car

      			carDescription.innerHTML = editCarDesc.value;
     		} // end <else>   
  		}) // end <editCarDesc.addEventListener>
	} // end <editCarDescription> function>

	return oldCarLot;

})(CarLot || {});
