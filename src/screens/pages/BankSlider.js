import React from 'react'
import { bankLogo } from "../../layouts/Data";
import Slider from "react-slick";


function BankSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section
        style={{ paddingTop: 50, paddingBottom: 50 }}
        className="position-relative section"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-slider">
                <Slider {...settings}>
                  {bankLogo.map((bankLogo) => {
                    return (
                      <div className="px-3 mb-5" key={bankLogo.id}>
                        <div className="card border-0 shadow rounded-xs">
                          <img
                            src={bankLogo.img}
                            className="img-fluid card-img-top"
                            alt="post-thumb"
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BankSlider