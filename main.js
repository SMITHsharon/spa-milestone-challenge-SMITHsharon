
// <CarLot.loadInventory> launches the application 
// by loading the Car inventory from the JSON file 
// into the private <carInventory> object array.
//
// All other functionality is handled in the iife files:
// 
// CarLot.js: 
//     <loadInventory>        :: executes XHR request, and supporting functions
//     <getCarInventory>      :: returns <carInventory> object array to the calling function
//     <updateCarDescription> :: an incomplete setter function; the only field modified 
//                               in <carInventory> array for the given Car object 
//                               is the description field
//
// eventHandlers.js:
//     code for all the Event Handlers for the application:
//     <homeLink.addEventListener>      :: returns an alert
//     <addLink.addEventListener>       :: returns an alert
//     <deleteLink.addEventListener>    :: returns an alert
//     <inventoryLink.addEventListener> :: returns an alert
//     <carCards.addEventListener>      :: activates if user selects a particular card
//                                         - isolates the selected card
//                                         - calls <changeSelected> function to change card styling
//                                         - allows user to edit the selected Car description
//
// selectedDisplay.js:
//     <changeSelected>  :: for the selected card, changes the border and background color
//     <resetCardToInit> :: resets deselected card back to initial state display
//
// output.js:
//     <populatePage> :: writes the <carInventory> data to the DOM
//
CarLot.loadInventory();



