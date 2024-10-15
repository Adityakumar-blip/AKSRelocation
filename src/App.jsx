import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SaaSProductLandingPage from "./SaaSProductLandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SaaSProductLandingPage />
    </>
  );
}

export default App;
