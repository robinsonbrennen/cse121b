// Get Input
// const url = ;
const inputElement = document.getElementById("input");
const element = document.getElementById("search");

const getInput = () => {
    const inputValue = inputElement.value;
    // Call the API
    const getInfo = async () => {
        // Find the information in API
        const response = await fetch('../units.json');
        if (response.ok) {
            const result = await response.json();
            console.log(result.units[0].name);
            const unit = result.units.filter(x => inputValue.toLowerCase() == x.name.toLowerCase());
            displayResults(unit);
        };
    };
    getInfo();
};
element.addEventListener("click", getInput);

// Display results to the user: units name, description, hit_points, and attack
const displayResults = (result) => {
    reset();
    
    const article = document.createElement("article");
    
    const unitName = document.createElement("h3");
    unitName.textContent = result.name;
    

    const unitDescription = document.createElement("h4");
    unitDescription.textContent = result.description;
    

    const unitHitPoints = document.createElement("h4");
    unitHitPoints.textContent = result.hit_points;
    

    const unitAttack = document.createElement("h4");
    unitAttack.textContent = result.attack;
    

    article.appendChild(unitName);
    article.appendChild(unitDescription);
    article.appendChild(unitHitPoints);
    article.appendChild(unitAttack);

    document.querySelector("#output").appendChild(article);
};

const reset = () => {
    document.querySelector("#output").innerHTML = "";
};
