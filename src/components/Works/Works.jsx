import React, { useEffect } from "react";
import { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { BsArrowUpRight } from "react-icons/bs";
import { FaBehance, FaGithub, FaLine, FaLink } from "react-icons/fa";
import img1 from "../../assets/projects/moviemantra.png";
import rong from "../../assets/projects/rong.png";
import rabbyskitchen from "../../assets/projects/rabbyskitchen.png";
import img2 from "../../assets/projects/clonetubeyt1.png";
import img3 from "../../assets/projects/menu.png";
import fastfood from "../../assets/projects/fastfood.jpg";
import sushify from "../../assets/projects/sushiapp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div name="works" className=" w-full py-20  text-[#35404E]">
      <div className=" max-w-[1200px] mx-auto p-4">
        <div className=" grid lg:grid-cols-2">
          <h1 className=" text-5xl font-mono font-bold">
            Look at my <br /> recent projects{" "}
          </h1>
        </div>
        <div>
          {/* first project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px] transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={rabbyskitchen}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
            <div className="card-body lg:w-1/2 lg:ml-20">
              <h2 className="card-title">
                Rabby's Kitchen (Food Delivery Website)
              </h2>
              <p>
                Introducing 'Rabby's Kitchen' – a responsive MERN-Food Delivery
                website. Tailored for convenience frontend design ensures a
                user-friendly food ordering experience, making it effortless for
                users sign up / login, add food to cart, pay and order food.{" "}
              </p>
              <div className="lg:flex  gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ReactJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  MongoDB
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ExpressJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  NodeJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Stripe
                </button>
              </div>
              <div className="flex gap-2">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/rabbyananto/FoodDeliveryApp-Client"
                    target="_blank"
                  >
                    Client
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/rabbyananto/FoodDeliveryApp-server"
                    target="_blank"
                  >
                    Server
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a href="https://rabbyskitchen.netlify.app" target="_blank">
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
          </div>

          {/* 2nd project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px] transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={rong}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
            <div className="card-body lg:w-1/2 lg:ml-20">
              <h2 className="card-title">Rong</h2>
              <p>
                Introducing 'Rong' – a responsive E-commerce website. Tailored
                for convenience frontend design ensures a user-friendly
                experience, making it effortless for users to access and shop.{" "}
              </p>
              <div className="lg:flex  gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ReactJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Bootstrap
                </button>
              </div>
              <div className="flex gap-2">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/rabbyananto/RONG_Ecommerce_Website"
                    target="_blank"
                  >
                    Github
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://rong-ecommerce-website.netlify.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
          </div>
          {/* 3rd project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="card-body pl-0 lg:w-1/2">
              <h2 className="card-title">CloneTube</h2>
              <p>
                A project to replicate YouTube interface.The website has light
                and dark mode enabled.Data is taken from free API.{" "}
              </p>
              <div className="lg:flex gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ReactJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Styled-components
                </button>
              </div>
              <div className="flex gap-3">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/rabbyananto/CloneTube"
                    target="_blank"
                  >
                    Github
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a href="hhttps://clonetubeyt.netlify.app" target="_blank">
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img2}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* 4th project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img1}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
            <div className="card-body lg:w-1/2 lg:ml-20">
              <h2 className="card-title">Movie Mantra</h2>
              <p>
                Movie Mantra is a Movie Searching web application. It serves as
                a platform to search movie from enriched library of movies.{" "}
              </p>
              <div className="lg:flex  gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  HTML
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  CSS
                </button>
              </div>
              <div className="flex gap-2">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/rabbyananto/Moviepedia"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a href="https://moviemantra.netlify.app/" target="_blank">
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
          </div>

          {/* 5th project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="card-body pl-0 lg:w-1/2">
              <h2 className="card-title">Cafe Cumilla</h2>
              <p>
                'Cafe Cumilla' – a single page website for a local cafe and
                menu. Navigate opportunities effortlessly with its intuitive
                frontend design.
              </p>
              <div className="lg:flex gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>

                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  HTML5
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  CSS
                </button>
              </div>
              <div className="flex gap-3">
                <button className=" btn normal-case">
                  <a href="https://github.com/rabbyananto/menu" target="_blank">
                    Github
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://cafecomillamenu.netlify.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px]  transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img3}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* forth project 
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="card-body pl-0 lg:w-1/2">
              <h2 className="card-title">Cafe Cumilla</h2>
              <p>
                'Cafe Cumilla' – a single page website for a local cafe and
                menu. Navigate opportunities effortlessly with its intuitive
                frontend design.
              </p>
              <div className="lg:flex gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>

                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  HTML5
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  CSS
                </button>
              </div>
              <div className="flex gap-3">
                <button className=" btn normal-case">
                  <a href="https://github.com/rabbyananto/menu" target="_blank">
                    Github
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://cafecomillamenu.netlify.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px]  transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img3}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>*/}

          {/* forth project 
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="card-body pl-0 lg:w-1/2">
              <h2 className="card-title">Cafe Cumilla</h2>
              <p>
                'Cafe Cumilla' – a single page website for a local cafe and
                menu. Navigate opportunities effortlessly with its intuitive
                frontend design.
              </p>
              <div className="lg:flex gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>

                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  HTML5
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  CSS
                </button>
              </div>
              <div className="flex gap-3">
                <button className=" btn normal-case">
                  <a href="https://github.com/rabbyananto/menu" target="_blank">
                    Github
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://cafecomillamenu.netlify.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px]  transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img3}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div> */}

          {/* 6th project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px] transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={sushify}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
            <div className="card-body lg:w-1/2 lg:ml-20">
              <h2 className="card-title">Sushify</h2>
              <p>
                Introducing 'Sushify' – A minimalistic yet luxury Sushi
                restaurant app design for mobile application.Pure minimalistic
                app, with innovative, yet familiar and intuitive UI, playful but
                shortest possible UX form visitor to customer.{" "}
              </p>
              <div className="lg:flex  gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  UI / UX Design
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Prototype
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Figma
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Adobe Photoshop
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Miro
                </button>
              </div>
              <div className="flex gap-2">
                <button className=" btn normal-case">
                  <a
                    href="https://www.behance.net/gallery/171772567/Sushi-fy-%28a-minimalistic-sushi-app%29"
                    target="_blank"
                  >
                    Behance
                  </a>
                  <FaBehance></FaBehance>
                </button>
              </div>
            </div>
          </div>

          {/* 7th project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="card-body pl-0 lg:w-1/2">
              <h2 className="card-title">Fast Food</h2>
              <p>
                Introducing 'Fast Food' – UI Design of Landing page for Food
                ordering website. This project consists High fidelity mockup for
                a generic fast food ordering website for desktop.
              </p>
              <div className="lg:flex gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  UI Design
                </button>

                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Prototype
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Figma
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Adobe Photoshop
                </button>
              </div>
              <div className="flex gap-3">
                <button className=" btn normal-case">
                  <a
                    href="https://www.behance.net/gallery/152616507/UI-Design-for-a-Food-Ordering-Website"
                    target="_blank"
                  >
                    Behance
                  </a>
                  <FaBehance></FaBehance>
                </button>
              </div>
            </div>
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px]  transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={fastfood}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* after all projects */}
        </div>
      </div>
    </div>
  );
};

export default Works;
