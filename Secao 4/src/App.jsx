import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstCss from './components/FirstCss'
import RedTitle from './components/RedTitle'

function App() {

  const redTitle = false

  return (
    <>
      <h1>React com CSS</h1>
      <FirstCss/>
      <RedTitle redtitle={redTitle}/>
    </>
  )
}

export default App
