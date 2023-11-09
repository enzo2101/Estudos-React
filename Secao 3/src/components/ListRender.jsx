import React from 'react'
import { useState } from 'react'

const ListRender = () => {

    const [list, setList] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        { id: 1, name: "João", age: "18" },
        { id: 2, name: "Enzo", age: "20" },
        { id: 3, name: "Mathias", age: "22" }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <div>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                <button onClick={() => setList([...list, "Enzo"])}>Inserir Enzo!</button>
            </div>
            <div>
            {users.map((user, index) => (
                <li key={index}>{user.name} - {user.age}</li>
            ))}
            <button onClick={deleteRandom}>Delete random Users</button>
            </div>
        </div>
    )
}

export default ListRender