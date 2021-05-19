import React, { useEffect, useState } from 'react'
import './Testimonials.css'
import image1 from '../../Image/testimonial/5.jpg'
import image3 from '../../Image/testimonial/1.jpg'
import image2 from '../../Image/testimonial/2.jpg'
import image4 from '../../Image/testimonial/4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../../Components/Footer/Footer'
import { Spinner } from 'react-bootstrap'

export const Testimonials = () => {
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
                items: 3,
            },
        },
    }
    return (        
        <>
        {Looding ? (<div className="spinners"><Spinner animation="border" /></div>) : (
            <>
                <section className="testimonials section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2 className="animate__animated animate__bounce animate__fadeInDown">What our <span>client</span> say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <OwlCarousel 
                            className='owl-theme' 
                                loop={true}
                                dots
                                autoplay
                                items={3}
                                responsive={state.responsive} >                          
                            <div class='item'>
                                <div className="img-box">
                                    <img src={image1} alt="Image1" />
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                <h3>shahjalalk</h3>
                                <span>full stack developer</span>
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img-box">
                                    <img src={image2} alt="image2" />
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                <h3>Caroline W. Kelly</h3>
                                <span>Ui Designer</span>
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img-box">
                                    <img src={image3} alt="image3" />
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                <h3>Francisco L. Unger</h3>
                                <span>full stack developer</span>
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img-box">
                                    <img src={image4} alt="image4" />
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                <h3>Heather A. Cline</h3>
                                <span>full stack developer</span>
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <Footer />
            
            
            </>

        )}
            
        </>
    )
}
