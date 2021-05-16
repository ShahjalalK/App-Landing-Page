import React from 'react'
import './Bootstrap/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Feature } from './Pages/Feature/Feature'
import { ScreenShots } from './Pages/AppScreenShots/ScreenShots'
import { Testimonials } from './Pages/Testimonials/Testimonials'
import { Pricing } from './Pages/Pricing/Pricing'
const App = () => {
  return (
    <>
       <BrowserRouter>
          <Navbar /> 
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/feautures" component={Feature} />
              <Route path="/screenshots" component={ScreenShots} />
              <Route path="/testmonials" component={Testimonials} />
              <Route path="/pricing" component={Pricing} />
          </Switch>      
       </BrowserRouter>
    </>
  )
}

export default App
