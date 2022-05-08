/* Author: Cedric Green (JS FILE ONLY) */

// Variables
let submitButton = document.getElementById("submitButton");
let artCanvas = document.getElementById("pixelCanvas");
let colorPicker = document.getElementById("colorPicker");
let sizePicker = document.getElementById("sizePicker");
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");

let height = 0;
let width = 0;
let color = '#000000';

let cells = null;

//submit button modifications
submitButton.style.value = "Submit/Clear";

//Dynamic Grid Creation
function makeGrid() {


    // Time complexity O(n^2)

    // Outer loop sets the rows
   for(let r = 0; r < height; r++) {

        let temp = artCanvas.insertRow();

        //Inner loop sets the cells in each row
        for(let c = 0; c < width; c++) {

            temp.insertCell(c);      
       }
   }

    //event on click cell
   cells = document.querySelectorAll('td');

   cells.forEach(function(element) {

        element.addEventListener("click", function() {

            if(element.style.backgroundColor === color) {
                element.style.backgroundColor = '#FFFFFF';
            }
            else {
                element.style.backgroundColor = color;
            }
        });
    });
}

//event on change color
document.getElementById("colorPicker").onchange = function() {

    color = this.value;  
}

//event on click submit
 submitButton.addEventListener("click", function(e) {
    
    /* Soon as user hits submit, we'll reset any rows to none, so the table doesn't
    add on to the previous table. */
    if(cells != null) {
        document.getElementById("pixelCanvas").innerHTML = "";
    }
    

    //capture necessary values for grid creation
    height = inputHeight.value;
    width = inputWidth.value;
    color = colorPicker.value;

    //create grid
    makeGrid();

 });



