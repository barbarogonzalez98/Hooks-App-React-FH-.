import React, { useState } from "react";
import "./counter.css";


const CounterApp = () => {

    const [{count1, count2}, setCount] = useState({
        count1: 10,
        count2: 20
    });

  return (
    <>
      <p>Counter1: {count1}</p>
      <p>Counter2: {count2}</p>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={() => setCount( count => ({...count, count1: count1+1}))}
        >
        +1
      </button>
    </>
  );
};

export default CounterApp;
