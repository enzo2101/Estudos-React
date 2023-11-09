import React from 'react'

const handleMassage = ({ handleMassage }) => {
    const massage = ["Oi", "Olá", "Olá, tudo bem?"]

    return (
        <div>
            <button onClick={massage[0]}>1</button>
            <button onClick={massage[1]}>2</button>
            <button onClick={massage[2]}>3</button>
        </div>
    )
}

export default handleMassage