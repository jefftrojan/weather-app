import React from "react";

const api = {
  key: "69461ea432de4e9adda482f185121ae0",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  return (
    <div className="app">
      <main>
          <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="Search"


            
            >
            </input>
          </div>
      </main>
      
    </div>
  );
}

export default App;
