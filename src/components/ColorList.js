import React from "react";

export default function ColorList({ selectColor }) {
  const colors = ["white", "red", "blue", "yellow", "green"];

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      {colors.map((color, idx) => (
        <div
          key={idx + color}
          style={{
            backgroundColor: color,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            borderStyle: "solid",
            borderWidth: "0.5px",
            borderColor: "black",
          }}
          onClick={() => {
            selectColor(color);
          }}
        ></div>
      ))}
    </div>
  );
}
