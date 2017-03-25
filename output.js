
var CarLot = (function (oldCarLot) {

var inventoryDOM = document.getElementById("outputDOM");


	// function loops over the <carInventory> 
	// object array and populates the page 
	// (writes the inventory to the DOM)
	oldCarLot.populatePage = function(inventory) {
		
		var tableString = `<div id="outputDOM" class="container"><h1>Current Inventory</h1>`;
		tableString += `<div class="row">`;
		var thisCar;
		var commaPrice; // formats the price with comma separator at thousands; eg 99999 = 99,999

		// column counter; tracks when a row has accumulated three columns
		// then closes the row with a </div> tag and opens a new row
		var colCounter = 0; 

		for (var i=0; i<inventory.cars.length; i++) {

			tableString += `<div id=${i+1} class="carCard col-3">`;
			thisCar = inventory.cars[i];

			tableString += `<p class="carYear">${thisCar.year}</p>`;
			tableString += `<p class="makeModel">${thisCar.make} ${thisCar.model}</p>`;

			commaPrice = String(thisCar.price).replace(/(.)(?=(\d{3})+$)/g,'$1,')
			tableString += `<p class="carPrice">$${commaPrice}</p>`;
			
			tableString += `<p class="carDesc">${thisCar.description}</p>`;

			tableString += `</div>`;

			colCounter += 1;
			if (colCounter === 3) { /// wraps this row

				tableString += `</div>`; // end of row
				tableString += `<div class="row">`;
				colCounter = 0;
			}
	
		}; // <i> for loop

		tableString += `</div>`;

		inventoryDOM.innerHTML = tableString;

		oldCarLot.activateEvents();
	}; // <populatePage>


	// function stablishes all the event listeners for the application
	//
	// From the navbar: <Home>, <Add>, <Delete>, <Current Inventory>
	//
	// When the user clicks on a Car card
	// * the borderWidth on the card changes to <thick>
	// * the background color of the card changes to <#EBC0C0> (a grayish rose color)
	// * the <carDesc> text displays in the <Car Description> text input field
	// * and whatever text the user enters in the input field is bound to the 
	// * <carDesc> info in the Car card
	oldCarLot.activateEvents = function() {
console.log("activating Events");
	var homeLink = document.getElementById("homeHRef");
	var addLink = document.getElementById("addHRef");
	var deleteLink = document.getElementById("deleteHRef");
	var inventoryLink = document.getElementById("inventoryHRef");
	var carCards = document.getElementById("outputDOM");
	var selectedCard = "null";

		homeLink.addEventListener("click", function() {
	    	alert("Home Screen is under construction ...");
		});

		addLink.addEventListener("click", function() {
	    	alert("Adding Cars to Inventory Feature is under construction ...");
		});

		deleteLink.addEventListener("click", function() {
	    	alert("Deleting Cars from Inventory Feature is under construction ...");
		});

		inventoryLink.addEventListener("click", function() {
	    	oldCarLot.populatePage(CarLot.getCarInventory());
		});

		carCards.addEventListener("click", function(e) {

			// reset border of last selected car 
			// to initial state
			if (selectedCard !== "null") {
				selectedCard.style.borderWidth="thin";
				selectedCard.style.backgroundColor="#EBDFDF";
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
			}

			// change the border thickness and background color
			// of the selected card
			selectedCard.style.borderWidth="thick";
			selectedCard.style.backgroundColor="#EBC0C0";
		});

	};

	return oldCarLot;

})(CarLot || {});
