import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";


const Gyamfi = () => {
  return (
    <>
      <Navbar />

      <div
        className="hero min-h-[320px] bg-black"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1591800076009-a4a2c5582f7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-start text-neutral-content">
          <div className="min-w-96">
            <h1 className="mb-5 text-7xl font-semibold tracking-wider font-navFont">
              Joseph Gyamfi Esq
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen h-[200px] flex justify-center bg-black ">
        <div className="w-96 -mt-14 ">
          <img src="./joey.webp" alt="joey" className="rounded-xl border-2" />
        </div>
      </div>
      <div className="w-screen  h-[400px] flex flex-col items-center justify-center bg-black text-white">
        <div className="text-3xl font-navFont  mt-1 mb-3">
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
      <section className="  w-screen h-[1200px] text-justify font-navFont text-white text-xl -mt-36 p-10 bg-black">
        <div className="w-[900px] h-[900px]   mx-auto ">
          <p1>
            Joseph Gyamfi brings a wealth of knowledge and experience to our
            firm as a Senior Associate. With a solid educational foundation and
            a distinguished professional background, Joey, as he is
            affectionately known, is a highly valued member of our legal team.
          </p1>
          <br></br>
          <h1 className="font-bold my-4">Educational Background</h1>
          <p2>
            Joey's academic journey began at the University of Ghana, where he
            earned a degree in Political Science. His passion for the law then
            led him to the Ghana Institute of Management and Public
            Administration (GIMPA), where he obtained his Bachelor of Laws (LLB)
            degree. Furthering his legal education, Joey acquired his BL -
            Qualifying Certificate from the prestigious Ghana School of Law,
            cementing his credentials as a proficient legal practitioner.
          </p2>
          <h2 className="font-bold my-4">Professional Experience</h2>{" "}
          <p3>
            Before joining our firm, Joey served as the Managing Associate at
            Gyandoh Asmah & Co. During his tenure, he played a crucial role in
            overseeing complex legal matters and guiding the firm towards
            numerous successful outcomes. His leadership and legal acumen were
            instrumental in the firm's growth and reputation. Joey's career also
            includes a significant stint at Keystone Legal, where he honed his
            skills in various aspects of law, gaining invaluable experience that
            he continues to bring to his current role. His time at Keystone
            Legal provided him with a broader perspective on the legal
            landscape, enriching his expertise and enhancing his ability to
            serve our clients effectively.
          </p3>
          <h3 className="font-bold my-4">Areas of Expertise</h3>
          <p3>
            Joseph Gyamfi specializes in [insert specific areas of law here if
            any, e.g., corporate law, commercial litigation, property law,
            etc.]. His comprehensive understanding of the legal system, combined
            with his strategic approach and dedication to client success, makes
            him an asset to our team and a trusted advisor to our clients.
          </p3>
          <h4 className="font-bold my-4">Personal Philosophy</h4>
          <p1>
            Joey believes in a client-centered approach, where understanding the
            unique needs and objectives of each client is paramount. His
            commitment to providing personalized and effective legal solutions
            has earned him a reputation for excellence and reliability. At our
            firm, Joseph Gyamfi continues to demonstrate his exceptional legal
            prowess, contributing to our mission of delivering superior legal
            services. We are proud to have him as part of our team, and we are
            confident that our clients will greatly benefit from his expertise
            and dedication.
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

export default Gyamfi;
