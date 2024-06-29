import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer" style={{ "height": "60px" }}>
      <br />
      <div className="d-flex flex-row gap-2 justify-content-center">
        <SiMongodb size="1.5rem" />
        <FaReact size="1.5rem" />
        <SiExpress size="1.5rem" />
        <FaNodeJs size="1.5rem" />
        <FaDocker size="1.5rem" />
      </div>
    </div>
  )
}

export default Footer;
