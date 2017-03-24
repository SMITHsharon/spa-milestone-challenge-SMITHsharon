
var CarLot = (function () {

  var carInventory = [
	  {
	    make: "",
	    model: "",
	    year: "",
	    price: "",
	    description: ""
	  }, 
	];

	return {
		// function executeThisCodeAfterFileLoaded(){
		executeThisCodeAfterFileLoaded: function () {

			var data = JSON.parse(this.responseText);
			console.log("car data object :: ", data);
		},

		// function executeThisCodeAfterFileFails(){
		executeThisCodeAfterFileFails: function () {
			console.log("Inventory Load Fail : / ");
		},

		// loadInventory = function (callback) {
		loadInventory: function (callback) {
		    var inventoryLoader = new XMLHttpRequest();

		    inventoryLoader.addEventListener("load", CarLot.executeThisCodeAfterFileLoaded);
		    inventoryLoader.addEventListener("error", CarLot.executeThisCodeAfterFileFails);
			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();
		},


		// function RETURNs <carInventory> array to whatever function calls for it
	  	getCarInventory: function() {
			
			return carInventory;
		}

	} // CarLot <return>

})();

