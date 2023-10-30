// Write your code here!
const main = document.getElementById('main');
main.remove();

//  Create a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement('h1');

//  Add value for id element in h1 node
newHeader.id = "victory";

// inser the text for h1 node
// newHeader.textContent = "El is the champion"
newHeader.innerHTML = "El is the champion"
// Get node for where the new element to be added to, then add.
const body = document.getElementsByTagName('body')[0];

body.append(newHeader);

const element = document.createElement("div");
body.append(element);

const ul = document.createElement("ul")
element.append(ul)


for (let i = 0; i < 5; i++) {
    const li = document.createElement("li")
    li.textContent = (i + 1).toString()
    ul.append(li)
}