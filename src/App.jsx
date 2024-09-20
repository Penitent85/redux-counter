import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  reset,
} from "./redux/state";
import { useRef, useState } from "react";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div>Count : {count}</div>
      <div className="">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <div className="">=================</div>
        <div className="">Value : {value}</div>
        <input
          type="number"
          placeholder="Enter number"
          value={value}
          onChange={handleChange}
        />
        <button onClick={() => dispatch(incrementByValue(Number(value)))}>
          Increment By {value}
        </button>
        <button onClick={() => dispatch(decrementByValue(Number(value)))}>
          Decrement By {value}
        </button>
      </div>
    </>
  );
};

export default App;
