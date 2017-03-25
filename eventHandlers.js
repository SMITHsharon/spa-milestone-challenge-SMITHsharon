
var CarLot = (function (oldCarLot) {

  // function handles all the Event Listeners for the application
	oldCarLot.activateEvents = function() {

		var homeLink = document.getElementById("homeHRef");
		var addLink = document.getElementById("addHRef");
		var deleteLink = document.getElementById("deleteHRef");
		var inventoryLink = document.getElementById("inventoryHRef");

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
	    	console.log("in Display Inventory link click");
		});

	};

	return oldCarLot;

})(CarLot || {});