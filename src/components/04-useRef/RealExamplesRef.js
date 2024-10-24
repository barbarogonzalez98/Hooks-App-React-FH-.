import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "../02-useEffect/effects.css";

export const RealExamplesRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExamplesRef</h1>
      <hr />

      
      {show && <MultipleCustomHooks />}

      <button 
        onClick={() => setShow(!show)}
        className="btn btn-primary mt-5"
      >
        Show/Hide
      </button>

    </div>
  );
};
