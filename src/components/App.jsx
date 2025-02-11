import React from "react";
import emojipedia from "../emojipedia/";
import EmojiComponent from "./EmojiComponent";
function createEmoji(emoji) {
  return (
    <EmojiComponent
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
