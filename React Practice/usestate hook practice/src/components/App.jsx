import React, { useState } from "react";

function App() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(updateTime, 1000);
  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
