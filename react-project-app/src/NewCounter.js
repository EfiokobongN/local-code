import React, { useState } from 'react';
//state hook
export default function NewCounter() {
  const [count, setCount] = useState(0);
  const [previousClicks, setpreviousClicks] = useState(0);
  const inputChange = (event) => {
    setpreviousClicks(Number(event.target.value));
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <label>
        Previous clicks
        <input type="text" value={previousClicks} onChange={inputChange} />
      </label>
      <p>You clicked{previousClicks + count} times</p>
      <button onClick={increase}>Click me</button>
    </div>
  );
}
