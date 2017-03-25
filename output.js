
var CarLot = (function (oldCarLot) {

var inventoryDOM = document.getElementById("outputDOM");


	// function loops over the <carInventory> object
	// array and populates the page 
	// (writes the inventory to the DOM)
	oldCarLot.populatePage = function(inventory) {
		
console.log("<output.js> / in populatePage / inventory :: ", inventory);
console.log("inventory.cars.length :: ", inventory.cars.length);

	var tableString = `<div id="outputDOM" class="container"><h1>Current Inventory</h1>`;
	tableString += `<div class="row">`;
	// var thisRow;
	var colCounter = 0;
	// var lastRow = 3;
	var thisCar;

	for (var i=0; i<inventory.cars.length; i++) {

			tableString += `<div id="i+1" class="carCard col-3">`;
			thisCar = inventory.cars[i];
// console.log("inventory.cars[i] :: ", inventory.cars[i]);
// console.log("thisCar :: ", thisCar);

			tableString += `<p class="carHead">${thisCar.year} ${thisCar.make} ${thisCar.model}</p>`;
			tableString += `<p>$${thisCar.price}</p>`;
			tableString += `<p class="carDesc">${thisCar.description}</p>`;

			tableString += `</div>`;

console.log("i :: ", i);
console.log("i%3 :: ", i%3);
			colCounter += 1;
			if (colCounter === 3) {

				tableString += `</div>`; // end of row
				tableString += `<div class="row">`;
				colCounter = 0;
			}
	

		
	}; // <i> loop

	tableString += `</div>`;

	inventoryDOM.innerHTML = tableString;

		};




// Now that the DOM is loaded, establish all the event listeners needed
// CarLot.activateEvents();


	return oldCarLot;

})(CarLot || {});
