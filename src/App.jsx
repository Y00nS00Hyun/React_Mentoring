import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (num) => {
    setCount(count + num);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <div>
        <Viewer count={count} />
      </div>
      <div>
        <Controller onClickButton={handleClick} />
      </div>
    </div>
  );
}

export default App;


