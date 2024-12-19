import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { RootState } from "../../app/store";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIncrementAmount(value === "" ? 0 : Number(value)); // Convert the value to a number
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={handleChange}
        placeholder="Enter amount"
        className="border rounded-xl p-1"
      />

      <div className="flex gap-3">
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Value</button>
        <button onClick={resetAll}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
