import { useState } from "react";

const Test = () => {
  const [stateA, setStateA] = useState("State A");
  const [stateB, setStateB] = useState("State B");

  const changeState = () => {
    console.log("render!!");
    setStateA("after A");
    setStateB("after B");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{ border: "2px solid black", width: "50px", height: "50px" }}
        >
          {stateA}
        </div>
        <div
          style={{ border: "2px solid black", width: "50px", height: "50px" }}
        >
          {stateB}
        </div>
      </div>
      <button onClick={changeState}>ChangeState</button>
    </div>
  );
};

export default Test;
