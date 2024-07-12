import React from 'react'
import gifTuto from '../../assets/NotaOFS.gif'

const Tutoriales = () => {
  return (
    <div className="flex flex-grow items-center justify-center px-10 mx-auto">
      <div className='max-w-4xl'>
        <div>Tutoriales</div>
        <img src={gifTuto} alt="Mi GIF" />
      </div>
    </div>
  )
}

export default Tutoriales