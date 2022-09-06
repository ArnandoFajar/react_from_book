import React, { Fragment } from "react";
import "./App.css";
import Instructions from "../Instructions/Instructions";

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face",
  },
  {
    emoji: "🎉",
    name: "party popper",
  },
  {
    emoji: "💃",
    name: "woman dancing",
  },
];
function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <Fragment>
      <div className="container">
        <h1 id={greeting}>Hello, World</h1>
        {displayAction && <p>I am writing JSX</p>}

        {/* Memasukkan Component Class */}
        <Instructions />
        <Instructions />

        {/* cara pertama */}
        <ul>
          <li>
            <button
              onClick={displayEmojiName}
              aria-label="grinning face"
              id="grinning face"
            >
              😀
            </button>
          </li>
          <li>
            <button
              onClick={displayEmojiName}
              aria-label="party popper"
              id="party popper"
            >
              🎉
            </button>
          </li>
          <li>
            <button
              onClick={displayEmojiName}
              aria-label="party popper"
              id="party popper"
            >
              💃
            </button>
          </li>
        </ul>

        {/* cara kedua */}
        <ul>
          {emojis.map((emoji) => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" aria-label={emoji.name} id={emoji.name}>
                  {emoji.emoji}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
