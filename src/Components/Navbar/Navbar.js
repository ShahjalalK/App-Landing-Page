import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom'
import '../../Bootstrap/bootstrap.min.css'



export const Navbar = () => {
    const [manuIcon, setManuIcon] = useState(false)
    const changeManu = () => {
        setManuIcon(!manuIcon)
    }
    const [Scrool, setScrool] = useState(false)
    const Scrooler = () => {
        if(window.scrollY >= 80){
            setScrool(true)
        }else{
            setScrool(false)
        }
    }
    window.addEventListener('scroll', Scrooler)
    

    return (
        <>
           <nav className= {Scrool ? 'navbar navbar-shrink ' : 'navbar'}>
                <div className="container">                
                        <Link to="/" className="navbar-brand">Shahjalal App</Link>
                        <div className="manuIcon" onClick={changeManu} >{manuIcon ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}</div>                                       
                    <ul className={manuIcon ? 'navbar-nav active' : 'navbar-nav'}>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/" exact className="nav-link activeStyle">Home</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/feautures" className="nav-link">Feautures</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/screenshots" className="nav-link">Screenshots</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/testmonials" className="nav-link">Testimonials</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/pricing" className="nav-link">Pricing</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        <li className="nav-item"><button className="btn btn-1 sign-up">Sign Up</button></li>
                    </ul>
                </div>
           </nav>
           {/* <Home />
           <Feature />
           <Funfacts />
           <ScreenShots /> */}
        </>
    )
}
