import React, {useState} from "react";


const api = {
  key: "69461ea432de4e9adda482f185121ae0",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {


  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // Function to get weather
  const search = evt => {
    if (evt.key==="Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) 
        .then(res => res.json())
        .then(result => { 
          setWeather(result);
          setQuery('');
          console.log(result)
          
        });

    }
  }


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
    <div className={
      (typeof weather.main != "undefined") 
        ? ((weather.main.temp >16) 
          ? 'app warm'
          :'app')
    :'app' }>
      <main>
          <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="Search places"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}


            >
            </input>
          </div>
          {(typeof weather.main != "undefined") ? (

            <div>
                          <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateGenerator(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}°c

              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
            </div>
          ) : ('') }

          
      </main>
      <div class="footer">
         <p>&copy; Made with &#9825; by <a href="https://dauda.studio" target="__blank"> Jeff Dauda</a> </p>
         
      </div>
      
    </div>
  );
}

export default App;
