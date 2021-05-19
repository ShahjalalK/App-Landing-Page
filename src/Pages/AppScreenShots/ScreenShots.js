import React from 'react'
import './ScreenShots.css'
import image1 from '../../Image/app-screenshots/1.png'
import image2 from '../../Image/app-screenshots/2.png'
import image3 from '../../Image/app-screenshots/3.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'


export const ScreenShots = () => {
    const [Looding, setLooding] = useState(false)
    useEffect(() => {
        setLooding(true);
        setTimeout(() => {
            setLooding(false)
        }, 500)
    }, [])

    const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }

    return (        
        <>  
            {Looding ? (<div className="spinners"><Spinner animation="border" /></div>) : (
                <>
                <section className="app-screen section-padding">
                <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8">
                          <div className="section-title">
                              <h2 className="animate__animated animate__bounce animate__fadeInDown">app <span>screenshots</span></h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <OwlCarousel 
                          className='screenshots-carosel' 
                          loop={true}
                          dots={true}
                          autoplay
                          margin={10}
                          items={4}
                          responsive={state.responsive} >
                          <div className="item">
                              <img src={image1} alt="" />
                          </div>
                          <div className="item">
                              <img src={image2} alt="" />
                          </div>
                          <div className="tem">
                              <img src={image3} alt="" />
                          </div>
                      </OwlCarousel>                    
                  </div>
                </div>
              </section> 
              <section className="app-download section-padding">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="section-title">
                                  <h2>Download <span>app</span></h2>
                              </div>
  
                          </div>
                      </div>
                      <div className="row justify-content-center">
                          <div className="col-lg-4 col-md-6">
                              <div className="app-download-item">
                                  <i className="fab fa-google-play"></i>
                                  <h3>Google Play</h3>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                  <Link to="/" className="btn btn-2">Download Now</Link>
                              </div>                            
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="app-download-item">
                                      <i className="fab fa-apple"></i>
                                      <h3>Apple Store</h3>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                      <Link to="/" className="btn btn-2">Download Now</Link>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="app-download-item">
                                      <i className="fab fa-windows"></i>
                                      <h3>Microsoft Store</h3>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                      <Link to="/" className="btn btn-2">Download Now</Link>
                                  </div>
                              </div>
                      </div>
                  </div>
              </section>
              <section className="how-it-works section-padding">
                 <div className="container">
                     <div className="row justify-content-center">
                         <div className="col-lg-8">
                              <div className="section-title">
                                  <h2>how it <span>works</span></h2>
                              </div>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-lg-3 col-md-6">
                             <div className="how-it-works-item line-right">
                                 <div className="step">1</div>
                                 <h3>download</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6">
                             <div className="how-it-works-item line-right">
                                 <div className="step">2</div>
                                 <h3>create portfolio</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6">
                             <div className="how-it-works-item line-right">
                                 <div className="step">3</div>
                                 <h3>search product</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6">
                             <div className="how-it-works-item">
                                 <div className="step">4</div>
                                 <h3>order</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                             </div>
                         </div>
                     </div>
                 </div>
              </section>
              <Footer />
                
                </>
            )}
                  
          
       
        </>
    )
}
