import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <MyForm name="Enzo Ragazzoni Faustino Carelli" email="enzoragazzoni21@gmail.com" bio="Sou um advogado" role="admin" />
    </>
  )
}

export default App
