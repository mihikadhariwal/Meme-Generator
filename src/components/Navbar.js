import React from "react";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src="https://github.com/LisaPMunich/meme_generator/blob/main/src/images/troll-face.png?raw=true"></img>
      <h1>MemeGenerator</h1>
      <input type="checkbox" id="switch" onClick={props.toggleDarkmode} />
      <label for="switch">Toggle</label>
    </nav>
  );
}
