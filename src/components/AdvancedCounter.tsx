import { useState } from "react";
import { useEffect } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>
        Counter: <span>{count}</span>
      </h3>
    </div>
  );
}

export default AdvancedCounter;
