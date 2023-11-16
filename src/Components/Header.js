import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { PiHandWavingFill } from 'react-icons/pi'



function Header() {
  return (
    <header className='header'>
      <h1>Mark Bz</h1>
      <PiHandWavingFill className='Hand' />
      <div className='header-right'>
        <BsSearch className='Srch1' />
        <p>Search</p>
      </div>

    </header>
  )
}

export default Header


{/* <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />

      </div> */}