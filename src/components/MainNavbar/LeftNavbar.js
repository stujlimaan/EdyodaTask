import React from 'react'

function LeftNavbar() {
  return (
    <div className='left'>
     <ul className='ul'>
        <li style={{color:"#0096FF",fontSize:"30px"}}>Edyoda</li>
        <li>
          <select className='abc'>
            <option>couses</option>
          </select>
        </li>
        <li>
        <select className='abc'>
            <option>products</option>
          </select>
        </li>
     </ul>
    </div>
  )
}

export default LeftNavbar
