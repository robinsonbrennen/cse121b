/* 
Instructor: Bro. Blazzard
Class: CSE121B
Semester: Spring 2022
Student: Mark Hammer
email: ham21019@byui.edu
Assignment: Final Project
Research Sites:
    https://www.codecademy.com/resources/blog/javascript-projects-for-beginners/    
    https://www.interviewbit.com/blog/javascript-projects/
    https://jsbeginners.com/
    https://blog.boot.dev/javascript/javascript-projects-for-beginners/
    https://www.w3schools.com/jsref/met_audio_play.asp
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3
    https://www.epidemicsound.com/
    https://www.programiz.com/javascript/function
*/

// create variables
const button = document.querySelector("#button");
const audio = new Audio("sound/ES_Childs Laughter 2 - SFX Producer.mp3");
const myDate = new Date();
const currentDay = myDate.getDate();
const currentMonth = myDate.getMonth();
const currentYear = myDate.getYear();
let message;

// test date variables
function testDate () {
    console.log(`Current Month: ${currentMonth}, Current Day: ${currentDay}, Current Year: ${currentYear}`);
}
testDate();

// set date in footer
document.querySelector("#date").textContent = `Current Date: ${currentMonth + 1}/${currentDay}/${currentYear + 1900}`;

// conditional message based on month
if (currentMonth >= 0 && currentMonth <= 5 || currentMonth >= 8 && currentMonth <=11) {
    message = "Good luck in school!";
} else {
    message = "Enjoy your summer vacation!";
}

// set message in footer
document.querySelector("#message").textContent = message

// create dadJokes array
const dadJokes = [
    {
        joke: "Q: How do you kill a blue elephant?\nA: With a blue elephant gun.\n\nQ: How do you kill a red elephant?\nA: Hold its trunk till it turns blue, then shoot it with a blue elephant gun.",
        source: "My dad"
    },
    {
        joke: "Q: Why do elephants paint their toenails red?\nA: So they can hide in cherry trees.\n\nQ: Ever seen an elephant in a cherry tree?\nWorks pretty good, doesn't it!",
        source: "My dad"
    },
    {
        joke: "Q: Why did the football coach go to the bank?\nA: To get his quarter back.",
        source: "https://www.thepioneerwoman.com/home-lifestyle/a35617884/best-dad-jokes/"
    },
    {
        joke: "Q: What is Forrest Gump's password?\nA: 1forrest1",
        source: "https://www.thepioneerwoman.com/home-lifestyle/a35617884/best-dad-jokes/"
    },
    {
        joke: "Q: Why did the man throw a clock out the window?\nA: He wanted to see time fly.",
        source: "My dad"
    },
    {
        joke: "I just found out I'm colorblind. The news came out of the purple!",
        source: "https://www.menshealth.com/trending-news/a34437277/best-dad-jokes/"
    },
    {
        joke: "I hate my job—all I do is crush cans all day. It's soda pressing.",
        source: "https://www.menshealth.com/trending-news/a34437277/best-dad-jokes/"
    },
    {
        joke: "I asked my date to meet me at the gym but she never showed up. I guess the two of us aren't going to work out.",
        source: "https://www.menshealth.com/trending-news/a34437277/best-dad-jokes/"
    }
];

// button action
button.addEventListener("click", function () {
    // get randomNumber based on dadJokes array
    let randomNumber = Math.floor(Math.random() * dadJokes.length);
    
    // testing which number was picked
    console.log(`The random number chosen was ${randomNumber}`);
    
    // display joke with source
    document.querySelector("#quote").textContent = dadJokes[randomNumber].joke;
    document.querySelector("#author").textContent = `Source: ${dadJokes[randomNumber].source}`;
    
    // play sound
    audio.play();
});

// keep track of number of times button is clicked
let count = 0;
const counter = document.querySelector("#counter");
button.onclick = function () {
    count++;
    counter.textContent = `You've clicked the button ${count} times.`
};