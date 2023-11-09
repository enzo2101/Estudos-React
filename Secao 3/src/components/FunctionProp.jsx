import React from 'react'

const FunctionProp = ({ showMassage }) => {
    return (
        <div>
            <button onClick={showMassage}>Clique aqui para executar a função!</button>
        </div>
    )
}

export default FunctionProp