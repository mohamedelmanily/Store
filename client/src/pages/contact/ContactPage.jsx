import React from "react";
import "./ContactPage.scss";

import img1 from '../../../public/imgs/1.png'
import img2 from '../../../public/imgs/2.png'
import img3 from '../../../public/imgs/3.png'
import { MailOutlined, MapOutlined, Phone, PunchClock } from "@mui/icons-material";
const ContactPage = () => {
  return (
    <div className="contactPage">
      <section className="front-image About">
        <h2>#let's_talk</h2>
        <p>Leave a message, we love to hear from you</p>
      </section>

      <section className="section-p1" id="map-details">
        <div className="details">
          <p>Get in touch</p>
          <h2>Visit one of our agency locations or contact us today</h2>
          <div className="contact-info">
            <div className="info-item">
              <MapOutlined/>
              <p>56 Glassdford Street Manhattan G1 New York</p>
            </div>
            <div className="info-item">
              <MailOutlined/>
              <p>mohamedelmanily@yahoo.com</p>
            </div>
            <div className="info-item">
              <Phone/>
              <p>01119640792</p>
            </div>
            <div className="info-item">
              <PunchClock/>
              <p>Sun - Thu: 9am - 5pm</p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.762732365051!2d31.38108661003152!3d30.357775884144964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458090d0501bfb3%3A0x6dc36ceddb15a916!2z2YXYtNiq2YjZhCDYp9mE2LPZiNmC2Iwg2YXYsdmD2LIg2YXYtNiq2YjZhCDYp9mE2LPZiNmC2Iwg2YXYrdin2YHYuNipINin2YTYtNix2YLZitip!5e0!3m2!1sar!2seg!4v1711715036664!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form">
        <form action="">
          <p>Leave a Message</p>
          <h3>We'd Love to Hear from You</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-Mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="persons">
          {[img1,img2,img3].map((person) => (
            <div key={person} className="person">
              <img src={person} alt={`person-${person}`} />
              <div className="info">
                <h6>John Cena</h6>
                <p>Senior Data Scientist</p>
                <p>Phone: 01119640792</p>
                <p>E-Mail: mohamedelmanily@yahoo.com</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="text">
          <h3>Sign Up For Newsletters</h3>
          <h6>
            Get email updates about our latest shop and <span>special offers.</span>
          </h6>
        </div>
        <div className="sign-up">
          <input placeholder="Your email address" type="text" />
          <button>Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
