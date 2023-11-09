import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Equipe from './components/Equipe'
import Events from './components/Events'

const users = [
  {id: 1, name: "João", age: 20, job:"Programador", facebook:"Joãozin", google:"jaum", youtube:"matadorjaum"},
  {id: 2, name: "João", age: 20, job:"Programador", facebook:"Joãozin", google:"jaum", youtube:"matadorjaum"}
]

const name = "Matheus"

const data = {
  age: 20,
  job: "Programador"
}

function App() {

  return (
    <>
      <FirstComponent />
      <TemplateExpressions name={name} age={data.age} job={data.job} />
      {users.map((user) => (
        <Equipe key={user.id} name={user.name} age={user.age} job={user.job} facebook={user.facebook} google={user.google} youtube={user.youtube}/>
      ))}

      <Events/>
    </>
  )
}

export default App
