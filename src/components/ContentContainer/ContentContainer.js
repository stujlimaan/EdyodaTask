import React from 'react'
import MainLockup from './MainLockup'
import FormDa from './FormDa'
import './content.css'
function ContentContainer() {
  return (
    <div className='content-container'>
      <div className='container'>
      <MainLockup/>
      <FormDa/>
      </div>
      
    </div>
  )
}

export default ContentContainer
