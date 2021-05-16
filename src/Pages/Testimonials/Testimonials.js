import React from 'react'
import './Testimonials.css'
import image1 from '../../Image/testimonial/5.jpg'
import image3 from '../../Image/testimonial/1.jpg'
import image2 from '../../Image/testimonial/2.jpg'
import image4 from '../../Image/testimonial/4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Testimonials = () => {
    return (
        <>
            <section className="testimonials section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>What our <span>client</span> say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <OwlCarousel className='owl-theme' loop margin={1} dots autoplay >
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
        </>
    )
}
