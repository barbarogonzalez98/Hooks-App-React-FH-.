import "../02-useEffect/effects.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, status, gender, image } = !!data && data;
  console.log(data);

  return (
    <div>
      <h1>Rick and Morthy!!!</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div>
          <img src = {image} alt="character" />
          <hr/>
          <blockquote className="blockquote text-right">
            <h3 className="mb-0">{name}</h3>
            <p className="mb-0">{gender}</p>
            <footer className="blockquote-footer"> {status} </footer>
          </blockquote>
        </div>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next character
      </button>
    </div>
  );
};
