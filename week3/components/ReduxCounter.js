import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions/CounterActions";

const ReduxCounter = ({ increment: inc, decrement: dec, reset: res }) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      
      <h2>The count is: {count}</h2>

      <button onClick={(e) => dispatch(increment())}>Increase</button>

      <button onClick={(e) => dispatch(decrement())}>Decrease</button>

      <button onClick={(e) => dispatch(reset())}>Reset</button>
      
    </div>

  );
};