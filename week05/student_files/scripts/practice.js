/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let newDate = new Date();
// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let getDayOfWeek = newDate.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
//let weekend = 'Woohoo!  It is the weekend!';
//let weekday = 'Hang in there!';
let dayMessage;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (newDate < 0 || newDate > 5 ){
    //console.log(weekday)
    dayMessage = "Hang in there!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else{
    //console.log(weekend)
    dayMessage = "Woohoo!  It is the weekend!";
};
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
//let weekDayList = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday']
let displayWeekday;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (getDayOfWeek){
    case 0:
    //getDayOfWeek = 0
    displayWeekday = "Sunday";
    //console.log(weekDayList[getDayOfWeek]);
    break;
    case 1:
    //getDayOfWeek = 1
    displayWeekday = "Monday";
    //console.log(weekDayList[getDayOfWeek]);
    break;
    case 2:
    //getDayOfWeek = 2
    displayWeekday = "Tuesday";
    //console.log(weekDayList[getDayOfWeek]);
    break;
    case 3:
    //getDayOfWeek = 3
    displayWeekday = "Wednesday";
    //console.log(weekDayList[getDayOfWeek]);
    break;
    case 4:
    //getDayOfWeek = 4
    displayWeekday = "Thursday";
    //console.log(weekDayList[getDayOfWeek]);
    break;
    case 5:
    //getDayOfWeek = 5
    displayWeekday = "Friday";
    //console.log(weekDayList[getDayOfWeek]);
    break;
    case 6:
    //getDayOfWeek = 6
    displayWeekday = "Saturday";
    //console.log(weekDayList[getDayOfWeek]);
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').innerHTML = dayMessage;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').innerHTML = displayWeekday;


/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeArray = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
//function 
const output = (templeArray) => {
    templeArray.forEach(temple => {
    const newArticle = document.createElement('article');
    const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
    const location = document.createElement('h4');
        location.textContent = temple.location
    const dedicated = document.createElement('h4');
        dedicated.textContent = temple.dedicated
    const imageUrl = document.createElement('img');
        imageUrl.setAttribute('src', temple.imageUrl);
        imageUrl.setAttribute('alt', temple.templeName);

    newArticle.append(templeName);
    newArticle.append(location);
    newArticle.append(dedicated);
    newArticle.append(imageUrl);

    document.querySelector('#temples').appendChild(newArticle); 
    });
};

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

async function getTemples() {
    const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
    const response = await fetch(url);  
    if (response.ok){
        templeArray = await response.json(); 
        output(templeArray);
    }
    else{
        console.log("Error downloading")
    }
};
/*
function output (data){
    results = data;
    const html = '<h2>${data.templeName}</h2>'
};
*/
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset (){
document.querySelector('#temples').innerHTML = "";
};
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

function sortBy (){
    reset();
    const templeNameAscending = templeArray.sort();
    const templeNameDescending = templeArray.reverse();

};

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files