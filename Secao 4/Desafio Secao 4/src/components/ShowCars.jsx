import { useState } from 'react'
import styles from './ShowCars.module.css'

const ShowCars = ({ brand, km, color }) => {

    function handleIsNew() {
        if (km === 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <h1>{brand}</h1>
            <p className={handleIsNew() ? styles.newCar : styles.usedCar}>Km rodados: {km}</p>
            <p>Cor: {color}</p>
            {handleIsNew() ? (
                <p>Carro novo</p>
            ):(
                <p>Carro usado</p>
            )}
        </div>
    )
}

export default ShowCars