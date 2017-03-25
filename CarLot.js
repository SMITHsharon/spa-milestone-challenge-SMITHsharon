
var CarLot = (function (oldCarLot) {

  var carInventory = [
	  {
	    make: "",
	    model: "",
	    year: "",
	    price: "",
	    description: ""
	  }, 
	];


	// function parses the JSON file;
	// stores the data in the <carInventory> object array;
	// then calls <populatePage> function to write the data to the DOM
	oldCarLot.executeThisCodeAfterFileLoaded = function() {

		carInventory = JSON.parse(this.responseText);
console.log("carInventory :: ", carInventory);
		oldCarLot.populatePage(carInventory);
			
	};
	

	// function executeThisCodeAfterFileFails(){
	// executeThisCodeAfterFileFails: function () {
	CarLot.executeThisCodeAfterFileFails = function() {
console.log("Inventory Load Fail : / ");

	};


	// XHR Requests
	CarLot.loadInventory = function() {
		var inventoryLoader = new XMLHttpRequest();

		inventoryLoader.addEventListener("load", CarLot.executeThisCodeAfterFileLoaded);
		inventoryLoader.addEventListener("error", CarLot.executeThisCodeAfterFileFails);
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();

	};


	// function RETURNs <carInventory> array to whatever function calls for it
	// getCarInventory: function() {
	CarLot.getCarInventory = function() {
			
		return carInventory;
	};

	return oldCarLot;

})(CarLot || {});

