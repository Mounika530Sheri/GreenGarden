import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import InputForm from './InputForm'
import {NavLink} from "react-router-dom"

export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false)
    
    let token=localStorage.getItem("token")
    const [isLogin,setLogin]=useState(token?false:true)
   

    useEffect(()=>{
        setLogin(token?false:true)
    },[token])

    const checkLogin=()=>{
        if(token){
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            setLogin(true)
        }else{
        setIsOpen(true)
        }
    }

    
    return (
        <>
        <header>
            <h2>𝔾𝕣𝕖𝕖𝕟𝔾𝕒𝕣𝕕𝕖𝕟 ℂ𝕠𝕟𝕧𝕖𝕟𝕥𝕚𝕠𝕟</h2>
            <ul>
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink onClick={()=>isLogin && setIsOpen(true)} to={!isLogin?"/facilities":"/"}>Facilities</NavLink></li>
               <li><NavLink onClick={()=>isLogin && setIsOpen(true)} to={!isLogin?"/avalibility":"/"}>Availability</NavLink></li>
               <li><NavLink onClick={()=>isLogin && setIsOpen(true)} to={!isLogin?"/packages":"/"}>Packages</NavLink></li>
               <li><NavLink onClick={()=>isLogin && setIsOpen(true)} to={!isLogin?"/location":"/"}>Location</NavLink></li>
               <li><NavLink onClick={()=>isLogin && setIsOpen(true)} to={!isLogin?"/contact":"/"}>Contact</NavLink></li>
               <li onClick={checkLogin}>{isLogin?"login":"logout"}</li>
            </ul>
        </header>
        {isOpen && (<Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>)}
        
        </>

    )
}
