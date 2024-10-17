import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import "./counter.css"


const CounterWithCustomHook = () => {
  
  const {counter, reset, increment, decrement} = useCounter(10);


  return (
    <>
        <h1>Counter with CustomHook: {counter}</h1>
        <hr />
        <button 
        className="btn btn-primary"
        onClick={()=>increment(2)}
        >+1
        </button>
        <br />
        <button 
        className="btn btn-primary"
        onClick={reset}
        >Reset
        </button>
        <br />
        <button 
        className="btn btn-primary"
        onClick={()=>decrement(2)}
        >-1
        </button>
    </>
  )
}


export default CounterWithCustomHook