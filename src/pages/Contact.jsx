import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeafletMap from "../components/LeafletMap";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <main>
      <Navbar />
      <section className="w-screen h-[300px] bg-black ">
        <div className="mx-auto flex justify-center items-center mb-16 text-center">
          <div className="mt-10 mx-auto container font-navFont leading-tight w-[1000px] font-semibold text-white tracking-tighter md:text-6xl text-3xl p-10">
            Get in Touch with Us
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
      {/* <div className="hero min-h-[320px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1591800076009-a4a2c5582f7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-55"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-light tracking-wider font-navFont">Contact Us</h1>
    
  
    </div>
  </div>
</div> */}
      <section className="  flex md:flex-row flex-col justify-center md:w-screen md:-mt-16 mx-auto bg-black p-20">
      
        <div className=" container md:w-[450px] md:h-[450px] md:ml-10 md:mt-5 -mt-28">
          <label className="input input-bordered flex items-center gap-2 mb-2">
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            <input type="email" className="grow" placeholder="Your Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            <input type="text" className="grow" placeholder="Subject" />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-2 pb-40 pt-5">
            <input type="text" className="grow " placeholder="Message" />
          </label>

          <div className="btn btn-outline mt-5 mx-auto  flex items-center  w-40  hover:bg-black px-5 bg-swanred border-swanred hover:text-white ">
            Send Message
          </div>
        </div>

        <div className=" md:flex flex-col justify-start p-10 hidden">
          <div className=" container font-navFont leading-tight w-[500px] font-normal text-justify text-white tracking-wide text-2xl  ">
            Your legal journey begins with a single step. Fill out the form to
            connect with our skilled legal professionals.
          </div>

          <div className="container font-navFont text-white mt-14 w-[500px] ">
            <div className="flex mb-3 ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 mr-5"
                stroke="#000000"
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
                    d="M15 10.0008L9 10M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>{" "}
              <h1>1 Church Street • Spintex Road • Accra</h1>
            </div>
            <div className="flex mb-3 ">
              <svg
                className="w-5 mr-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
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
                    d="M5.11596 12.7268L8.15456 9.08666C8.46255 8.69067 8.61655 8.49267 8.69726 8.27061C8.76867 8.07411 8.79821 7.86486 8.784 7.65628C8.76793 7.42055 8.67477 7.18766 8.48846 6.72187L7.77776 4.94513C7.50204 4.25581 7.36417 3.91116 7.12635 3.68525C6.91678 3.48618 6.65417 3.3519 6.37009 3.29856C6.0477 3.23803 5.68758 3.32806 4.96733 3.50812L3 4.00002C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3122 20.7617 17.952 20.7012 17.6297C20.6478 17.3456 20.5136 17.083 20.3145 16.8734C20.0886 16.6356 19.7439 16.4977 19.0546 16.222L17.4691 15.5878C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4002C15.4877 15.512 15.2854 15.7144 14.8807 16.1191L11.7943 19.1569"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <h1>+233248675874</h1>
            </div>
            <div className="flex ">
            <svg className="w-5 mr-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffff" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
              <h1>info@blackswanafrica.com</h1>
            </div>
          </div>
        </div>
      </section>
      <LeafletMap />
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
export default Contact;
