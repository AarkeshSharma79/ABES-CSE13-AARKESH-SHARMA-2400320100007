import React, { useState } from 'react';

// const Userstate = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
const Userstate = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("Blue");

  const increment = () => {
    setCount(count + 1);
    setBgColor("lightgreen");
  };

  const decrement = () => {
    setCount(count - 1);
    setBgColor("lightcoral");
  };

  const reset = () => {
    setCount(0);
    setBgColor("white");
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <h2>useState Counter App</h2>
      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  };

//   return (
//     <div>
//       <h2>useState Counter App</h2>
//       <h3>Number</h3>
//       <button onClick={increment}>{count}</button>
//       <button onClick={decrement}>{count}</button>
//     </div>
//   );
// };

export default Userstate;