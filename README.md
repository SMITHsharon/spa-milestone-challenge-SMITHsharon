# spa-milestone-challenge

### For the CarMax KnockOff used car lot, this application displays the current inventory that is available for sale and allows dynamic updates to Car descriptions. The layout is clean and basic, and incorporates the underlying structures that allow for optimizing responsive design. Functionality of the site is implemented through javascript `iife`s. 

#### Car Inventory App on Launch
![Car Inventory App on Launch](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-SMITHsharon/screens/screens/Car%20Inventory%20App%20on%20Launch%20(1).png)

#### Car Inventory App upon Selecting a Car Card + Editing Car Description
![Car Inventory App on Select](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-SMITHsharon/screens/screens/Car%20Inventory%20App%20on%20Selecting%20a%20Car%20Card%20(2).png)

#### Car Inventory App Vertical Display
![Car Inventory App Vertical Display](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-SMITHsharon/screens/screens/Car%20Inventory%20App%20Vertical%20Display%20(3).png)


### Project Specs
#### `html` structure and definitions
1. The `Bootstrap` grid defines the underlying `html` structure. 
2. Created a standard `Bootstrap` `navbar`, fixed, at the top of the page, which includes a text input field. 
3. Changed `Bootstrap`'s `<form></form>` tag pair to `<div>`s to eliminate the side-effect of relaunching the application after the user edits a Car Description. 

#### `css` stylings
4. Styling Requirements Include: 
- Each Car card element has a black border.
- When a Car card is selected, the card's border displays thicker, and the background color of the card changes. 
5. Custom styling for the Car cards is discretionary, and is clean and minimal. 

#### functionality implemented in `JavaScript` 
6. Initial Car inventory data is defined in the `JSON` file, `inventory.json`.
7. XHR Request is executed to load the `JSON` file and write the date to the object array, `carInventory`.
8. `JavaScript` function loops over the array and writes the `carInventory` data to the DOM, adhering to `Bootstrap`'s `row` and `column` structure/convention.
- All of the properties for each car is written to the DOM. 
9. When a Car card is selected, the selected Car's Description displays in the text input field in the `navbar`, and any changes the user enters are mirrored in the Description displayed in the Car's card. 
10. When the user hits the `Enter` key, the text input field is restored to its placeholder value, and the changes made to the Car's Description are saved to the `carInventory` array. 

#### functionality implemented in `iife`s
11. There is only one function in `main.js`: `loadInventory()`. 
The code for this function is in CarLot `iife`, and it launches the application. 
All remaining functionality for the application is implemented in four `iife` files:
- `CarLot.js`
- `eventHandlers.js`
- `selectedDisplay.js`
- `output.js`


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `Bootstrap`


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

