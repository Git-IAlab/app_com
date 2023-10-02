
import React, { useState } from 'react'

export const Button = ({value, onClick}) => {
    return <button onClick={() => onClick(value + 1)}>Bonton Incremento</button>
}

export const  ComponentC = ({ value }) => {
    const [contador, setContador] = useState(value)

    const handleClick = (newvalue) => {
        setContador(newvalue)
    }

  return (
    <>
        <h1>Contador: {contador} </h1>
        <Button value={contador} onClick={handleClick} />
    </>     
  )
}
