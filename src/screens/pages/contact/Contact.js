import React from "react";

export default function Contact() {
  return (
    <>
      <section
        style={{ paddingTop: 0 }}
        className="position-relative section mt-5"
        id="contact"
      >
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center">
              <h2
                className="section-title aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ color: "#ffffff" }} // Set text color to white
              >
                Contact Us
              </h2>
            </div>
            <div
              className="col-lg-6 col-sm-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="card border-0 shadow rounded-xs pt-5" style={{ backgroundColor: "#021f43" }}> {/* Set card background color */}
                <div className="card-body">
                  <i className="fa fa-envelope-o icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3"></i> {/* Use blue icon */}
                  <h4 className="mt-4 mb-3" style={{ color: "#ffffff" }}>Email</h4> {/* Set text color to white */}
                  <p style={{ color: "#f0f0f0" }}> {/* Set text color to lighter shade */}
                    {" "}
                    <a href="mailto:support@xtrova.com" style={{ color: "#f0f0f0" }}> {/* Set link color to lighter shade */}
                      vanya.ojha@yahoo.com
                    </a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="card border-0 shadow rounded-xs pt-5" style={{ backgroundColor: "#021f43" }}> {/* Set card background color */}
                <div className="card-body">
                  <i className="fa fa-phone icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i> {/* Use purple icon */}
                  <h4 className="mt-4 mb-3" style={{ color: "#ffffff" }}>Phone</h4> {/* Set text color to white */}
                  <p style={{ color: "#f0f0f0" }}> {/* Set text color to lighter shade */}
                    <a href="tel:0120-4418877" style={{ color: "#f0f0f0" }}>0120-4418877</a>{" "} {/* Set link color to lighter shade */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/dot/dot-1.png"
          className="img-fluid feature-bg-shape-1"
          alt="background-dots"
        />
      </section>
    </>
  );
}
