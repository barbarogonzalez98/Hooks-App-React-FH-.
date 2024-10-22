import { useState } from "react"

export const useCounter = (initialCounter = 10) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = ()=>{
    setCounter(counter + 1);
  }

  const decrement = (factor = 1)=>{
    setCounter(counter - 1);
  }
  const reset = ()=>{
    setCounter(initialCounter);
  }

  return {
    counter,
    reset,
    increment,
    decrement,
  }

}
