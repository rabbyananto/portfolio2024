import React, { useEffect } from "react";
import { BiBadgeCheck } from "react-icons/Bi";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      name="skills"
      className="w-full lg:h-screen bg-[#EBEFF3] text-[#35404E]"
    >
      <div className=" text-center pt-32 pb-20">
        <p className="text-4xl font-mono font-bold inline ">Skills</p>
      </div>
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4 w-full h-full">
        <div className=" grid lg:grid-cols-2 lg:gap-20">
          <div className="card w-full bg-base-100 shadow-xl mb-5">
            <div
              className="card-body"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <h2 className=" card-title mb-5 text-lg justify-center  text-gray-700">
                UI/UX Design & Backend Development
              </h2>
              <div className=" grid grid-cols-2 gap-10">
                <div className=" flex flex-col gap-5">
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        Wireframing
                      </p>
                      <p className=" text-sm text-gray-500">Expertise</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        Prototyping
                      </p>
                      <p className=" text-sm text-gray-500">Expertise</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        Interaction design
                      </p>
                      <p className=" text-sm text-gray-500">Expertise</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">Python</p>
                      <p className=" text-sm text-gray-500">Basic</p>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        {" "}
                        Adobe creative suite
                      </p>
                      <p className=" text-sm text-gray-500">Comfortable</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        Figma, Adobe XD
                      </p>
                      <p className=" text-sm text-gray-500">Comfortable</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">MongoDB</p>
                      <p className=" text-sm text-gray-500">Comfortable</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">Stripe</p>
                      <p className=" text-sm text-gray-500">Basic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mb-5">
            <div
              className="card-body"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <h2 className=" card-title mb-5 text-lg justify-center  text-gray-700">
                Frontend Development
              </h2>
              <div className=" grid grid-cols-2 gap-10">
                <div className=" flex flex-col gap-5">
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1 text-black"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">React</p>
                      <p className=" text-sm text-gray-500">Expertise</p>
                    </div>
                  </div>

                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">Tailwind</p>
                      <p className=" text-sm text-gray-500">Comfortable</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">HTML</p>
                      <p className=" text-sm text-gray-500">Expertise</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">Git</p>
                      <p className=" text-sm text-gray-500">Comfortable</p>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        JavaScript
                      </p>
                      <p className=" text-sm text-gray-500">Expertise</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        Bootstrap
                      </p>
                      <p className=" text-sm text-gray-500">Comfortable</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">CSS</p>
                      <p className=" text-sm text-gray-500">Expertise</p>
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <BiBadgeCheck
                      color="black"
                      size={20}
                      className="mt-1"
                    ></BiBadgeCheck>
                    <div>
                      <p className=" text-xl font-medium loading-5">
                        ExpressJs
                      </p>
                      <p className=" text-sm text-gray-500">Basic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
