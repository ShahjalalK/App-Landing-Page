
import React from 'react'
import { Header } from './Components/Header/Header'
import "./App.css"
import Bottom from './Components/BottomHeader/Bottom'
import { Container } from '@material-ui/core'


export const App = () => {
  return (
    <>
        <Header />
          <div className="App">
              <Container >
                Hello
              </Container>
          </div>
        <Bottom />
      </>
    
  )
}
