async function fetchData(){
    try{
        const cityName = document.getElementById("city").value.toLowerCase();
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2ac92771d109408fb5f155718240707&q=${cityName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        // fetch image
        const image = data.current.condition.icon;
        const img = document.getElementById("image");

        img.src = image;
        img.style.display = "block";

        //fetch country
        const country = data.location.country;
        const coun = document.getElementById("country");

        // fetch city
        const city = data.location.name;
        const cit = document.getElementById("citys");

        // fetch weather condition
        const weather = data.current.condition.text;
        const weath = document.getElementById("wcon");

        // celcius;
        const celcius = data.current.temp_c;
        const cel = document.getElementById("cel");

        // fer
        const fer = data.current.temp_f;
        const f = document.getElementById("fer");

        coun.textContent = country;
        cit.textContent = city;
        weath.textContent = weather;
        cel.textContent = celcius;
        f.textContent = fer;

    }
    catch(error){
        console.error(error);
    }
}