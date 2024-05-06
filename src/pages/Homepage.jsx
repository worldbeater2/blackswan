import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";



const Homepage = () => {
  

  return [
    <main className="bg-white text-black brightness-110" >
      <section className="">
        <Navbar />
        <Hero />
        <section className="w-screen" >
          <div className="mt-10 ml-16 p-10 max-w-[1000px] text-justify scroll-smooth">
            <div
              className="mx-auto ml-5 font-navFont text-3xl mb-10 font-medium"
              
            >
              About Us{" "}
            </div>
            <div
              className="mx-auto ml-5 font-navFont tracking-wider"
       
            >
              {" "}
              Black Swan is a modern law firm dedicated to providing exceptional
              legal services across a wide range of expertise. Our team of
              experienced professionals is committed to delivering tailored
              solutions to meet the unique needs of our clients.
              <br /> <br /> With a focus on practicality, precision, and
              innovation, we navigate the complexities of the legal landscape
              with ease, ensuring our clients receive effective counsel and
              support. At Black Swan, we prioritize client satisfaction and
              strive to build lasting relationships based on trust and
              integrity.
              <br /> <br /> Let us be your reliable legal partner, guiding you
              through legal challenges with professionalism, expertise, and a
              fresh approach to innovation.{" "}
            </div>
            <div className=" mx-5 ml-5 font-navFont ">
              {" "}
              <button
                className="btn file: text-black btn-outline px-10 mt-10 "
                
              >
                Know More
              </button>
            </div>
          </div>
        </section>
        <section >
        <div className=" ml-16 p-10 max-w-[1000px] text-justify scroll-smooth ">
          <div
            className="mx-auto ml-5 font-navFont text-3xl font-medium mb-10 "
           
          >
            Practice Areas
          </div>
          <div
            className="mx-auto ml-5 font-navFont tracking-wider"
            
          >
            Our team of seasoned professionals is dedicated to providing
            top-notch legal services across various specialties. With a focus on
            excellence and a commitment to delivering results, we strive to
            exceed our clients' expectations in every case. <br /> <br />{" "}
            Explore our practice areas below to discover how Black Swan can
            assist you in navigating the complexities of the legal landscape
            with confidence and clarity.
          </div>
        </div>
        <div
          className=" container grid grid-cols-4 mt-1 mx-auto p-7 gap-x-3 font-navFont"
          
        >
          <div className="card w-75 bg-base-100 shadow-xl image-full hover:-translate-y-6 transition-all duration-100 hover:brightness-200">
            <figure>
              <img
                className="h-full w-full "
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                Corporate & Commercial Law
              </h2>
            </div>
          </div>

          <div className="card w-75 bg-base-100 shadow-xl image-full hover:-translate-y-6 transition-all duration-100 hover:brightness-200">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1694164360654-f5e83fac9452?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="corporate"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Disputes & Litigation</h2>
            </div>
          </div>

          <div className="card w-75 bg-base-100 shadow-xl image-full hover:-translate-y-6 transition-all duration-100 hover:brightness-200">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Abstract Technology"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                Intellectual Property & Technology
              </h2>
            </div>
          </div>
          <div className="card w-75 bg-base-100 shadow-xl image-full hover:-translate-y-6 transition-all duration-100 hover:brightness-200 ">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1572276037952-478cead56982?q=80&w=2528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D3"
                alt="building"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                Financial Institutions & Capital Markets
              </h2>
            </div>
          </div>
        </div>
        ,
        <div className="ml-16 container text-justify mx-auto mb-10 font-navFont mt-4">
          <div className="flex justify-center ">
            <div className="flex text-black  px-9 duration-150 hover:animate-bounce  hover:border-b-2 hover:border-swanred hover:cursor-pointer border-black block">
              Visit our Expertise Page{" "}
              <svg
                className="w-4 ml-3"
                dataSlot="icon"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        </section>

        <div className=" ml-16 p-10 max-w-[1000px] text-justify scroll-smooth ">
          <div
            className="mx-auto  font-navFont text-3xl mb-12 text-black font-medium" 
            
          >
            Latest Insights
          </div>
          <div
            className="grid grid-cols-6 gap-x-7 font-navFont "
            
          >
            <div className="col-span-4 ">
              <div className="card lg:card-side bg-base-100  rounded-md cursor-pointer  duration-700 hover:animate-pulse p-2">
                <figure>
                  <img
                    className="overflow-hidden h-[350px] w-[400px] "
                    src="https://images.unsplash.com/photo-1568025848823-86404cd04ad1?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="building"
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title font-semibold">
                    An Overview of Ghana's Consumer Protection Laws
                  </h2>
                  <p className="">04 April,2024</p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-outline px-10 hover:bg-black  hover:text-white">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 w-[600px] rounded-lg mx-auto font-navFont p-2">
              <a href="/">
                <div className="flex flex-col border-l py-5 px-5 hover:border-swanred hover:animate-pulse duration-700">
                  <div className="flex ">
                    <img
                      src="https://images.unsplash.com/photo-1670159270770-9a455ba607d1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="overflow-hidden object-fill rounded-lg w-[300px] "
                    ></img>
                    <div className="p-5 flex-row">
                      <h1 className="font-semibold ">
                        An Overview of the Tax Incentives Available to Operators
                        in the Ghanaian Mining Industry
                      </h1>
                      <p1 className="font-light ">03 March,2024</p1>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="flex flex-col border-l hover:border-swanred py-5 px-5 hover:animate-pulse duration-700 mt-2 ">
                  <div className="flex ">
                    <img
                      src="https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=2275&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="overflow-hidden  image-full object-cover rounded-lg w-[300px] h-[145px]"
                    ></img>
                    <div className="p-5 flex-row">
                      <h1 className="font-semibold ">
                        Data Breaches: Compliance obligations under the Ghanaian
                        Data Protection Act 2012 (Act 843)
                      </h1>
                      <p1 className="font-light ">10 February,2024</p1>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        ,
        <div className="ml-16 container text-justify mx-auto mb-16 font-navFont mt-4">
          <div className="flex justify-center ">
            <div className="flex text-black  px-9 duration-150 hover:animate-bounce  hover:border-b-2 hover:border-swanred hover:cursor-pointer border-black block">
              More Insights{" "}
              <svg
                className="w-4 ml-3"
                dataSlot="icon"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen  mx-auto text-center font-navFont bg-swanslightblack p-14 font-light tracking-normal text-white">
        <div className="text-2xl mt-5 mb-5">Get Insights that matter</div>
        <div className="mb-5 ">
          Keep up to date with events and updates, now and in the future.
        </div>
        <button  className="btn btn-neutral font-light bg-swanblack text-xl border-swanblack mb-5 " data-aos="zoom-in"
              >
          SUBSCRIBE
        </button >
      </div>
      <Footer />
    </main>,
  ];
};

export default Homepage;
