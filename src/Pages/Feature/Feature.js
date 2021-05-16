import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Feature.css'
import { Funfacts } from '../FunFacts/Funfacts';

export const Feature = () => {

    return (
        <>
            <section className="features section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>Awesome <span>Features</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <OwlCarousel className='owl-theme features-theme' items={3} loop dots autoplay margin={10} >
                            <div class='item '>
                                <div className="icon">
                                    <i className="fas fa-code"> </i>
                                </div>
                                <h3>clean Code</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi aliquam</p>
                            </div>
                            <div class="item ">
                                <div className="icon">
                                    <i className="fas fa-edit"> </i>
                                </div>
                                <h3>Auto Install System</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi aliquam</p>
                            </div>
                            <div class="item ">
                                <div className="icon">
                                    <i className="fas fa-paint-brush"> </i>
                                </div>
                                <h3>Pixel Parfect Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi aliquam</p>
                            </div>
                            <div class="item ">
                                <div className="icon">
                                    <i className="fas fa-check"> </i>
                                </div>
                                <h3>First Load App</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi aliquam</p>
                            </div>                             
                        </OwlCarousel>;
                    </div>
                </div>
            </section>
            <Funfacts />
        </>
    )
}




                         
                            
                            






