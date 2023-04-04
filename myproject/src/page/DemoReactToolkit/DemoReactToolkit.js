import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changName,
  decrement,
  increment,
} from "../../redux/DemoReact/DemoReact";

function DemoReact() {
  const countNumber = useSelector((state) => state.demo.count);
  const outputName = useSelector((state) => state.demo.name);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  function handleDecrement() {
    dispatch(decrement(countNumber - 1));
  }

  function handleIncrement() {
    dispatch(increment(countNumber + 1));
  }
  function handleChangeName(val) {
    setName(val);
    dispatch(changName(val));
  }
  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }}>
      <button onClick={handleDecrement}>-</button>
      <input value={countNumber} />
      <button onClick={handleIncrement}>+</button>
      <div style={{ backgroundColor: "#FFF" }}>
        <input
          value={name}
          onChange={(val) => handleChangeName(val.target.value)}
        />
        {outputName}
      </div>
    </div>
  );
}

export default DemoReact;
