import React from "react";
// import memedata from "../memedata";

export default function Hero(props) {
  const [memeimage, setmemeimage] = React.useState({
    toptext: "",
    bottomtext: "",
    randomimage: "",
  });

  const [allmemes, setallmemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setallmemes(data.data.memes));
  });

  function getmemeimage() {
    // console.log("clicked");
    // const memesarray = memedata.data.memes;
    // const memesarray = allmemes.data.memes;
    const randomno = Math.floor(Math.random() * allmemes.length);
    const url = allmemes[randomno].url;
    setmemeimage((previmg) => ({
      ...previmg,
      randomimage: url,
    }));
    // console.log(url);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setmemeimage((previmg) => ({
      ...previmg,
      [name]: value,
    }));
  }
  return (
    <div className={props.darkMode ? "darkhero" : ""}>
      <main>
        <div className="form">
          <input
            className="form--input"
            type="text"
            placeholder="top text"
            name="toptext"
            value={memeimage.toptext}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="text"
            placeholder="bottom text"
            name="bottomtext"
            value={memeimage.bottomtext}
            onChange={handleChange}
          />
          <button
            className="form--button"
            id={props.darkMode ? "darkbutton" : ""}
            type="submit"
            onClick={getmemeimage}
          >
            Get a new meme image
          </button>
        </div>
        <div className="meme">
          <img src={memeimage.randomimage}></img>
          <h2 className="top--text">{memeimage.toptext}</h2>
          <h2 className="bottom--text">{memeimage.bottomtext}</h2>
        </div>
      </main>
    </div>
  );
}
