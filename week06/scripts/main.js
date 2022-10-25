// Get Input
const element = document.getElementById("search");

function getInput() {
    const inputElement = document.getElementById("input");
    const inputValue = inputElement.value;

    // Call the API
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/resources/units/";
    const getInfo = async () => {
        // Find the information in API
        const response = await fetch(url + inputValue);
        if (response.ok) {
            const result = await response.json();
            displayResults(result);
        };
    };
    getInfo();
}
element.addEventListener("click", getInput)

// Display results to the user: units name, description, hit_points, and attack
function displayResults(result) {
    reset();
    console.log(result);
    
    const unitName = document.getElementById("name")
    let name = document.createTextNode(result.civilizations.name)
    unitName.appendChild(name)

    const unitDescription = document.getElementById("description")
    let description = document.createTextNode(result.data.description)
    unitDescription.appendChild(description)

    const unitHitPoints = document.getElementById("hit-points")
    let hitPoints = document.createTextNode(result.data.hit_points)
    unitHitPoints.appendChild(hitPoints)

    const unitAttack = document.getElementById("attack")
    let attack = document.createTextNode(result.data.attack)
    unitAttack.appendChild(attack)
}

const reset = () => {
    document.querySelector("#name").innerHTML = "";
    document.querySelector("#description").innerHTML = "";
    document.querySelector("#hit-points").innerHTML = "";
    document.querySelector("#attack").innerHTML = "";
}
