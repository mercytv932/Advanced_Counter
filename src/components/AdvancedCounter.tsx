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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowUp") {
        handleAdd();
      } else if (event.key === "ArrowDown") {
        handleMinus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [count, step]);

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

      <h2>Count History</h2>
      <hr />

      {history.map((count, index) => (
        <li key={index}>{count}</li>
      ))}

      <h4>Use ArrowUp to increment and ArrowDown to decrement.</h4>
    </div>
  );
}

export default AdvancedCounter;
