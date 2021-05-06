
import React from 'react'
import { Header } from './Components/Header/Header'
import "./App.css"
import Bottom from './Components/BottomHeader/Bottom'
import { Container } from '@material-ui/core'
import Tranding from './Pages/Tranding/Tranding'


export const App = () => {
  return (
    <>
        <Header />
          <div className="App">
              <Container >
                <Tranding />
              </Container>
          </div>
        <Bottom />          
      </>
    
  )
}
