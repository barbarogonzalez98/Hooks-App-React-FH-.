import React, { memo } from 'react'

export const Small = memo(({value}) => {

console.log("Se ha vuelto a llamar");

  return (
    <small> {value} </small>
  )
}
)