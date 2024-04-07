import React from "react";

export default function About() {
  return (
    <>
      <section className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pl-lg-5 col-sm-12">
              <h2
                className="section-title"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "#ffffff" }} // Set text color to white
              >
                About Us
              </h2>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="400" style={{ color: "#ffffff" }}>
                Welcome to Xtrova, where celestial mysteries meet insightful guidance. Led by Vanya, our mission is to unlock the profound insights hidden within the stars. With a deep passion for astrology, Vanya offers personalized readings tailored to your journey, whether it's love, career, or personal growth. Embrace astrology's transformative power and embark on a journey of self-discovery with us.
              </p>
              <ul className="list-unstyled">
                <li
                  className="d-flex mb-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  style={{ color: "#ffffff" }} // Set text color to white
                >
                  <div className="pr-3 pr-lg-5">
                    <i className="fa fa-check text-secondary bg-white shadow icon-sm"></i>
                  </div>
                  <div>
                    <h5 style={{ color: "#ffffff" }}>Discovery Consultation</h5> {/* Set text color to white */}
                    <p style={{ color: "#ffffff" }}>
                      Start with a Discovery Consultation. Vanya learns about your cosmic blueprint, uncovering key aspects of your personality and desires.
                    </p>
                  </div>
                </li>
                <li className="d-flex" data-aos="fade-up" data-aos-delay="550" style={{ color: "#ffffff" }}>
                  <div className="pr-3 pr-lg-5">
                    <i className="fa fa-check text-secondary bg-white shadow icon-sm"></i>
                  </div>
                  <div>
                    <h5 style={{ color: "#ffffff" }}>Personalized Reading</h5> {/* Set text color to white */}
                    <p style={{ color: "#ffffff" }}>
                      Go deeper with a Personalized Reading. Vanya interprets cosmic symbols, offering insights tailored to your needs in love, career, or personal growth. Embark on your journey with Astrology Insights.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-5 col-sm-12">
              <img
                src="assets/images/about/about-final.png"
                className="img-fluid img-about"
                alt="dashboard"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
