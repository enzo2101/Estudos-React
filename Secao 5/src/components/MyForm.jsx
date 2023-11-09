import React, { useState } from 'react'
import "./MyForm.components.css"

const MyForm = (user) => {
    // Gerenciamento de dados

    //estou utilizando esse user ? user.name : '', pois na aula ele ensinou
    // a fazer um formulário de atualização
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    // em um input essa forma é uma forma correta, criando uma função
    // e colocando no onChange, porém se for 10 inputs eu teria 10 funções diferentes
    // e em questão de código isso é péssimo eu teria que digitar muita coisa e
    // isso não pe uma boa prática
    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name)
    // console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, bio, role)

        // limpar formulário
        // setName("")
        // setEmail("")
        // setBio("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome" />
                </div> */}
                {/* label envolvendo input (é mais indicado pelo react) */}
                <div>
                    <label>
                        <span>Nome: </span>
                        <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
                    </label>
                    <label>
                        <span>E-mail: </span>
                        {/* para um input essa é a forma "mais correta" */}
                        <input type="email" name="name" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </label>
                    <label>
                        <span>Bio: </span>
                        <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
                    </label>
                    {/* 9- select */}
                    <label>
                         <span>Função: </span>
                         <select name="role" onChange={(e) => setRole(e.target.value)} value={role} >
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                         </select>
                    </label>
                </div>
                {/* Função do onChange utilizamos quando alguma tecla é pressionado no input*/}
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm