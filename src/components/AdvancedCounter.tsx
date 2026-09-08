import { useState, useEffect, type ChangeEvent } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleAdd() {
    setCount(count + step);
  }

  function handleMinus() {
    setCount(count - step);
  }

  function handleReset() {
    setCount(0);
    setStep(0);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStep(Number(e.target.value));
  };
  return (
    <div>
      <h3>
        Counter: <span>{count}</span>
      </h3>

      <div className="buttons">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <input
        type="number"
        placeholder="choose a number..."
        onChange={handleChange}
      />
    </div>
  );
}

export default AdvancedCounter;
