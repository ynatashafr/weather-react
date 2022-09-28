import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Caracas" />
    </div>
  );
}

export default App;
