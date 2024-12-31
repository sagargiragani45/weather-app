require('dotenv').config();

const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.render('index', { weather: null, error: null });
});

// Route to fetch weather data
app.get('/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.render('index', { weather: null, error: 'Please enter a city name.' });
  }

  const apiKey = process.env.WEATHER_API_KEY;  // Access the API key from the environment variable

  try {
    // Step 1: Get latitude and longitude using Geocoding API
    const geoResponse = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );

    if (!geoResponse.data.length) {
      return res.render('index', { weather: null, error: 'City not found. Please try again.' });
    }

    const { lat, lon } = geoResponse.data[0];

    // Step 2: Fetch weather data using One Call API
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const weatherData = weatherResponse.data;

    // Format weather data
    const weather = {
      city: weatherData.name,
      country: weatherData.sys.country,
      description: weatherData.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
      temperature: weatherData.main.temp,
      feels_like: weatherData.main.feels_like,
      temp_min: weatherData.main.temp_min,
      temp_max: weatherData.main.temp_max,
      pressure: weatherData.main.pressure,
      humidity: weatherData.main.humidity,
      wind_speed: weatherData.wind.speed,
      wind_deg: weatherData.wind.deg,
      visibility: weatherData.visibility,
      sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(),
    };

    // Render the weather data
    res.render('index', { weather, error: null });
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.render('index', { weather: null, error: 'Error fetching weather data. Please try again.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

