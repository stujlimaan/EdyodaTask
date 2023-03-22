import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from "react-icons/fa"

function RightNavbar() {
  return (
    <div className='right'>
      <ul>
        <li style={{marginTop:14}}><FaSearch/></li>
        <li><Link href='/' >Log in</Link></li>
        <li><button style={{backgroundColor:"blueviolet",color:"white",textTransform:"uppercase",borderRadius:50,padding:"10px 20px 10px 20px"}}>Join noww</button></li>
      </ul>
    </div>
  )
}

export default RightNavbar
