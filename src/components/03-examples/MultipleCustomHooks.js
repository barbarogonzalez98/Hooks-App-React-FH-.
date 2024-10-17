import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

                
  const {data, loading, error} = useFetch(`https://rickandmortyapi.com/api/character/3`);
  console.log(data);

  return (
    <div>
        <h1>Custom Hooks</h1>        
    </div>
  )
}
