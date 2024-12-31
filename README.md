# Weather App

A simple weather app built using Node.js and Express. The app allows users to get real-time weather information for any city, including details like temperature, humidity, wind speed, and more. This project demonstrates how to fetch and display data from the OpenWeatherMap API.

## Features

- Enter any city name to fetch current weather data.
- Displays information such as temperature, weather description, wind speed, pressure, humidity, and more.
- Displays the weather icon corresponding to the current weather conditions.
- Sunrise and sunset times for the current location.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

You also need a free API key from OpenWeatherMap:
- Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for an API key.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app



2. Install the required dependencies:

   npm install


3.Create a .env file in the root of the project with the following content:


  WEATHER_API_KEY=your_openweathermap_api_key


4.Start the application:



   node app.js




    This will start the server at http://localhost:3000.

Usage :


Open a web browser and navigate to http://localhost:3000.

Enter the name of the city for which you want to get the weather.

Click the "Get Weather" button to see the weather details for that city.


Example :

For example, if you enter "Warangal", the app will show:

The current temperature
Weather description (e.g., clear sky, cloudy, etc.)
Wind speed and direction
Humidity and pressure
Sunrise and sunset times
Weather icon





Project Structure :



weather-app/
├── app.js              # Main application file with server logic
├── .env                # Contains sensitive environment variables (API key)
├── views/              # EJS templates
│   └── index.ejs       # Frontend layout and weather display
├── public/             # Static files like CSS, JS
└── README.md           # This README file




Technologies Used :


Node.js: JavaScript runtime for building the app.
Express.js: Web framework for building the server.
Axios: Library for making HTTP requests to the OpenWeatherMap API.
EJS: Templating engine for rendering HTML pages.
OpenWeatherMap API: Provides weather data based on city names and coordinates.
Contributing
Feel free to fork this project and submit pull requests for any improvements, bug fixes, or features you'd like to add.

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add feature').
Push to the branch (git push origin feature-name).
Open a pull request.




License :

This project is licensed under the MIT License - see the LICENSE file for details.



### **Key Sections Explained**:
- **Prerequisites**: Lists the necessary tools and API key for the project.
- **Installation**: Guides users through the process of setting up the project on their machine.
- **Usage**: Explains how to use the app after running the server.
- **Project Structure**: Provides an overview of the project directory layout.
- **Technologies Used**: Lists the technologies and tools used in the project.
- **Contributing**: Encourages open source contributions and provides guidelines.
- **License**: A section to indicate the project's open-source license (MIT License in this case).

You can customize the repository URL and add further details as needed. Let me know if you need any changes!







