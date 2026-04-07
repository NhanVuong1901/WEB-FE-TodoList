import { useState } from "react";

function BoxColor() {
  const [color, setColor] = useState("lightblue");

  const colors = ["lightblue", "lightcoral", "lightgreen", "lightyellow", "lightpink", "lightgray", "red"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Box Color</h2>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          border: "2px solid #333",
          borderRadius: "8px",
          marginBottom: "20px",
          transition: "background-color 0.3s ease",
        }}
      ></div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              padding: "10px 15px",
              backgroundColor: c,
              border: color === c ? "3px solid #333" : "1px solid #999",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: color === c ? "bold" : "normal",
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BoxColor;