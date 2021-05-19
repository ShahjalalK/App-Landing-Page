import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer">
               <div className="container ">
                   <div className="row justify-content-center">
                       <div className="col-lg-3 col-md-6">
                           <div className="footer-col">
                               <h3>About us</h3>
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint nostrum minima facilis vero placeat amet, asperiores nihil natus atque.</p>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6">
                           <div className="footer-col">
                               <h3>Company</h3>
                                <div className="footer-link">
                                    <div className="link-item">
                                    <Link>Privacy Policy</Link></div>
                                    <div className="link-item"><Link>Terms & Condition</Link></div>
                                    <div className="link-item"><Link>Lates Blogs</Link></div>
                                    <div className="link-item"><Link>App Services</Link></div>
                                </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6">
                           <div className="footer-col">
                               <h3>Quick Links</h3>
                               <div className="footer-link">
                                <div className="link-item"><Link to="/">Home</Link></div>
                                <div className="link-item"><Link to="/feautures">Features</Link></div>
                                <div className="link-item"><Link to="/screenshots">Screenshots</Link></div>
                                <div className="link-item"><Link to="/testmonials">Testimonials</Link></div>
                                <div className="link-item"><Link to="/pricing">Pricing</Link></div>
                                <div className="link-item"><Link to="/contact">Contact</Link></div>
                               </div>                               
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6">
                           <div className="footer-col">
                               <h3>Socil Pages</h3>
                               <div className="footer-link">
                                <div className="link-item"><Link>Facebook</Link></div>
                                <div className="link-item"><Link>Twitter</Link></div>
                                <div className="link-item"><Link>Instagram</Link></div>
                                <div className="link-item"><Link>Linkedin</Link></div>
                               </div>
                           </div>
                       </div>
                   </div>                   
               </div>
               <div className="row justify-content-center">
                       <div className="col-lg-12">
                           <div className="copyright-text">
                               &copy; 2021 @ Shahjalal App
                           </div>
                       </div>
                   </div>
                
            </footer>   
        </>
    )
}

export default Footer
