import React from 'react'
import City from '../assets/city.jpg'

const Imagem = () => {
  return (
    <div>
        <img src="/img1.jpg" alt="paisagem" />
        <img src={City} alt="cidade" />
    </div>
  )
}

export default Imagem