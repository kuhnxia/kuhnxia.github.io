

/*
 * When the button is clicked, toggle the class "dark mode"
 * that means add or remove this class to the header and the body.
 */

/*
* classlist - add, remove, toggle the class
* Author: w3schools
* URL: https://www.w3schools.com/jsref/prop_element_classlist.asp
* Date accessed: 13 Mar 2021
*/

//define an event listener (event handler function passed as a callback function)
document.getElementById("btn-dark-light-mode").addEventListener("click", darkMode);

// Event handler function
function darkMode() {
    document.body.classList.toggle("dark-mode");
    //solve the inherited problem.
    document.getElementById("pg-header").classList.toggle("dark-mode");  
}