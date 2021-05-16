import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom'
import '../../Bootstrap/bootstrap.min.css'
import { Home } from '../../Pages/Home/Home'
import { Feature } from '../../Pages/Feature/Feature'
import { Funfacts } from '../../Pages/FunFacts/Funfacts'
import { ScreenShots } from '../../Pages/AppScreenShots/ScreenShots'



export const Navbar = () => {
    const [scrool, setScrool] = useState(false)
    const [manuIcon, setManuIcon] = useState(false)
    const changeManu = () => {
        setManuIcon(!manuIcon)
    }
    const chaneScrool = ()=> {
        if(window.scrollY >= 10){
            setScrool(true)
        }else{
            setScrool(false)
        }          
    } 
  
    window.addEventListener("scroll", chaneScrool);

    return (
        <>
           <nav className= {scrool ? 'navbar navbar-shrink fixed-top' : 'navbar  fixed-top' }>
                <div className="container">                
                        <Link to="/" className="navbar-brand">Shahjalal App</Link>

                        <div className="manuIcon" onClick={changeManu} >{manuIcon ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}</div>                                       
                    <ul className={manuIcon ? 'navbar-nav active' : 'navbar-nav'}>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/" exact className="nav-link active">Home</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/feautures" className="nav-link">Feautures</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/screenshots" className="nav-link">Screenshots</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/testmonials" className="nav-link">Testimonials</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/pricing" className="nav-link">Pricing</NavLink></li>
                        <li className="nav-item" onClick={changeManu}><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
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
