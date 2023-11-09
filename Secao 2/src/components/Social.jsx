import React from 'react'

const Social = ({ facebook, google, youtube }) => {
    return (
        <div>
            <h3>{facebook}</h3>
            <h3>{google}</h3>
            <h3>{youtube}</h3>
        </div>
    )
}

export default Social