// Remove the existing <main> element if it exists
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement('h1');

// Set the ID of the new header to 'victory'
newHeader.id = 'victory';

// Set the text content of the new header
newHeader.textContent = "Fiona-Kanyi is the champion!"; // Replace YOUR-NAME with your name

// Append the new header to the body (or another desired parent element)
document.body.append(newHeader);
