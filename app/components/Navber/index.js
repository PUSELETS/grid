"use client"
import { useStateContext } from '@/app/context/StateContext' 
import { useState } from 'react'
import { navOption } from '@/app/utils'
import React from 'react'
import Link from 'next/link'


function NavItem(){
    const {showNav} = useStateContext();
    return(
            <ul className=''>
                {
                    navOption.map((item)=>(
                        <li className='navOpt' key={item.id}>
                            {item.label}
                        </li>
                    ))
                }
            </ul>
    )
}

export default function Navber() {

    const [menuNav, setMenuNav] = useState(false);

  return (
    <div className='navbar-container'>
         <div className='head'>Food</div>
         <div 
            onClick={()=> setMenuNav(!menuNav)}
            className='toggle-bar'

         >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
         </div>
         <ul className={menuNav? "open" : ""}>
            <li><Link className='a' href={'/'}>Fruits</Link></li>
            <li><Link className='a' href={'/'}>Vagetable</Link></li>
            <li><Link className='a' href={'/'}>Nuddles</Link></li>
            <li><Link className='a' href={'/'}>Bugger</Link></li>
            <li><Link className='a' href={'/'}>Beef</Link></li>
         </ul>
    </div>
    
  );
}
