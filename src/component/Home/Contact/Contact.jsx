import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css';


import Fade from 'react-reveal/Fade';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();

    }
    function booksession() {
        window.open("https://forms.gle/BUWwmfkBYJPxjqvi8");
    }
    return (
        <section id="contact">
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        <Fade duration={2000} left>
                            <form onSubmit={handleSubmit} className="contactForm">
                                <h4 className="miniTitle">Talk to Our Mentor</h4>
                                <h5 className="sectionTitle">Are you Confused ?</h5>
                                <Row>
                                    {/* <Col md={12} lg={6}>
                                        <input placeholder="Your Name" type="text" required/>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Email" type="email" required/>
                                    </Col>
                                    <Col md={12}>
                                        <input placeholder="Subject" type="text" required/>
                                    </Col>
                                    <Col md={12}>
                                        <textarea placeholder="Your Message..." required></textarea>
                                    </Col> */}
                                </Row>
                                <button className="branBtn" type="submit" onClick={booksession}>Book Session Now</button>
                            </form>
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={"good_teacher.jpg"} alt="" className="img-fluid" height={400} width={400}/>
                        </Fade>
                    </Col>
                </Row>
            </Col>
        </section>
    );
};

export default Contact;