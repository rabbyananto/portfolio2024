import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer  items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.facebook.com/anantorabby/" target="_blank">
            <FaFacebook size={30}></FaFacebook>
          </a>
          <a href="https://github.com/rabbyananto" target="_blank">
            <FaGithub size={30}></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/mdabdullaalrabby/"
            target="_blank"
          >
            <FaLinkedin size={30}></FaLinkedin>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
