
import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {


  function isItDarkMode() {
    onDarkModeClick(!isDarkMode);
  }


  return (
    <header style={{padding: "5px", border: "5px dashed #FFA500"}}>
      <h2>Shopster</h2>
      <button onClick={isItDarkMode}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
