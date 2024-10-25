import "./layout.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import { useLayoutEffect, useRef, useState } from "react";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name } = !!data && data;

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [name]);

  return (
    <div>
      <h1>Layout_Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <h3 className="mb-0" ref={pTag}>
          {name}
        </h3>
      </blockquote>

      <pre>
          {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={increment}>
        Next character
      </button>
    </div>
  );
};
