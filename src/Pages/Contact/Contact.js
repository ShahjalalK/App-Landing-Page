import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer'
import './Contact.css'

const Contact = () => {
    const [Looding, setLooding] = useState(false)
    useEffect(() => {
        setLooding(true);
        setTimeout(() => {
            setLooding(false)
        }, 500)
    }, [])
    return (
        <>
        {Looding ? (<div className="spinners"><Spinner animation="border" /></div>) : (
            <>
           <section className="contact section-padding">
               <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-lg-8">
                           <div className="section-title">
                               <h2 className="animate__animated animate__bounce animate__fadeInDown">Get in <span>Touch</span></h2>
                           </div>
                       </div>
                   </div>
                   <div className="row jutify-content-center">
                       <div className="col-lg-4 col-md-5">
                            <div className="contact-info">
                                <h3>For Any Queryes and Support</h3>
                                <div className="contact-info-item">
                                    <i className="fas fa-location-arrow"></i>
                                    <h4>Company Loaction</h4>
                                    <p>199 xyz fiverr Bangladesh</p>
                                </div>
                                <div className="contact-info-item">
                                    <i className="fas fa-envelope"></i>
                                    <h4>Write to us at</h4>
                                    <p>info@gmail.com</p>
                                </div>
                                <div className="contact-info-item">
                                    <i className="fas fa-phone"></i>
                                    <h4>Call us on</h4>
                                    <p>123456-789**</p>
                                </div>
                            </div>
                       </div>
                       <div className="col-lg-8 col-lg-7">
                            <div className="contact-form">
                                <form >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" placeholder="Your Email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Phone" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Subject" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea placeholder="Massage" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                           <button type="button" className="btn btn-2">Send Massage</button>
                                        </div>
                                    </div>
                                </form>
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

export default Contact
