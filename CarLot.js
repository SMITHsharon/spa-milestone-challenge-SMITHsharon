
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
		console.log("It worked!!!", this.responseText);
		// console.log("Data Returned: ", Date.now());
		var data = JSON.parse(this.responseText);
		console.log("It worked!!!", data);
		// makeDOM(data);
	},

	// function executeThisCodeAfterFileFails(){
	executeThisCodeAfterFileFails: function () {
		console.log("Inventory Load Fail : / ");
	},

		// loadInventory = function (callback) {
	    loadInventory: function (callback) {
	console.log("in loadInventory");
	    var inventoryLoader = new XMLHttpRequest();

	    inventoryLoader.addEventListener("load", executeThisCodeAfterFileLoaded);
	    inventoryLoader.addEventListener("error", executeThisCodeAfterFileFails);
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();
	}

// myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
// myRequest.addEventListener("error", executeThisCodeAfterFileFails);
// myRequest.open("GET", "inventory.json");
// myRequest.send();


	// function RETURNs <carInventory> array to whatever function calls for it
  	getCarInventory = function() {
		
		return carInventory;
	};

})();

