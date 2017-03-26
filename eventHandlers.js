
var CarLot = (function (oldCarLot) {

	// function handles all the Event Listeners for the application
	oldCarLot.activateEvents = function() {

		var homeLink = document.getElementById("homeHRef");
		var addLink = document.getElementById("addHRef");
		var deleteLink = document.getElementById("deleteHRef");
		var inventoryLink = document.getElementById("inventoryHRef");

		var carCards = document.getElementById("outputDOM");
		var selectedCard = "null";

		// From the navbar: <Home>, <Add>, <Delete>, <Current Inventory>
		homeLink.addEventListener("click", function() {
	    	alert("Home Screen for CarMax KnockOff under construction ...");
		});

		addLink.addEventListener("click", function() {
	    	alert("Adding Cars feature for CarMax KnockOff under construction ...");
		});

		deleteLink.addEventListener("click", function() {
	    	alert("Deleting Cars feature for CarMax KnockOff under construction ...");
		});

		inventoryLink.addEventListener("click", function() {
	    	alert("Functionality for this feature under construction ...");
		});


		// When the user clicks on a Car card
		// * the borderWidth on the card changes to <thick>
		// * the background color of the card changes to <#EBC0C0> (a blue/gray color)
		// * the <carDesc> text displays in the <Car Description> text input field
		// * and whatever text the user enters in the input field is bound to the 
		// * <carDesc> info in the Car card
		carCards.addEventListener("click", function(e) {

			// reset border of last selected car to initial state
			if (selectedCard !== "null") {
				oldCarLot.resetCardToInit(selectedCard);
				selectedCard = "null";
			}

			// isolate the selected target Car card
			if (e.target.classList.contains("carCard") === true) {
				selectedCard = e.target;

			} else if 
				((e.target.classList.contains("carYear") === true) || 
				(e.target.classList.contains("makeModel") === true) || 
				(e.target.classList.contains("carPrice") === true) || 
				(e.target.classList.contains("carDesc") === true))
				{
				selectedCard = e.target.parentNode;
			} else {
				selectedCard = "null";
			};


			if (selectedCard !== "null") {

				// change the border thickness and background color of selected card
				oldCarLot.changeSelected(selectedCard);

				// make the Car Description the focus for user to edit
				oldCarLot.editCarDescription(selectedCard);
			}
		});

	};

	return oldCarLot;

})(CarLot || {});
