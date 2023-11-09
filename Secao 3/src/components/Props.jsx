import React from 'react'

const Props = ({ name, value }) => {
  return (
    <div>
        <h2>O nome do usuário: {name}</h2>
        <p>O Valor de {name} é {value}</p>
    </div>
  )
}

export default Props