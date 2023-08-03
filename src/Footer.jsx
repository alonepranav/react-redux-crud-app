import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="text">Developed by Pranav</div>
      <div className="icons">
        <a
          target="_blank"
          href="https://www.instagram.com/pranavshilavane"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.github.com/pranavshilavane"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
