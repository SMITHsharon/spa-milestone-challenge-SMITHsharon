
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

			tableString += `<div id="i+1" class="carCard col-3">`;
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

	}; // <populatePage>




// Now that the DOM is loaded, establish all the event listeners needed
// CarLot.activateEvents();


	return oldCarLot;

})(CarLot || {});
