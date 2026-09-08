import { useState } from "react";
import { useEffect } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }
  return (
    <div>
      <h3>
        Counter: <span>{count}</span>
      </h3>

      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleMinus}>Minus</button>
      </div>

      <input type="number" placeholder="choose a number..." />
    </div>
  );
}

export default AdvancedCounter;
