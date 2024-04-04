import React from "react";

function HomeBanner() {
  return (
    <>

      <section style={{ background: "#040404" }} className="hero-area hero-area-lg position-relative" id="home">
        <div className="container-fluid hero-container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
              <h2 className="text-light position-relative">
                Your <span className="B">One Stop</span> Loan
              </h2>
              <p className="text-light mb-4">
                Simple & reliable finance. <br></br>
                Leave your loan hassles to us. <br></br>
                Your journey to a wealthy financial life is a few steps away.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item mx-1 my-2">
                  <button
                    onClick={() => {
                      var scrollDiv = document.getElementById("loan").offsetTop;
                      window.scrollTo({
                        top: scrollDiv - 50,
                        behavior: "smooth",
                      });
                    }}
                    className="btn btn-light btn-outline-light"
                  >
                    Apply Loan
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 banner-img">
              <img
                style={{ width: "100%", maxHeight: "350px" }}
                src="assets/images/banner/banner.webp"
                className="img-fluid rounded-lg"
                alt="app-interface"
                data-aos="fade-left"
                data-aos-delay="1000"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default HomeBanner;
