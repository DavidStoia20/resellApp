import React, { useState } from "react";


const Light_DarkTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.style.backgroundColor = newTheme === "light" ? "#ffffff" : "#d3d3d3";
    setTheme(newTheme);
  };

  return (
    <div id={`theme-${theme}`}>
      <button id="theme-button" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Light_DarkTheme;