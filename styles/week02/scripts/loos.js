document.addEventListener("DOMContentLoaded", () => {
    const myInfo = {
        name: "Brother T",
        photo: "images/photo.jpg",
        favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
        placesLived: [
            { place: "Rexburg, ID", length: "5 years" },
            { place: "Ammon, ID", length: "3 years" },
            { place: "Sandy, UT", length: "1 year" }
        ]
    };

    function generateListMarkup(list, templateCallback) {
        return list.map(templateCallback).join("");
    }

    function foodsTemplate(food) {
        return `<li>${food}</li>`;
    }

    function placesTemplate(place) {
        return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
    }

    document.querySelector("#favorite-foods").innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
    document.querySelector("#places-lived").innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);
});

  