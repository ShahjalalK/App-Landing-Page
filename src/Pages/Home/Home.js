import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import image from '../../Image/app-screenshots/5.png'
import { Testimonials } from '../Testimonials/Testimonials'



export const Home = () => {
    const[PlayerOpen, setPlayerOpen] = useState(false)
    const playNow = () => {
        setPlayerOpen(!PlayerOpen)
    }
    return (
        <>
            <section className="home d-flex align-items-center">
                <div className="effect-wrap">
                    <i className="fas fa-plus effect effect-1"></i>
                    <i className="fas fa-plus effect effect-2"></i>
                    <i className="fas fa-circle-notch effect effect-3"></i>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-7 ">
                            <div className="home-text">
                                <h1>Best Mobile App Template for your Bussness</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, deserunt nulla eligendi aliquam hic repellendus aliquid nostrum et tenetur.</p>
                                <div className="home-btn">
                                    <Link className="btn btn-1">download app</Link>
                                    <button type="button" className="btn btn-1 video-play-btn" onClick={playNow}>
                                        <i class="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 text-center">
                            <div className="home-img">
                                <div className="circle">
                                </div>
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={PlayerOpen ? 'video-popup open':'video-popup'}>
                <div className="video-popup-inner">
                    <i className="fas fa-times video-player-close" onClick={playNow}></i>
                    <div className="iframe-box">
                        <iframe id="player-1" src="https://www.youtube.com/embed/tEsQnmdhZrw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

