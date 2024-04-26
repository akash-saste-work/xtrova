import React from "react";
import rotating from './../../assets/video/rotating.mp4';
import Stars from "../../components/Stars";
import './home-baner.css';

function HomeBanner() {
  return (
    <section style={{ background: "#040404" }} className="hero-area hero-area-lg position-relative stary-night" id="home">
      <Stars />
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={rotating}
          className="img-fluid rounded-lg earth-video"
          data-aos="fade-left"
          data-aos-delay="1000"
        />
        <div className="opacity-layer"></div>
        <div className="text-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-left text-lg-left">
                <h2 className="text-light position-relative">
                  Welcome to Celestial Wisdom!
                </h2>
                <div className="text-light">
                  <p className="white-text-with-shadow">
                    Embrace the stars for guidance and abundance. Unlock cosmic secrets for a fulfilling life. Discover your destiny through celestial guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeBanner;
