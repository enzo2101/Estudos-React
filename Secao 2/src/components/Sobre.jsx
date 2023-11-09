import React from 'react'

const Sobre = ({ name, age, job }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <h3>{job}</h3>
        </div>
    )
}

export default Sobre