import { navOption } from '@/app/utils'
import React from 'react'

function NavItem(){
    return(
        <div className='navItem'>
            <ul>
                {
                    navOption.map((item)=>(
                        <li className='navOpt' key={item.id}>
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default function Navber() {
  return (
    <div className='navbar-container'>
         <p className='head'>Food</p>
         <a className='toggle-bar'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
         </a>
         <NavItem /> 
    </div>
  );
}
