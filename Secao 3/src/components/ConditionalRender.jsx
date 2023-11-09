import { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(false)

    const [name, setName] = useState("João")

    return (
        <div>
            <h1>Isso pode ser exibido?</h1>
            {x && <p>se for true pode</p>}
            {!x && <p>se for false também pode</p>}

            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>O nome não é João</p>
                </div>
            )}
            <button onClick={() => setName("Maria")}>Mudar nome para Maria</button>
        </div>
    )
}

export default ConditionalRender