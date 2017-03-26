# spa-milestone-challenge

### For the CarMax KnockOff used car lot, this application displays the current inventory available for sale and allows dynamic updates to Car descriptions. 

xxx

#### Car Inventory App on Launch
![Car Inventory App on Launch](...)

#### Car Inventory App upon Selecting a Car Card + Editing Car Description
![Car Inventory App on Select](...)

#### Car Inventory App Vertical Display
![Car Inventory App Vertical Display](...)


### Project Specs
#### `html` structure and definitions
1. The `Bootstrap` grid defines the underlying `html` structure
2. Created a standard `Bootstrap` `navbar`, fixed, at the top of the page, which includes a text input field. 

#### `css` stylings
3. Styling Requirements Include: 
- Each Car card element has a black border.
- When a Car card is selected, the card's border displays thicker, and the background color of the card changes. 
4. Custom styling for the Car cards is discretionary, and is clean and minimal. 

#### functionality implemented in `javascript` 
5. Initial car inventory data is defined in the JSON file, `inventory.json`.
6. XHR Request is executed to load the `json` file and write the date to the object array, `carInventory`.
7. javascript funciton loops over the array and writes the `carInventory` data to the DOM, adhering to Bootstrap's `row` and `column` structure.
- All of the properties for each car is written to the DOM. 
8. When a Car card is selected, the selected Car's Description displays in the text input field in the `navbar`, and any changes the user enters are mirrored in the Description displayed in the Car's card. 
9. When the user hits the `Enter` key, the text input field is restored to its placeholder value, and the changes made to the Car's Description are saved to the `carInventory` array. 

#### functionality implemented in `iife`s
10. Except for the function that launches the application, `loadInventory()`, in `main.js`, all functionality for the application is implemented in four `iife` files:
- `CarLot.js`
- `eventHandlers.js`
- `selectedDisplay.js`
- `output.js`


### Technologies Used
- html
- css
- javascript
- Bootstrap


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/nss-evening-cohort-05/spa-milestone-challenge-SMITHsharon.git
cd spa-milestone-challenge-SMITHsharon
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

