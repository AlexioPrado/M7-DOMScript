/*

Re-create the table below using JavaScript and the DOM objects to generate the HTML. 
Use the JavaScript style object to add 2 additional styles of your choice to your table.
Use the JavaScript setAttribute() method to add 2 additional styles (different from the one above set with the style object) of your choice to your table.
Use JavaScript comments in your code to indicate which style is being applied and how it is being applied (style object or set attribute method)
Possible styles include borders styles, background colors for cells, rows or the entire table, border shading, rounded corners, etc. Practice with different style values until you are proud of your results.

*/

let table = document.createElement('table');

//Row 1
let row1 = document.createElement('tr');

let catCar = document.createElement('td');
catCar.textContent = 'Car';
let catSpeed = document.createElement('td');
catSpeed.textContent = 'Top';
let catCost = document.createElement('td');
catCost.textContent = 'Price';

//Row 2
let row2 = document.createElement('tr');

let chevCar = document.createElement('td');
chevCar.textContent = 'Chevrolet';
let chevSpeed = document.createElement('td');
chevSpeed.textContent = '120mph';
let chevCost = document.createElement('td');
chevCost.textContent = '$10,000';

//Row 3
let row3 = document.createElement('tr');

let pontCar = document.createElement('td');
pontCar.textContent = 'Pontiac';
let pontSpeed = document.createElement('td');
pontSpeed.textContent = '140mph';
let pontCost = document.createElement('td');
pontCost.textContent = '$20,000'


document.body.append(table);

table.append(row1);
table.append(row2);
table.append(row3);

row1.append(catCar);
row1.append(catSpeed);
row1.append(catCost);

row2.append(chevCar);
row2.append(chevSpeed);
row2.append(chevCost);

row3.append(pontCar);
row3.append(pontSpeed);
row3.append(pontCost);


//Style object
/*
table makes pink background
pont Car and chev Car bolds the font
*/ 
table.style = 'background-color: pink; padding: 10px;';
pontCar.style = 'font-weight: bold;';
chevCar.style = 'font-weight: bold;';

//setAtribute method
/*
makes padding different
*/
pontSpeed.setAttribute('style','padding: 0px 10px 0px 10px;');
chevSpeed.setAttribute('style','padding: 0px 10px 0px 10px;');


