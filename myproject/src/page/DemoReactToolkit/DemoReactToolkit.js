import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/DemoReact/DemoReact";

function DemoReact() {
  const countNumber = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleDecrement() {
    dispatch(decrement(countNumber - 1));
  }

  function handleIncrement() {
    dispatch(increment(countNumber + 1));
  }
  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <input value={countNumber} />
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default DemoReact;
