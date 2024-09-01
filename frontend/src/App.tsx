import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState<string>("");

  const fetchMessage = async () => {
    try {
      // local:
      // const res = await fetch("http://localhost:3001");
      // published:
      const res = await fetch("https://vercel-fullstack-demo-backend.vercel.app");
      const data = await res.json();
      console.log("data:", data);
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const fetchTest1Message = async () => {
    try {
      // local:
      // const res = await fetch("http://localhost:3001/test1");
      // published:
      const res = await fetch("https://vercel-fullstack-demo-backend.vercel.app");
      const data = await res.json();
      console.log("data:", data);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const fetchTest2Message = async () => {
    try {
      // local:
      // const res = await fetch("http://localhost:3001/test2");
      // published:
      const res = await fetch("https://vercel-fullstack-demo-backend.vercel.app");
      const data = await res.json();
      console.log("data:", data);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const handleClick = () => {
    setCount((count) => count + 1);
    fetchMessage();
    fetchTest1Message();
    fetchTest2Message();
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h2>{message}</h2>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
