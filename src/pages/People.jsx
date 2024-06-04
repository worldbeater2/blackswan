import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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

      <section className="w-screen h-[300px] bg-black ">
        <div className="mx-auto flex justify-center items-center mb-16 text-center">
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

      <section className="bg-black -mt-1 mx-auto pt-10 w-screen pb-28">
        <div className="container grid grid-cols-3 mt-1 mx-auto p-7 gap-x-5 gap-y-5 font-navFont">
          <div
            className="card w-96 h-[550px] relative overflow-hidden cursor-pointer bg-base-100 shadow-xl image-full  transition-all duration-100 hover:brightness-200 hover:text-black "
            onClick={() => handleCardClick("Elsie Gyan")}
          >
            <figure>
              <img
                className="h-full w-full object-cover"
                src="elsie.png"
                alt="Elsie Gyan"
              />
            </figure>
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end p-4 " >
              <h2 className="card-title text-white z-10">Elsie Gyan</h2>
              <h2 className="text-white z-10">Managing Associate</h2>
              {selectedPracticeArea === "Elsie Gyan" && (
                <div className="card-description bg-swanslightblack text-white p-4 font-navFont leading-7 text-justify h-full flex flex-col justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                    Elsie Gyan, our Managing Partner, oversees daily operations
                    with a focus on excellence. She brings extensive expertise
                    in financial law, ensuring our team excels in supporting
                    institutions and market transactions. Elsie is committed to
                    delivering customized advice and strategic insights, adeptly
                    navigating complex legal landscapes with skill and care
                  </p>
                  <Link to="/elsie">
                  <button className="btn btn-neutral font-light bg-swanblack  border-swanblack hover:bg-swanred hover:border-swanred mt-5 hover:text-black">
                    View Profile
                  </button>
                  </Link>
             
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
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end p-4">
              <h2 className="card-title text-white z-10">Dennis Bamfo</h2>
              <h2 className="text-white z-10">Senior Associate</h2>
              {selectedPracticeArea === "Disputes & Litigation" && (
                <div className="card-description bg-swanslightblack text-white p-4 font-navFont leading-7 text-justify h-full flex flex-col justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
              
Dennis Bamfo, a Senior Associate, specializes in the tech sector, innovative business models, and Mergers & Acquisitions. With a keen understanding of these areas, he provides expert guidance and practical solutions. Dennis adeptly navigates the complexities of modern business, ensuring our clients receive top-notch support and strategic advice.
                  </p>
                  <Link to="/dennis">
                  <button className="btn btn-neutral font-light bg-swanblack  border-swanblack hover:bg-swanred hover:border-swanred mt-5 hover:text-black">
                    View Profile
                  </button>
                  </Link>
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
            <div className="card-body absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end p-4">
              <h2 className="card-title text-white z-10">Joseph Gyamfi</h2>
              <h2 className="text-white z-10">Senior Associate</h2>
              {selectedPracticeArea === "Joseph Gyamfi" && (
                <div className="card-description bg-swanslightblack text-white p-4 font-navFont leading-7 text-justify h-full flex flex-col justify-center items-center absolute top-0 left-0 right-0 overflow-auto z-10">
                  <p>
                  Joseph Gyamfi, a Senior Associate, specializes in Corporate and Commercial law, focusing on transactions and business structuring. With his deep knowledge and expertise, he provides insightful counsel and effective solutions. Joseph is dedicated to guiding clients through the complexities of corporate legal matters, ensuring their business interests are well-protected and advanced.
                  </p>
                  <Link to="/gyamfi">
                  <button className="btn btn-neutral font-light bg-swanblack  border-swanblack hover:bg-swanred hover:border-swanred mt-5 hover:text-black">
                    View Profile
                  </button>
                  </Link>
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
        <button className="btn btn-neutral font-light bg-swanblack text-xl border-swanblack hover:bg-swanred hover:border-swanred mb-5 ">
          SUBSCRIBE
        </button>

        </Link>
        
      </div>

      <Footer />
    </main>
  );
};

export default People;
