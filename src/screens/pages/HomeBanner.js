import React from "react";
import rotatingEarth from './../../assets/video/rotating-earth.mp4';
import Stars from "../../components/Stars";

function HomeBanner() {
  return (
    <>
      <section style={{ background: "#040404" }} className="hero-area hero-area-lg position-relative stary-night" id="home">
        <Stars/>
        <div className="container-fluid hero-container-fluid">
          <div className="container"> {/* Wrap the content inside another container */}
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                <h2 className="text-light position-relative">
                  Welcome to <span className="B">Celestial Wisdom</span>!
                </h2>
                <div className="text-light mb-4">
                  <p>
                    Embrace the stars for guidance and abundance. Unlock cosmic secrets for a fulfilling life. Discover your destiny through celestial guidance.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 banner-img d-flex justify-content-center align-items-center">
                <video
                  style={{ width: "100%", maxHeight: "350px", objectFit: "cover", borderRadius: "15px", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)", margin: "0 auto" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={rotatingEarth}
                  className="img-fluid rounded-lg"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
