import React from 'react'
import { useState } from 'react';
import City from '../assets/city.jpg'

function ManageData() {

    let someData = 10;


    //sempre utilizar set<Nome>
    //aqui estou desestruturando um array, para desestruturar você utiliza []
    const [number, setNumber] = useState(10);

    const [image, setImage] = useState('/img1.jpg')

    return (
        <div>
            <div>
                <h3>{someData}</h3>
                <button onClick={() => (someData = 15)}>Clique aqui</button>
            </div>
            <div>
                <h3>{number}</h3>
                <button onClick={() => setNumber(15)}>Clique aqui</button>
            </div>
            <div>
                <img src={image} alt=""/>
                <button onClick={() => setImage(City)}>Clique aqui</button>
            </div>
        </div>
    )
}

export default ManageData