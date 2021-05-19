import React, { useEffect, useState } from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom'
import team1 from '../../Image/team/7.jpg'
import team2 from '../../Image/team/2.jpg'
import team3 from '../../Image/team/3.jpg'
import team4 from '../../Image/team/4.jpg'
import team5 from '../../Image/team/5.jpg'
import { Accordion, Card, Spinner } from 'react-bootstrap'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../../Components/Footer/Footer'
import According from './According'


export const Pricing = () => {
  const [Looding, setLooding] = useState(false)
    useEffect(() => {
        setLooding(true);
        setTimeout(() => {
            setLooding(false)
        }, 500)
    }, [])

 const[drop, setDrop] = useState(false)
 const[drop2, setDrop2] = useState(false)
 const[drop3, setDrop3] = useState(false) 
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
              <section className="pricing section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2 className="animate__animated animate__bounce animate__fadeInDown">Pricing <span>plan</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                <div className="pricing-header">
                  <h3>basic</h3>
                </div>
                <div className="pricing-price">
                  <div className="currency">$</div>
                  <span className="price">99</span>
                  <span className="period">/monthly</span>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li><i className="fas fa-check"></i> 5 GB Bandwidth</li>
                    <li><i className="fas fa-check"></i> Free Update</li>
                    <li><i className="fas fa-check"></i> High Regulation printing</li>
                    <li><i className="fas fa-check"></i> Branding</li>
                    <li><i className="fas fa-check"></i> Anather Great Feature</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="/" className="btn btn-2">Get started</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                <div className="pricing-header">
                  <h3>premium</h3>
                </div>
                <div className="pricing-price">
                  <div className="currency">$</div>
                  <span className="price">149</span>
                  <span className="period">/monthly</span>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li><i className="fas fa-check"></i> 5 GB Bandwidth</li>
                    <li><i className="fas fa-check"></i> Free Update</li>
                    <li><i className="fas fa-check"></i> High Regulation printing</li>
                    <li><i className="fas fa-check"></i> Branding</li>
                    <li><i className="fas fa-check"></i> Anather Great Feature</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="/" className="btn btn-2">Get started</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                <div className="pricing-header">
                  <h3>ultimate</h3>
                </div>
                <div className="pricing-price">
                  <div className="currency">$</div>
                  <span className="price">199</span>
                  <span className="period">/monthly</span>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li><i className="fas fa-check"></i> 5 GB Bandwidth</li>
                    <li><i className="fas fa-check"></i> Free Update</li>
                    <li><i className="fas fa-check"></i> High Regulation printing</li>
                    <li><i className="fas fa-check"></i> Branding</li>
                    <li><i className="fas fa-check"></i> Anather Great Feature</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="/" className="btn btn-2">Get started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="team section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>Team <span>Member</span>  </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <OwlCarousel className='owl-theme' 
                loop={true}
                dots={true}
                autoplay
                margin={10}
                items={5}
                responsive={state.responsive}
            >
              <div class='item'>
                <img src={team1} alt="team1" />
                <h3>Shahjalalk</h3>
                <span>full stack developer</span>
              </div>
              <div class='item'>
                <img src={team2} alt="team2" />
                <h3>Lucy L. Gates</h3>
                <span>Ui Designer</span>
              </div>
              <div class='item'>
                <img src={team3} alt="team3" />
                <h3>Robert C. Bush</h3>
                <span>full stack developer</span>
              </div>
              <div class='item'>
                <img src={team4} alt="team4" />
                <h3>Don V. Hernandez</h3>
                <span>App Developer</span>
              </div>
              <div class='item'>
                <img src={team5} alt="team5" />
                <h3>Mary J. Smith</h3>
                <span>App Developer</span>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* Faq Section */}
      <section className="faq section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>frequently <span>asked</span> queries</h2>
              </div>
            </div>
          </div>         
          <div className="row justify-content-center">
            <div className="col-lg-10 mt-5">
                <According />
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
