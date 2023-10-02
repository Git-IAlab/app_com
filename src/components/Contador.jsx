import React from 'react'

export const Contador = ({value}) => {

    function hadleClick(){
        value +=1
        console.log(value)
    }

  return (
    <>
        <h1>Contador</h1>
        <p>{value}</p>
        <button onClick={hadleClick}> +1</button>
    </>
  )
}
