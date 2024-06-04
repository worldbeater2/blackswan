import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";



const Dennis = () => {
  return (
    <>
      <Navbar />

      <div
        className="hero min-h-[320px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1591800076009-a4a2c5582f7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-start text-neutral-content">
          <div className="min-w-96">
            <h1 className="mb-5 text-7xl font-semibold tracking-wider font-navFont">
              Dennis Bamfo Esq
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen h-[200px] flex justify-center bg-black ">
        <div className="w-96 -mt-14 ">
          <img
            src="./dennis.jpg"
            alt="Dennis"
            className="rounded-xl border-2"
          />
        </div>
      </div>
      <div className="w-screen  h-[400px] flex flex-col items-center justify-center bg-black text-white">
        <div className="text-3xl font-navFont mt-16 mb-3">
          Senior Associate
        </div>

        <div className="text-white flex flex-row ">
          <svg
            className="w-10 mr-2 hover:cursor-pointer text-white"
            viewBox="0 0 24 24"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>

          <svg
            className="w-10 mr-2 hover:cursor-pointer"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect
                width="132"
                height="132"
                x="30"
                y="30"
                stroke="#000000"
                stroke-width="12"
                rx="16"
              ></rect>
              <path
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M66 86v44"
              ></path>
              <circle cx="66" cy="64" r="8" fill="#000000"></circle>
              <path
                stroke="#000000"
                stroke-linecap="round"
                stroke-width="12"
                d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
              ></path>
            </g>
          </svg>

          <svg
            className="w-10 mr-2 hover:cursor-pointer"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                stroke="#000000"
                stroke-linejoin="round"
                stroke-width="12"
                d="M126 38c-14.359 0-26 11.64-26 26a25.89 25.89 0 0 0 2.929 12C72 76 56 70 30 46c0 39.5 10 66 34 81-8 11.2-29.333 14.333-42 14.5 0 0 14 13.5 46 13.5 56 0 84-46.783 84-91l18-20h-27.386A25.892 25.892 0 0 0 126 38Z"
              ></path>
            </g>
          </svg>
          <svg
            className="w-10 mr-2 hover:cursor-pointer"
            fill="#ffffff"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
            </g>
          </svg>
        </div>
      </div>
      <section className="  w-screen h-[1200px] text-justify font-navFont text-white text-xl -mt-28 p-10 bg-black">
        <div className="w-[900px] h-[900px] mx-auto ">
          <p1>
            Dennis Bamfo is a dynamic and accomplished Senior Associate at our
            firm, bringing an impressive blend of academic excellence and
            extensive professional experience. Known for his innovative approach
            and thorough understanding of complex legal issues, Dennis is a key
            asset to our legal team.
          </p1>
          <br></br>
          <h1 className="font-bold my-4">Educational Background</h1>
          <p2>
          Dennis earned his Bachelor of Laws (LLB) degree from the Ghana Institute of Management and Public Administration (GIMPA). He furthered his legal education with a BL - Qualifying Certificate from the Ghana School of Law. Additionally, Dennis attended the Meltwater Entrepreneurial School of Technology, where he developed a strong foundation in business and innovation.
          </p2>
          <h2 className="font-bold my-4">Professional Experience</h2>{" "}
          <p3>
          Dennis has an impressive professional background, having worked at Gyandoh Asmah & Co, 8 Geeks at Law, Kudjawu & Co, and McJones Energy. His diverse experiences across these reputable firms have provided him with a comprehensive understanding of various legal landscapes.
          </p3>
          <h3 className="font-bold my-4">Areas of Expertise</h3>
          <p3>
            Dennis Bamfo specializes in Regulatory Compliance, Transactional
            Law, Intellectual Property, and Technology. His proficiency in these
            areas ensures that our clients receive expert guidance and effective
            solutions to their legal challenges. Dennis’s ability to navigate
            complex regulatory environments and his deep understanding of
            transactional processes are particularly valuable to our clients in
            highly regulated and fast-evolving industries.
          </p3>
          <h4 className="font-bold my-4">Personal Philosophy</h4>
          <p1>
          Dennis is committed to delivering exceptional legal services with a focus on innovation and client satisfaction. He believes in a proactive approach to legal challenges, providing strategic advice to help clients achieve their goals.

At our firm, Dennis Bamfo exemplifies legal excellence and a forward-thinking mindset. We are proud to have him as part of our team, confident that his expertise and dedication will greatly benefit our clients.
          </p1>
          <div className="flex justify-center mt-5">
          <Link to= "/people" >
        <a className="link mr-5">Back</a>

        </Link>

        <Link to="/" >
        <a className="link">Home</a>

        </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Dennis;
