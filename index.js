// Write your code here!
const main = document.getElementById('main');
main.remove();

//  Create a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement('h1');

//  Add value for id element in h1 node
newHeader.id = "victory";

// inser the text for h1 node
newHeader.textContent = "YOUR-NAME is the champion"

// Get node for where the new element to be added to, then add.
const body = document.getElementsByTagName('body')[0];

body.append(newHeader);
