import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />

      <section className="w-screen h-[250px] bg-black  ">
        <div className="mx-auto flex justify-center items-center mb-16 text-center">
          <div className="mt-10 mx-auto container font-navFont leading-tight w-[1000px] font-semibold text-white tracking-tighter md:text-6xl text-3xl p-10">
            Discover Our Firm and the Services We Provide
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

      <section className="w-screen h-[800px] flex items-center justify-center md:-mt-16 -mt-40 bg-black">
        <div className="md:w-[900px] mx-auto  ">
          <h1 className="font-navFont md:mb-16 text-center md:text-6xl text-2xl text-swanred font-semibold">
            Our Approach
          </h1>

          <div className="font-navFont md:mt-0 -mt-6 text-justify md:w-[900px] w-[550px] p-12  md:p-0 md:text-2xl text-base md:tracking-tight md:leading-10 tracking-wide text-swanlightash">
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

      <section className="md:h-[900px] h-[1350px] w-screen  md:-mt-36 bg-black -mt-64 text-white p-10">
        <div className="font-navFont md:mb-16  text-center md:text-6xl text-2xl font-semibold text-swanred ">
          Values
        </div>

        <div className="md:grid md:grid-cols-6 gap-10 mx-auto font-navFont  md:p-28 p-10 text-justify text-swanlightash ">
          <div className="mx-auto col-span-2 md:mb-0 mb-14">
            <h2 className="border-b md:text-3xl  text-xl pb-6 font-semibold border-swanred ">
              Integrity
            </h2>
            <div className="mt-7">
              <p2>
                Upholding the highest ethical standards, we prioritize honesty,
                transparency, and accountability.
              </p2>
            </div>
          </div>
          <div className="mx-auto col-span-2  md:mb-0 mb-14">
            <h2 className="border-b md:text-3xl text-xl pb-6 font-semibold border-swanred">
              Excellence
            </h2>
            <div className="mt-7">
              {" "}
              <p2>
                Striving for top-notch legal services with precision,
                professionalism, and attention to detail.
              </p2>
            </div>
          </div>
          <div className="mx-auto col-span-2 ">
            <h2 className="border-b md:text-3xl text-xl pb-6 font-semibold border-swanred">
              Client-Centered{" "}
            </h2>
            <div className="mt-7">
              {" "}
              <p2>
                Our clients are at the heart of everything we do. We provide
                tailored solutions and exceed their expectations.
              </p2>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-6 gap-10 mx-auto font-navFont   md:p-28 p-10 text-justify text-swanlightash ">
          <div className="mx-auto col-span-2  md:mb-0 mb-14 md:mt-0 -mt-5">
            <h2 className="border-b md:text-3xl text-xl pb-6 font-semibold border-swanred">
              Innovation
            </h2>
            <div className="mt-7">
              {" "}
              <p2>
                Embracing creativity to address legal challenges effectively and
                deliver value.
              </p2>
            </div>
          </div>
          <div className="mx-auto col-span-2  md:mb-0 mb-14">
            <h2 className="border-b md:text-3xl text-xl pb-6  font-semibold border-swanred">
              Collaboration
            </h2>
            <div className="mt-7">
              <p2>
                Valuing teamwork, both within our firm and with our clients, to
                achieve the best outcomes.
              </p2>
            </div>
          </div>
          <div className="mx-auto col-span-2  md:mb-0 mb-14">
            <h2 className="border-b md:text-3xl text-xl pb-6 font-semibold border-swanred">
              Community
            </h2>
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
        <Link to="/insights">
          <button className="btn btn-neutral font-light bg-swanblack text-xl border-swanblack hover:bg-swanred hover:border-swanred mb-5 ">
            SUBSCRIBE
          </button>
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default About;
