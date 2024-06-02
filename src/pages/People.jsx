import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const People = () => {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(null);

  const handleCardClick = (practiceArea) => {
    setSelectedPracticeArea(
      practiceArea === selectedPracticeArea ? null : practiceArea
    );
  };

  return (
    <main>
      <Navbar />

      <section className="w-screen h-[300px] bg-swanblack ">
        <div
          
          className="mx-auto flex justify-center items-center mb-16 text-center"
        >
          <div className="mt-10 mx-auto container font-navFont leading-tight w-[1000px] font-semibold text-white tracking-tighter text-6xl p-10">
           Meet the Team
          </div>
        </div>

        <div className="flex justify-center -mt-16 text-center">
          <svg
            className="w-12 inline animate-bounce duration-100 cursor-pointer text-swanred"
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

      <section className="bg-swanblack -mt-1 mx-auto p-20 w-screen">
      

        <div className="container grid grid-cols-3 mt-1 mx-auto p-7 gap-x-5 gap-y-5 font-navFont">
        <div
                    
            className="card w-96 h-[550px] relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 "
            onClick={() =>
              handleCardClick("Elsie Gyan")
            }
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="elsie.png"
                alt="Elsie Gyan"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full  items-center ">
              <h2 className="card-title text-white z-10">
                Elsie Gyan
              </h2>
              <h2 className="card-body text-white  z-10">
               Managing Associate
              </h2>
              {selectedPracticeArea ===
                "Elsie Gyan" && (
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
                    
            className="card w-96 h-[550px] relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full transition-all duration-100 hover:brightness-200 "
            onClick={() => handleCardClick("Disputes & Litigation")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="/dennis.jpg"
                alt="Dennis Bamfo"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
                Dennis Bamfo
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
                    
            className="card w-96 h-[550px] relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 "
            onClick={() => handleCardClick("Joseph Gyamfi")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="/joey.webp"
                alt="Joseph Gyamfi"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-center  text-center">
              <h2 className="card-title text-white z-10">
  Joseph Gyamfi
              </h2>
              {selectedPracticeArea === "Joseph Gyamfi" && (
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

          

          
          
         
          
         
          
        </div>
      </section>
      <div className="w-screen  mx-auto text-center font-navFont bg-swanslightblack p-14 font-light tracking-normal text-white">
        <div className="text-2xl mt-5 mb-5">Get Insights that matter</div>
        <div className="mb-5 ">
          Keep up to date with events and updates, now and in the future.
        </div>
        <button
          className="btn btn-neutral font-light bg-swanblack text-xl border-swanblack hover:bg-swanred hover:border-swanred mb-5 "
          
        >
          SUBSCRIBE
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default People;
