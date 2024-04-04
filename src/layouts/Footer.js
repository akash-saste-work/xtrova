import React from "react";

export default function Footer({ style }) {
  return (
    <>
      <footer style={style} className="bg-secondary">
        {/* <section className="section border-bottom border-color">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 mb-4 mb-md-0">
            <img src="assets/images/logo/fin-tran.png" className="mb-4" alt="agico"/>
            <p className="text-light mb-4">Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut
              labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamaboris nisi ut aliquip.exea
              commodo consequat. Duis aute irure dolor in reprehenderit.</p>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><a href="http://facebook.com/themefisher" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="http://twitter.com/themefisher" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCx9qVW8VF0LmTi4OF2F8YdA/featured" target="_blank"><i className="fa fa-youtube"></i></a></li>
              <li className="list-inline-item"><a href="http://github.com/themefisher" target="_blank"><i className="fa fa-github"></i></a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="text-white mb-4">Services</h4>
            <ul className="list-styled list-hover-underline">
              <li className="mb-3 text-light"><a href="about.html" className="text-light">Company History</a></li>
              <li className="mb-3 text-light"><a href="about.html" className="text-light">About us</a></li>
              <li className="mb-3 text-light"><a href="contact.html" className="text-light">Contact us</a></li>
              <li className="mb-3 text-light"><a href="services.html" className="text-light">Services</a></li>
              <li className="mb-3 text-light"><a href="#" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h4 className="text-white mb-4">Contact Info</h4>
            <p className="text-light">9567 Turner Trace Apt. 466 North Willie, BC C3G8A4</p>
            <ul className="list-unstyled">
              <li className="mb-3"><a className="text-light" href="tel:+211234565523">+21 123 456 5523</a></li>
              <li className="mb-3"><a className="text-light" href="mailto:info@agico.com">info@agico.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
   */}
        <section className="pt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="mb-0 text-light">
                  Copyright &copy;
                  <script>
                    var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script>
                  All Rights Reserve <a href="#">Finedict.com</a>
                </p>
              </div>
              <div className="col-md-6 text-md-right text-center">
                <ul className="list-inline">
                  {/* <li className="list-inline-item"><a href="#" className="text-light">Terms of Service</a></li>
              <li className="list-inline-item">| &nbsp;<a href="#" className="text-light">Privacy Policy</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
