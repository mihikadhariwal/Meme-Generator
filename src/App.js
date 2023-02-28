import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkmode() {
    setDarkMode((prevmode) => !prevmode);
  }
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
      <Hero darkMode={darkMode} />
    </div>
  );
}
