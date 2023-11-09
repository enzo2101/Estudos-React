import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Imagem from './components/Imagem'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import Props from './components/Props'
import FunctionProp from './components/FunctionProp'
import Massage from './components/Massage'
import handleMassage from './components/handleMassage'

function App() {

  function showMassage(){
    console.log("Olá")
  }

  const [massage, setMassage] = useState()

  function handleMassage(msg){
    setMassage(msg)
  }

  return (
    <>
      <Imagem/>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <Props name="Enzo" value={1000}/>
      <FunctionProp showMassage={showMassage}/>

      {/* state lift */}
      <Massage />
      <handleMassage handleMassage={handleMassage}/>
    </>
  )
}

export default App
