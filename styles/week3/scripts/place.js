document.addEventListener("DOMContentLoaded", () => {
    updateFooter();
    getWeather();
});

// Fonction pour mettre à jour le footer
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
    document.getElementById("last-modified").textContent = document.lastModified;
}

// Fonction pour calculer le facteur de refroidissement éolien
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return "N/A";
}

// Fonction pour récupérer et afficher les données météo
async function getWeather() {
    const apiKey = "854ab3f227ce58ad3d463a82f18aa6c3";
    const city = "Kinshasa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erreur lors du chargement des données météo");
        
        const data = await response.json();
        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        
        document.getElementById("current-weather").innerHTML = `
            Conditions: ${weather}<br>
            Température: ${temperature}°C<br>
            Humidité: ${humidity}%
        `;

        document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
        getForecast(apiKey, city);
    } catch (error) {
        document.getElementById("current-weather").textContent = "Impossible de récupérer les données météo.";
    }
}

// Fonction pour récupérer et afficher la prévision météo sur 3 jours
async function getForecast(apiKey, city) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error("Erreur lors du chargement des prévisions météo");
        
        const forecastData = await response.json();
        let forecastHtml = "";
        forecastData.list.slice(0, 3).forEach(forecast => {
            forecastHtml += `<li>${new Date(forecast.dt_txt).toLocaleDateString()}: ${forecast.main.temp}°C, ${forecast.weather[0].description}</li>`;
        });
        document.getElementById("forecast").innerHTML = forecastHtml;
    } catch (error) {
        document.getElementById("forecast").textContent = "Prévisions indisponibles.";
    }
}
