//your JS code here. If required.
const element = document.getElementById("level");

if (element) {
    let level = 1; 
    let currentElement = element;

    while (currentElement.parentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }

    alert(`The level of the element is: ${level}`);
} else {
    alert("Element with id 'level' not found.");
}
