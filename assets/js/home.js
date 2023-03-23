
// home page functionality 
document.getElementById("username").innerText = sessionStorage.getItem("username")


// document.getElementById("cities").innerHTML = 
var cities = ["Karachi", "Faisalabad", "Peshawar", "Multan", "Lahore", "Islamabad"];


document.getElementById("add-city").onclick = () => {
    let userCity = document.getElementById("city-input").value;
    cities.push(userCity);

    let citiesContainer = document.getElementById("cities").innerHTML = "";

    cities.forEach((city) => {
        document.getElementById("cities").innerHTML += `<li>${city}</li>`;
    })

    document.getElementById("city-input").value = "";
}


window.onload = cities.forEach((city) => {
    document.getElementById("cities").innerHTML += `<li>${city}</li>`;
})





