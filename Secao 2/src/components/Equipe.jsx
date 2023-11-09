import React from 'react'
import Sobre from './Sobre'
import Social from './Social'

const Equipe = ({name, age, job, facebook, google, youtube}) => {
  return (
    <div>
        <Sobre name={name} age={age} job={job}/>
        <Social facebook={facebook} google={google} youtube={youtube}/>
    </div>
  )
}

export default Equipe