import React from "react";
import { useState, useRef } from "react";
function RefExample() {
  const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("렌더링 후 Ref : ", countRef.current);
  console.log("렌더링 후 countVar : ", countVar);

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref up! ==>", countRef.current);
  };
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var up ! ==>", countVar);
  };
  const doRender = () => {
    setRender(!render);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Ref:{countRef.current}</p>
        <p>Var:{countVar}</p>
        <div>
          <button onClick={increaseRef}> Ref Up</button>
          <button onClick={increaseVar}> Var Up</button>
          <button onClick={doRender}> Render</button>
        </div>
      </header>
    </div>
  );
}

export default RefExample;
