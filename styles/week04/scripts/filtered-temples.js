const temples = [
    {
        name: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        name: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        name: "Payson Utah Temple",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        name: "Yigo Guam Temple",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        name: "Washington D.C. Temple",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        name: "Lima Peru Temple",
        location: "Lima, Peru",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        name: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        name: "São Paulo Brazil Temple",
        location: "São Paulo, Brazil",
        dedicated: "1978-10-30",
        area: 59046,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        name: "Hong Kong China Temple",
        location: "Hong Kong, China",
        dedicated: "1996-05-26",
        area: 28061,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },
    {
        name: "Manila Philippines Temple",
        location: "Manila, Philippines",
        dedicated: "1984-09-25",
        area: 26583,
        imageUrl: "https://churchofjesuschrist.org/imgs/de7a4293e088152271f9c6292ee37fbf83799741/full/320%2C/0/default.jpg"
    },
    {
        name: "Kinshasa Democratic Republic of the Congo Temple",
        location: "Kinshasa, DR Congo",
        dedicated: "2019-04-14",
        area: 12000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-icon.jpg"
    }
];

function toggleMenu() {
    const filters = document.getElementById("filters");
    const screenWidth = window.innerWidth;

    // Si l'écran est de petite taille (par exemple moins de 768px)
    if (screenWidth < 768) {
        filters.classList.toggle("close"); // Cette ligne ouvre ou ferme le menu
    } else {
        filters.classList.add("open"); // Sur grand écran, on garde le menu ouvert
    }
}


function filterTemples(criteria) {
    let filtered = [];

    switch(criteria) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        case "all":
            filtered = temples;
            break;
        default:
            filtered = temples; // Si aucun critère n'est défini, tous les temples sont affichés
    }

    displayTemples(filtered); // Affiche les temples filtrés
}

// Fonction pour afficher les temples
function displayTemples(templesArray) {
    const container = document.getElementById("temples-container");
    container.innerHTML = ""; // Vider l'affichage avant de remplir

    templesArray.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// Affichage initial des temples
displayTemples(temples);

// Afficher la dernière date de modification
document.getElementById("lastModified").textContent = document.lastModified;


