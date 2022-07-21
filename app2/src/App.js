import React from "react";
import { increment, decrement } from "./Counts";

const buttonStyles = {
  fontSize: "1.5rem",
  minWidth: "2rem",
};

const App = () => {
  return (
    <div
      style={{
        border: "1px solid #e3e3e3",
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{ marginRight: "1rem", ...buttonStyles }}
          onClick={() => decrement()}
        >
          -
        </button>
        <button style={buttonStyles} onClick={() => increment()}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
