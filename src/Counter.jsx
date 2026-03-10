import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  function inCount() {
    setCount(count + 1);
    console.log(count);
  }
  let [countdec, setCountdec] = useState(0);
  function deCount() {
    setCountdec(countdec - 1);
    console.log(countdec);
  }

  return (
    <div>
      <h1>Counter Component</h1>
      <button style={{ backgroundColor: "greenyellow" }} onClick={inCount}>
        Count in :{count}
      </button>
      <br />
      <br />
      <button
        style={{ backgroundColor: "red", fontFamily: "monospace" }}
        onClick={deCount}
      >
        Count dec : {countdec}
      </button>{" "}
      <br /> <br />
    </div>
  );
};
export default Counter;
