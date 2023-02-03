import React from "react";

const api = {
  key: "69461ea432de4e9adda482f185121ae0",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {

  const dateGenerator = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let year = d.getFullYear();
    let month = months[d.getMonth()]

    return `${day}, ${date} ${month} ${year}`

    
  }
  return (
    <div className="app">
      <main>
          <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="Search places"


            >
            </input>
          </div>
          <div>
            <div className="location-box">
              <div className="location">
                Kigali, Rwanda
              </div>
              <div className="date">{dateGenerator(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temperature">
                20 C

              </div>
              <div className="weather">
                Sunny
              </div>
            </div>
          </div>
      </main>
      
    </div>
  );
}

export default App;
