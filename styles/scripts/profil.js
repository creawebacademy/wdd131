// Gestion du menu hamburger
document.getElementById("menu-btn").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    
    // Vérifier l'état du menu et ajuster l'affichage
    if (menu.classList.contains("hidden")) {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.alignItems = "center";
    }
});

// S'assurer que le menu est visible et en ligne sur les grands écrans
window.addEventListener("resize", function() {
    const menu = document.getElementById("menu");
    if (window.innerWidth >= 768) {
        menu.style.display = "flex";
        menu.style.flexDirection = "row";
        menu.style.justifyContent = "center";
        menu.style.alignItems = "center";
    } else if (menu.classList.contains("hidden")) {
        menu.style.display = "none";
    }
});

// Appliquer la disposition correcte au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    if (window.innerWidth >= 768) {
        menu.style.display = "flex";
        menu.style.flexDirection = "row";
        menu.style.justifyContent = "center";
        menu.style.alignItems = "center";
    } else {
        menu.style.display = "none";
        menu.classList.add("hidden");
    }
});

// Mise à jour de l'année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mise à jour de la date de dernière modification
document.getElementById("lastModified").textContent = document.lastModified;
