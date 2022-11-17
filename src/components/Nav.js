import React from 'react'
import './Nav.css'
import { useEffect,useState } from 'react'

const Nav = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
      });
      // return ()=>{
      //   window.removeEventListener("scroll")
      // }
    
    }, [])
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo'
        src='https://seeklogo.com/vector-logo/318950/netflix-n'
        alt='netflixlogo'
        />
         <img 
        className='avatar'
        src='https://seeklogo.com/vector-logo/318950/netflix-n'
        alt='netflixavatar'
        />
    </div>
  )
}

export default Nav