import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "300px" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center" }}>
        {count}
      </p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={decrement} style={{ padding: "10px 20px", fontSize: "16px" }}>
          -
        </button>
        <button onClick={reset} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Reset
        </button>
        <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px" }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;