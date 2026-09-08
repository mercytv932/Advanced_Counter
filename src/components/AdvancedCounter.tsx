import { useState, useEffect, type ChangeEvent } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState<number[]>([]);

  function handleAdd() {
    const newCount = count + step;
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
  }

  function handleMinus() {
    const newCount = count - step;
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
  }

  function handleReset() {
    setCount(0);
    setHistory([]);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStep(Number(e.target.value));
  };

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

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

      <h2>History</h2>

      {history.map((count) => (
        <li key={count}>{count}</li>
      ))}
    </div>
  );
}

export default AdvancedCounter;
