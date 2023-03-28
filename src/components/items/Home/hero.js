import React from "react";
import "./../../../assets/css/home.css";
import "./../../../assets/css/queries.css";

import Customer1 from "./../../../assets/img/customer/customer-1.jpg";
import Customer2 from "./../../../assets/img/customer/customer-2.jpg";
import Customer3 from "./../../../assets/img/customer/customer-3.jpg";
import Customer4 from "./../../../assets/img/customer/customer-4.jpg";
import Customer5 from "./../../../assets/img/customer/customer-5.jpg";

import heroBanner from "./../../../assets/img/Hero.webp";
import video from "../../../assets/video/video.mp4";

const hero = () => {
  return (
    <div>
      <section className="banner">
        <video autoPlay muted loop className="banner-video" src={video}></video>
        <div className="banner-text heading-primary">
          Start Eating Well Today, Try <span>Our Revolutionary Noodle</span>
        </div>
      </section>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy noodle delivered to your door, every single day
            </h1>
            <p className="hero-description">
              Say goodbye to the hassle of cooking. With Fivenoodle, you can
              choose from a wide range of delicious and healthy noodles, with
              only the most high-quality ingredients. Our team also makes sure
              your food won't go to waste by cooking it right in front of you.
              So, what are you waiting for?
            </p>
            <a href="#" className="btn btn--full margin-right-sm">
              Try Our Product
            </a>
            <a href="#" className="btn btn--outline">
              Learn More &darr;{" "}
            </a>

            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src={Customer1} alt="Customer 1" />
                <img src={Customer2} alt="Customer 2" />
                <img src={Customer3} alt="Customer 3" />
                <img src={Customer4} alt="Customer 4" />
                <img src={Customer5} alt="Customer 5" />
              </div>
              <p className="delivered-text">
                Over <span>200.000+</span> meal has been delivered
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              className="hero-img"
              src={heroBanner}
              alt="A plate of noodle, a plate of spaghetti, someone pick with chopstick on bowl of noodle"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
