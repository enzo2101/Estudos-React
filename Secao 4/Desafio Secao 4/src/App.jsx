import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowCars from './components/ShowCars'

function App() {

  const cars = [
    {id: 1, brand: "KIA", km: 0, color: "Azul"},
    {id: 2, brand: "Ferrari", km: 123, color: "Preto"},
    {id: 3, brand: "Nissan", km: 12367, color: "Vermelho"},
    {id: 4, brand: "Buggati", km: 0, color: "Branco"}
  ]

  return (
    <>
      {cars.map((car) => (
        <ShowCars brand={car.brand} km={car.km} color={car.color}/>
      ))}
    </>
  )
}

export default App
