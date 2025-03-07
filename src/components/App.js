
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  function checkDarkMode(newIsDarkMode) {
    setIsDarkMode(newIsDarkMode);
  }


  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`} style={{padding: "6px", border: "6px solid #F55900"}}>
      <Header onDarkModeClick={checkDarkMode} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
