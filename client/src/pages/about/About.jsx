import React from 'react'
import './About.scss'
const About = () => {
  return  (
    <div className='about'>
      <section className="front-image About">
        <h2>#Know Us</h2>
        <p>You can ask case studio about all info</p>
      </section>
      <section className="section-p1" id="about-us">
        <div className="us-box">
          <div className="us-img">
            <img src="../../../public/imgs/a6.jpg" alt="" />
          </div>
          <div className="us-info">
            <h1>Who We Are?</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
              consequatur explicabo saepe labore quo iure repudiandae ab quidem
              vero sunt.
            </p>
            <abbr title="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </abbr>
            <br /><br />
            <div className="marquee-wrapper">
              Hurry now and discover all news about our products
            </div>
          </div>
        </div>
      </section>
      <section className="section-p1" id="video-section">
        <h1>Download Our <a href="">App</a></h1>
        <video
          loop
          autoPlay
          controls
          src="../../../public/imgs/1.mp4"
        ></video>
      </section>

      <section id="features" className="section-p1">
        <div className="card">
          <img src="../../../public/imgs/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="card">
          <img src="../../../public/imgs/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="card">
          <img src="../../../public/imgs/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="card">
          <img src="../../../public/imgs/f4.png" alt="" />
          <h6>Promotion</h6>
        </div>
        <div className="card">
          <img src="../../../public/imgs/f5.png" alt="" />
          <h6>Happy sell</h6>
        </div>
        <div className="card">
          <img src="../../../public/imgs/f6.png" alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="text">
          <h3>Sign Up For Newsletters</h3>
          <h6>
            Get E-mail updates about our latest shop and
            <span> special offers.</span>
          </h6>
        </div>
        <div className="sign-up">
          <input placeholder="Your email address" type="text" />
          <button>Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default About