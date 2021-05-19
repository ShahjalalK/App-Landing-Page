import React, { useEffect, useState } from 'react'
import './ToggleTheme/ToggleTheme.css'
import './App.css'
import './Bootstrap/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Feature } from './Pages/Feature/Feature'
import { ScreenShots } from './Pages/AppScreenShots/ScreenShots'
import { Testimonials } from './Pages/Testimonials/Testimonials'
import { Pricing } from './Pages/Pricing/Pricing'
import Contact from './Pages/Contact/Contact'

const App = () => { 
  const [Sun, setSun] = useState(false)
  const chageToggle = () => {
    setSun(!Sun)
  }
  return (
    <>
       <div className={Sun ? 'app dark' : 'app'} > 


          <BrowserRouter>
          <Navbar />          
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/feautures" component={Feature} />
              <Route path="/screenshots" component={ScreenShots} />
              <Route path="/testmonials" component={Testimonials} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/contact" component={Contact} />
          </Switch>    
          </BrowserRouter>


         ) 
       
          <div className="toogle-theme" onClick={chageToggle}>
                  {Sun ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </div>
        </div>
    </>
  )
}

export default App
