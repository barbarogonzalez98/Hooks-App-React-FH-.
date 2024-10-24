import "./layout.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import { useLayoutEffect, useRef } from "react";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name } = !!data && data; 

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClintRect());
  }, [name])

  return (
    <div>
      <h1>Layout_Effect</h1>
      <hr />

      <div>
        {/* <img src={image} alt="character" />
        <hr /> */}
        <blockquote className="blockquote text-right">
          <h3 
            className="mb-0"
            ref={pTag}
          >
            {name}
          </h3>
        </blockquote>
      </div>

      <button className="btn btn-primary" onClick={increment}>
        Next character
      </button>
    </div>
  );
};
