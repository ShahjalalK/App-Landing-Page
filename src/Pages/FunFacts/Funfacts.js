import React from 'react'
import './Faunfacts.css'
import image from '../../Image/app-screenshots/1.png'
import image2 from '../../Image/app-screenshots/2.png'
import image3 from '../../Image/app-screenshots/3.png'

export const Funfacts = () => {
    return (
        <>
            <section className="fun-facts section-padding">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-5 ">
                            <div className="fan-facts-img">
                                <img src={image2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="section-title">
                                <h2 className="animate__animated animate__bounce animate__fadeInDown">fun <span>facts</span></h2>
                            </div>
                            <div className="fan-facts-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi.</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="fan-facts-item style-1">
                                            <h3>4000</h3>
                                            <span>Downloads</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="fan-facts-item style-2">
                                            <h3>200</h3>
                                            <span>likes</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="fan-facts-item style-3">
                                            <h3>500</h3>
                                            <span>5 star rating</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="fan-facts-item style-4">
                                            <h3>150</h3>
                                            <span>Awards</span>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
