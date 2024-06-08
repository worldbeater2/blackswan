import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Expertise = () => {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(null);

  const handleCardClick = (practiceArea) => {
    setSelectedPracticeArea(
      practiceArea === selectedPracticeArea ? null : practiceArea
    );
  };

  return (
    <main>
      <Navbar />

      <section className="w-screen h-[300px] bg-black ">
        <div
          
          className="mx-auto flex justify-center items-center mb-16 text-center"
        >
          <div className="mt-10 mx-auto container font-navFont leading-tight w-[1000px] font-semibold text-white tracking-tighter md:text-6xl text-2xl p-10">
            Discover Our Wide Range of Practice Areas and Expertise
          </div>
        </div>

        <div className="flex justify-center -mt-16 text-center">
          <svg
            className="md:w-12 w-5 inline animate-bounce duration-100 cursor-pointer text-swanred"
            dataSlot="icon"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
      </section>

      <section className="bg-black md:-mt-1  -mt-32 mx-auto md:p-20 p-10 w-screen">
        <div className="container md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:mt-1 md:mt-1 md:mx-auto lg:mx-auto lg:p-7 md:gap-x-10 md:gap-y-5 lg:gap-x-5 lg:gap-y-5 font-navFont flex flex-col justify-center items-center">
          <div
                    
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() => handleCardClick("Corporate & Commercial Law")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Corporate & Commercial Law"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
                Corporate & Commercial Law
              </h2>
              {selectedPracticeArea === "Corporate & Commercial Law" && (
                <div className="card-description bg-swanred text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    Our team of experienced lawyers specializes in corporate and
                    commercial law, providing comprehensive legal services for
                    businesses of all sizes. From contract drafting and
                    negotiation to mergers and acquisitions, we ensure that our
                    clients receive expert advice and representation to achieve
                    their business goals.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
                    
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() => handleCardClick("Disputes & Litigation")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1694164360654-f5e83fac9452?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Disputes & Litigation"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
                Disputes & Litigation
              </h2>
              {selectedPracticeArea === "Disputes & Litigation" && (
                <div className="card-description bg-swanslightblack text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    Our firm specializes in resolving disputes through strategic
                    litigation techniques. Whether it's commercial disputes,
                    civil litigation, or complex legal challenges, we provide
                    robust representation and advocacy to protect our clients'
                    interests. With a focus on achieving favorable outcomes
                    efficiently and effectively, we navigate the complexities of
                    litigation with precision and determination. Trust us to be
                    your steadfast legal partner in resolving disputes and
                    achieving resolution.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
                   

            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() =>
              handleCardClick("Intellectual Property & Technology")
            }
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Intellectual Property & Technology"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
                Intellectual Property & Technology
              </h2>
              {selectedPracticeArea ===
                "Intellectual Property & Technology" && (
                <div className="card-description  bg-teal-900 text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    Protecting your creations & innovations is paramount in
                    today's tech-driven world. Our firm offers tailored legal
                    solutions for patents, trademarks, copyright, and trade
                    secrets. With expertise in IP law, we safeguard your assets
                    and maximize their value. Whether you're a startup or a
                    multinational corporation, trust us to provide strategic
                    counsel and innovative solutions.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
                    
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() =>
              handleCardClick("Financial Institutions & Capital Markets")
            }
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1572276037952-478cead56982?q=80&w=2528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D3"
                alt="Financial Institutions & Capital Markets"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
                Financial Institutions & Capital Markets
              </h2>
              {selectedPracticeArea ===
                "Financial Institutions & Capital Markets" && (
                <div className="card-description bg-swanslightblack text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    We provide expert legal support for financial institutions
                    and capital market transactions. From regulatory compliance
                    to complex deals, we offer tailored solutions and strategic
                    counsel. Trust us to guide you through the intricacies of
                    the financial landscape with precision and efficiency.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
                    
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() => handleCardClick("Regulatory Compliance")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1560419450-a53fe3b90211?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Regulatory Compliance"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
                Regulatory Compliance
              </h2>
              {selectedPracticeArea === "Regulatory Compliance" && (
                <div className="card-description bg-teal-900 text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    We specialize in navigating the complex web of regulations
                    to keep your business on the right side of the law. With our
                    expert guidance and tailored solutions, you can rest assured
                    knowing that your compliance needs are in capable hands.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
                   
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() => handleCardClick("Property & Estate Law")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1524126675694-1efa3488b7c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property & Estate Law"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
                Property,Trusts & Estate Law
              </h2>
              {selectedPracticeArea === "Property & Estate Law" && (
                <div className="card-description bg-swanred text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    We provide expert legal support for all matters related to
                    property and estate law. From real estate transactions to
                    estate planning, we offer tailored solutions and strategic
                    counsel to protect your assets and ensure your wishes are
                    upheld. Trust us to navigate the complexities of property
                    and estate law with precision and care.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
                    
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 md:mb-0 mb-5 "
            onClick={() => handleCardClick("Immigration")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Immigration"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">Immigration</h2>
              {selectedPracticeArea === "Immigration" && (
                <div className="card-description bg-teal-900 text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    We offer expert legal support for all your immigration
                    needs. From visa applications to citizenship issues, we
                    provide personalized solutions to navigate the complexities
                    of immigration law with ease and confidence.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
                    
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() => handleCardClick("Insurance")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1570042707390-2e011141ab78?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Insurance"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">Insurance</h2>
              {selectedPracticeArea === "Insurance" && (
                <div className="card-description bg-swanred text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    We provide comprehensive legal support for all
                    insurance-related matters. From policy drafting to claims
                    resolution, we offer tailored solutions to navigate the
                    intricate landscape of insurance law with precision and
                    efficiency.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
                    
            className="card w-96 h-96 relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full transition-all duration-100 hover:brightness-200 md:mb-0 mb-5"
            onClick={() => handleCardClick("Healthcare")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">Healthcare</h2>
              {selectedPracticeArea === "Healthcare" && (
                <div className="card-description bg-teal-900 text-white p-4 font-navFont leading-7 text-justify  h-full flex justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    Our firm specializes in providing legal support for the
                    healthcare sector. From compliance to litigation, we offer
                    tailored solutions to address the unique needs of your
                    organization, ensuring smooth operations within the dynamic
                    healthcare industry.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen  mx-auto text-center font-navFont bg-swanslightblack p-14 font-light tracking-normal text-white">
        <div className="text-2xl mt-5 mb-5">Get Insights that matter</div>
        <div className="mb-5 ">
          Keep up to date with events and updates, now and in the future.
        </div>
        <Link to="/insights" >
        <button
          className="btn btn-neutral font-light bg-swanblack text-xl border-swanblack hover:bg-swanred hover:border-swanred mb-5 "
          
        >
          SUBSCRIBE
        </button>

        </Link>
        
      </div>

      <Footer />
    </main>
  );
};

export default Expertise;
