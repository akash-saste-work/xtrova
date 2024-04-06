import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ZodiacSign from "./ZodiacSign";
import PersonalLoan from "./PersonalLoan";
import SecuredBusinessLoan from "./SecuredBusinessLoan";
import ProfessionalLoan from "./ProfessionalLoan";
import SecuredOverdraftLoan from "./SecuredOverdraftLoan";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleSubmit = (values, setSubmitting) => {
    createPost(values);
  };

  const createPost = (values) => {
    axios
      .post(`https://finedict.com:3003/LoanEnquiryService`, values)
      .then((response) => {
        if (response.status == 200) {
          Swal.fire({
            title: "Success",
            text: "Thank you for contacting us. we will reach out soon.",
            icon: "success",
            confirmButtonText: "ok",
          });
          setTimeout(() => window.location.reload(), 3000);
        } else {
          Swal.fire({
            title: "Error",
            text: "Could not process your request now. Try again later.",
            icon: "error",
            confirmButtonText: "ok",
          });
          setTimeout(() => window.location.reload(), 3000);
        }
      });
  };
  const tabs = [
    {
      id: 1,
      tabTitle: "Zodiac Sign",
      title: "Select Birth Date",
      content: <ZodiacSign />,
    },
    {
      id: 2,
      tabTitle: "More...",
      title: "Description",
      content: <PersonalLoan handleSubmit={handleSubmit} />,
    },
    // {
    //   id: 3,
    //   tabTitle: "Secured Business Loan",
    //   title: "Secured Business Loan",
    //   content: <SecuredBusinessLoan handleSubmit={handleSubmit} />,
    // },
    // {
    //   id: 4,
    //   tabTitle: "Professional loan",
    //   title: "Professional loan",
    //   content: <ProfessionalLoan handleSubmit={handleSubmit} />,
    // },
    // {
    //   id: 5,
    //   tabTitle: "Secured Overdraft Limit",
    //   title: "Secured Overdraft Limit",
    //   content: <SecuredOverdraftLoan handleSubmit={handleSubmit} />,
    // },
    // {
    //   id: 6,
    //   tabTitle: "Unsecured Overdraft Limit",
    //   title: "Unsecured Overdraft Limit",
    //   content: (
    //     <form
    //       className="row"
    //       onSubmit={() => {
    //         submitDate("6");
    //       }}
    //     >
    //       <div className="col-lg-12">
    //         <input
    //           type="text"
    //           name="name"
    //           className="bg-light form-control mb-4"
    //           placeholder="Your Name"
    //         />
    //       </div>

    //       <div className="col-lg-12">
    //         <input
    //           type="number"
    //           name="phone"
    //           className="bg-light form-control mb-4"
    //           placeholder="Your Phone"
    //         />
    //       </div>

    //       <div className="col-lg-12">
    //         <input
    //           type="text"
    //           name="email"
    //           className="bg-light form-control mb-4"
    //           placeholder="Your Email"
    //         />
    //       </div>

    //       <div className="col-lg-12">
    //         <input
    //           type="text"
    //           name="businessname"
    //           className="bg-light form-control mb-4"
    //           placeholder="Business Name"
    //         />
    //       </div>

    //       <div className="col-lg-12">
    //         <textarea
    //           name="address"
    //           className="bg-light form-control mb-4"
    //           placeholder="Address"
    //         ></textarea>
    //       </div>

    //       <div className="col-12">
    //         <button value="Submit" type="submit" className="btn btn-primary">
    //           Submit Now
    //         </button>
    //       </div>
    //     </form>
    //   ),
    // },
    // {
    //   id: 7,
    //   tabTitle: "Car Loan",
    //   title: "Car Loan",
    //   content: (
    //     <form
    //       className="row"
    //       onSubmit={() => {
    //         submitDate("7");
    //       }}
    //     >
    //       <div className="col-lg-12">
    //         <input
    //           type="text"
    //           name="name"
    //           className="bg-light form-control mb-4"
    //           placeholder="Your Name"
    //         />
    //       </div>

    //       <div className="col-lg-12">
    //         <input
    //           type="number"
    //           name="phone"
    //           className="bg-light form-control mb-4"
    //           placeholder="Your Phone"
    //         />
    //       </div>

    //       <div className="col-lg-12">
    //         <input
    //           type="text"
    //           name="email"
    //           className="bg-light form-control mb-4"
    //           placeholder="Your Email"
    //         />
    //       </div>

    //       <div className="col-lg-12 ml-3 mb-3">
    //         <p style={{ fontSize: "1rem" }}>Income</p>
    //         <input
    //           type="radio"
    //           id="income"
    //           name="income"
    //           checked={carform === "0"}
    //           value="0"
    //           onChange={(e) => {
    //             setCarForm(e.target.value);
    //           }}
    //         />
    //           <label for="Salary ">Salary </label>
    //          {" "}
    //         <input
    //           type="radio"
    //           id="salary"
    //           name="income"
    //           checked={carform === "1"}
    //           value="1"
    //           onChange={(e) => {
    //             setCarForm(e.target.value);
    //           }}
    //         />
    //           <label for="Business">Business</label>
    //          {" "}
    //         <input
    //           type="radio"
    //           id="salary"
    //           name="income"
    //           checked={carform === "2"}
    //           value="2"
    //           onChange={(e) => {
    //             setCarForm(e.target.value);
    //           }}
    //         />
    //           <label for="Agriculture">Agriculture</label>
    //       </div>
    //       {carform == "null" ? (
    //         <div className="col-lg-12"> </div>
    //       ) : carform == "0" ? (
    //         <div className="col-lg-12">
    //           <input
    //             type="number"
    //             name="salary"
    //             className="bg-light form-control mb-4"
    //             placeholder="Enter Salary"
    //           />
    //         </div>
    //       ) : carform == "1" ? (
    //         <div className="col-lg-12">
    //           <input
    //             type="text"
    //             name="salary"
    //             className="bg-light form-control mb-4"
    //             placeholder="Enter Business Name"
    //           />
    //         </div>
    //       ) : (
    //         <input
    //           type="text"
    //           name="salary"
    //           className="bg-light form-control mb-4"
    //           placeholder="Enter Land in Bigha"
    //         />
    //       )}

    //       <div className="col-lg-12 ml-3 mb-3">
    //         <p style={{ fontSize: "1rem" }}>Loan Type</p>
    //         <input
    //           type="radio"
    //           id="NewCar"
    //           name="fav_language"
    //           value="NewCar"
    //         />
    //           <label for="NewCar">New Car</label>
    //          {" "}
    //         <input
    //           type="radio"
    //           id="UsedCar"
    //           name="fav_language"
    //           value="UsedCar"
    //         />
    //           <label for="UsedCar">Used Car</label>
    //         <br />
    //       </div>

    //       <div className="col-lg-12">
    //         <textarea
    //           name="address"
    //           className="bg-light form-control mb-4"
    //           placeholder="Address"
    //         ></textarea>
    //       </div>

    //       <div className="col-12">
    //         <button value="Submit" type="submit" className="btn btn-primary">
    //           Submit Now
    //         </button>
    //       </div>
    //     </form>
    //   ),
    // },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                id={tab.id}
                disabled={currentTab === `${tab.id}`}
                onClick={handleTabClick}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row pt-5 mobile-flex">
        <div className="col-md-6 pr-lg-5">
          <img
            src="assets/images/about/form.png"
            className="img-fluid horscope-wheel"
            alt="dashboard"
            data-aos="fade-right"
          />
        </div>
        <div className="col-md-6 text-center">
          <div className="content" style={{padding: '10px', backgroundColor: 'transparent'}}>
            {tabs.map((tab, i) => (
              <div key={i}>
                {currentTab === `${tab.id}` && (
                  <div>
                    <p className="title" style={{color: '#ffffff'}}>{tab.title}</p>
                    <p>{tab.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;