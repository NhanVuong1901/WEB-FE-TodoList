import { useState, useEffect } from "react";
import "./App.css";
import TodoFeature from "./features/Todo/pages";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={isDark ? "App dark" : "App"}>
      <div className="theme-toggle">
        <button onClick={() => setIsDark(true)}>🌙 Dark</button>
        <button onClick={() => setIsDark(false)}>☀️ Light</button>
      </div>

      <TodoFeature />
    </div>
  );
}

export default App;
