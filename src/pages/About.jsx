import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      {/* <div
        className="hero min-h-[320px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1591800076009-a4a2c5582f7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-55"></div>
        <div className="hero-content text-start text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-light tracking-wider font-navFont">
              About Us
            </h1>
          </div>
        </div>
      </div> */}
      <section className="w-screen h-[250px] bg-black  ">
        <div
          
          className="mx-auto flex justify-center items-center mb-16 text-center"
        >
          <div className="mt-10 mx-auto container font-navFont leading-tight w-[1000px] font-semibold text-white tracking-tighter text-6xl p-10">
          Learn more about our firm and what we offer
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
      
      {/* <section className="w-screen h-screen flex items-center justify-center bg-teal-900 ">
        <div
          
          className=" mt-10 container mx-auto  mb-32 text-6xl p-10 font-navFont leading-tight w-[900px] text-justify font-semibold text-white tracking-tighter"
        >
          Learn more about our firm and what we offer
          <svg
            dataSlot="icon"
            fill="none"
            className="w-12 ml-6 inline animate-bounce duration-100 cursor-pointer text-swanblack"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </section> */}

      <section className="w-screen h-[800px] flex items-center justify-center bg-black">

        <div className="w-[900px] mx-auto  ">
          <h1
            className="font-navFont mb-16 text-center text-6xl text-swanred font-semibold"
        
          >
            Our Approach
          </h1>

          <div
            className="font-navFont  text-justify w-[900px] text-2xl tracking-tight leading-10 text-swanlightash"

          >
            Our approach is centered on understanding our clients' unique needs
            and delivering tailored legal solutions with precision and
            innovation. We believe in fostering strong partnerships built on
            trust, transparency, and effective communication.By combining our
            expertise with a client- centered mindset, we guide our clients
            through legal challenges with clarity and confidence, striving for
            excellence in every aspect of our practice.
          </div>
        </div>
      </section>

      <section className="h-[900px] w-screen  bg-black text-white ">
      <div
        className="font-navFont  text-center text-6xl font-semibold text-swanred"

      >
        Values
      </div>

        <div className="grid grid-cols-6 gap-10 mx-auto font-navFont  p-28  text-justify text-swanlightash ">
          <div className="mx-auto col-span-2">
            <h2 className="border-b text-3xl pb-6 font-semibold border-swanred">Integrity</h2>
            <div className="mt-7">
              <p2>
                Upholding the highest ethical standards, we prioritize honesty,
                transparency, and accountability.
              </p2>
            </div>
          </div>
          <div className="mx-auto col-span-2" 
       >
            <h2 className="border-b text-3xl pb-6 font-semibold border-swanred">Excellence</h2>
            <div className="mt-7">
              {" "}
              <p2>
                Striving for top-notch legal services with precision,
                professionalism, and attention to detail.
              </p2>
            </div>
          </div>
          <div className="mx-auto col-span-2"  
     >
            <h2 className="border-b text-3xl pb-6 font-semibold border-swanred">Client-Centered </h2>
            <div className="mt-7">
              {" "}
              <p2>
                Our clients are at the heart of everything we do. We provide
                tailored solutions and exceed their expectations.
              </p2>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-6 -mt-24 mb-16 gap-10 mx-auto font-navFont p-28 text-justify text-swanlightash">
          <div className="mx-auto col-span-2" >
            <h2 className="border-b text-3xl pb-6 font-semibold border-swanred">Innovation</h2>
            <div className="mt-7">
              {" "}
              <p2>
                Embracing creativity to address legal challenges effectively and
                deliver value.
              </p2>
            </div>
          </div>
          <div className="mx-auto col-span-2 "  
        >
            <h2 className="border-b text-3xl pb-6  font-semibold border-swanred">Collaboration</h2>
            <div className="mt-7">
              <p2>
                Valuing teamwork, both within our firm and with our clients, to
                achieve the best outcomes.
              </p2>
            </div>
          </div>
          <div
            className="mx-auto col-span-2"
            
          >
            <h2 className="border-b text-3xl pb-6 font-semibold border-swanred">Community</h2>
            <div className="mt-7 ">
              {" "}
              <p2>
                Actively supporting our local communities through pro bono work
                and charitable initiatives.
              </p2>
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
      

      {/* <div
        className="mx-auto ml-96 text-xl leading-loose p-10 font-navFont tracking w-[720px] text-justify text-black"
    
      >
        Black Swan is a modern law firm dedicated to providing exceptional legal
        services across a wide range of expertise. Our team of experienced
        professionals is committed to delivering tailored solutions to meet the
        unique needs of our clients.
        <br /> <br /> With a focus on practicality, precision, and innovation,
        we navigate the complexities of the legal landscape with ease, ensuring
        our clients receive effective counsel and support. At Black Swan, we
        prioritize client satisfaction and strive to build lasting relationships
        based on trust and integrity.
        <br /> <br /> Let us be your reliable legal partner, guiding you through
        legal challenges with professionalism, expertise, and a fresh approach
        to innovation.{" "}
      </div> */}
      {/* 
      <div
        className="mx-auto ml-5 px-10 font-navFont tracking w-[720px] text-justify text-black"
        data-aos-duration="1500"
        data-aos-offset="200"
        data-aos-once="false"
        data-aos-mirror="true"
      >
        <h1>Our Values</h1>
      </div>

      <div className="mx-auto ml-5 px-10 font-navFont ">
      <div>
        <h2>Integrity</h2>
        <p>Upholding the highest ethical standards in every aspect of our practice, we prioritize honesty, transparency, and accountability.</p>
      </div>

      <div>
        <h2>Excellence</h2>
        <p>Upholding the highest ethical standards in every aspect of our practice, we prioritize honesty, transparency, and accountability.</p>
      </div>

      </div>
      
      <Footer /> */}

      <Footer />
    </main>
  );
};

export default About;
