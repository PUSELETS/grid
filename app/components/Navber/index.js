"use client"
import { useStateContext } from '@/app/context/StateContext' 
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import { navOption } from '@/app/utils'
import React from 'react'
import Link from 'next/link'
import { MotionConfig, motion } from 'framer-motion'


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
    const [ref , {height}] = useMeasure()

  return (
    <MotionConfig transition={{duration: 0.2}}>
        <div className='navbar-container'>
         <h3 className='head'>Food</h3>
         <section 
            onClick={()=> {
                setMenuNav(!menuNav);
            }}
            className='toggle-bar'

         >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
         </section>
          <motion.div
          animate={{height}}
          className='motion'
          >
          <ul
          ref={ref}
          className={menuNav? "open" : ""}
          >
            <li><Link className='a' href={'/'}>Fruits</Link></li>
            <li><Link className='a' href={'/'}>Vagetable</Link></li>
            <li><Link className='a' href={'/'}>Nuddles</Link></li>
            <li><Link className='a' href={'/'}>Bugger</Link></li>
            <li><Link className='a' href={'/'}>Beef</Link></li>
          </ul>
          </motion.div>
        </div>
    </MotionConfig>
  );
}
