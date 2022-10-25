// get input from user
const element = document.getElementById("submit-button");

function handleSubmitClick() {
    const inputElement = document.getElementById("userInput");
    const inputValue = inputElement.value

    // call the API
    const url = "https://botw-compendium.herokuapp.com/api/v2/entry/";
    async function getThing() {
        // find the information within the API
        const response = await fetch(url+inputValue);
        if (response.ok) {
            const result = await response.json();
            doStuff(result);
        };
    };
    getThing()
}
element.addEventListener("click", handleSubmitClick)

// get the result back to the user: item's name, description, image and locations.
function doStuff(result) {
    reset();
    console.log(result);

    const nameElement = document.getElementById("name")
    let nodeName = document.createTextNode(result.data.name)
    nameElement.appendChild(nodeName)

    const imageElement = document.getElementById("image")
    imageElement.setAttribute("src",result.data.image)

    const descriptionElement = document.getElementById("description")
    let nodeDescription = document.createTextNode(result.data.description)
    descriptionElement.appendChild(nodeDescription)

    const locationElement = document.getElementById("location")
    let nodeLocation = document.createTextNode("Common Locations: "+result.data.common_locations)
    locationElement.appendChild(nodeLocation)
}

const reset = () => {
    document.querySelector("#name").innerHTML = "";
    document.querySelector("#description").innerHTML = "";
    document.querySelector("#location").innerHTML = "";
}