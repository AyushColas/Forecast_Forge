
# 🌤️ Weather App - React.js

A simple weather application built with **React** that fetches real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api). The app displays temperature, humidity, pressure, and more for a searched city.

---

## 📁 Project Path

This project is located in the `phase1/` directory of the repository.

---

## 🔧 Features

- Real-time weather data using OpenWeatherMap
- Search by city name (e.g., Delhi, Oslo, Karachi)
- Displays:
  - Current temperature
  - Humidity
  - Pressure
  - Max and min temperature
- Responsive design with mobile support
- Background and UI overlays for better readability

---

## 🖥️ Technologies Used

- React.js (functional components + hooks)
- JavaScript (ES6+)
- HTML5 + CSS3
- OpenWeatherMap REST API

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/phase1
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

The app will run at `http://localhost:3000/`.

---

## 🌐 API Used

- [OpenWeatherMap Current Weather API](https://openweathermap.org/current)
- Units used: **Metric (°C)**

To use this app, ensure you have a valid OpenWeatherMap API key. Replace your key in the fetch URL inside `Temparature.jsx`:

```js
const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=YOUR_API_KEY&units=metric`;
```

---

## 📦 Folder Structure

```
phase1/
│
├── components
├── App.js
├── App.css
├── index.js
├── index.css
└── ...
```

---

## 📄 License

This project is for educational purposes only. Feel free to use it as a base for your own experiments!

---

## ✨ Credits

Created by [Ayush Mishra](https://github.com/AyushColas)  
Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
