/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {
    name: "Brennen Robinson",
    photo: "profilepic.jpg",
    favoriteFoods: ["Biscuits and Gravy", "Pizza", "Chocolate Milk"],
    hobbies: ["Video Games", "Fly Fishing", "Flying Drones"],
    placesLived: [],
};
// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived = [
    {
        place: "Missoula, MT",
        length: 1,
    },
    {
        place: "Vernal, UT",
        length: 1,
    },
    {
        place: "Coeur d'alene, ID",
        length: 3,
    },
    {
        place: "Hanna, WY",
        length: 3,
    },
    {
        place: "Beaver Dam, AZ",
        length: 2,
    },
    {
        place: "Star Valley, WY",
        length: 14,
    },
]
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").querySelector = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
photo = document.querySelector("#photo");
photo.setAttribute("src", `images/${myInfo.photo}`);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.setAttribute("alt", `Picture of ${myInfo.name}`);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector("#favorite-foods").appendChild(li);
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hobbies;
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector("#hobbies").appendChild(li);
});
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
myInfo.placesLived.forEach(placesLived => {
    let dl = document.createElement("dl");
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");

    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;

    dl.appendChild(dt);
    dl.appendChild(dd);

    document.querySelector("#places-lived").appendChild(dl);
});
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
