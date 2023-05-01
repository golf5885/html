function showTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
  }
  
  setInterval(showTime, 1000);

  fetch('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric')
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0];
      const temperature = data.main.temp; // Convert from Kelvin to Celsius
      const description = weather.description;
      const icon = `https://openweathermap.org/img/w/${weather.icon}.png`;
  
      const weatherElement = document.getElementById('weather');
      weatherElement.innerHTML = `
        <img src="${icon}" alt="${description}">
        <p>${temperature}°C</p>
        <p>${description}</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  