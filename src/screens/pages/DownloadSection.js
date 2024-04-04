import React from "react";

function DownloadSection() {
  return (
    <>
      {" "}
      <section className="bg-triangles bg-gradient-primary overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left d-flex align-items-center">
              <div className="">
                <h2 className="section-title text-white pt-5" data-aos="fade-up">
                  Download FinEdict App Now
                </h2>
                <p
                  className="text-white mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  For daily updates and easy access download our app.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item mb-3 mb-lg-0">
                    <a
                      className="btn btn-white download_btn"
                      href="assets/apk/app-release.apk"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                      target="_blank"
                    >
                      {/* <img src="assets/images/icon/001-google-play.png" className="img-fluid mr-2" alt=""/> */}
                      Download Now
                    </a>
                  </li>
                  {/* <li className="list-inline-item">
          <a className="btn btn-outline-white" href="#" data-aos="zoom-in" data-aos-delay="500"><i className="fa fa-apple mr-2"></i> app store</a>
        </li> */}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 align-self-end"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <img
                src="assets/images/download-mobile-img.png"
                className="img-fluid w-100 mt-5"
                alt="mobile-screen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DownloadSection;
