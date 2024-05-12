import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import email from "./email.json";
import emailjs from "@emailjs/browser";
import { FaHome, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xbinfha",
        "template_vybmfqs",
        form.current,
        "mcFuEfuRXxU6-sjZg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div name="contact" className="w-full  bg-[#EBEFF3]">
      <div className="max-w-screen-xl mx-auto px-8 lg:flex justify-center items-center h-full py-28">
        <div
          className="flex flex-col lg:w-1/2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-8">
              <p className="text-4xl font-mono font-bold inline border-b-4 border-pink-600 text-[#35404E]">
                Contact
              </p>
              <p className="text-[#35404E] py-4">
                Submit the form below or shoot me an email on -
                mdabdullaalrabby@gmail.com
              </p>
            </div>
            <input
              className=" p-2"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              className="my-4 p-2 "
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              className="p-2"
              name="message"
              rows="6"
              placeholder="Message"
            ></textarea>
            <div className="mt-4 inline-flex">
              <input
                className="btn btn-error normal-case text-white "
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="lg:flex justify-center items-center lg:w-1/2">
          <Lottie animationData={email}></Lottie>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pb-32">
        <div className=" grid lg:grid-cols-3 gap-y-5">
          <div className=" flex flex-col items-center gap-2">
            <FaMobileAlt size={35} className=" text-red-500 mt-1"></FaMobileAlt>
            <h1 className="text-red-600 font-bold ">Call me </h1>
            <p>+4915906414589</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <FaHome size={35} className=" text-red-500"></FaHome>
            <h1 className="text-red-600 font-bold ">Current resident</h1>
            <p>Duisburg, Germany (Open to relocate)</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <FaRegEnvelope size={35} className=" text-red-500"></FaRegEnvelope>
            <h1 className="text-red-600 font-bold ">Email me</h1>
            <p>mdabdullaalrabby@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
