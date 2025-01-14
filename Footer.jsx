import React from "react";
import { Link } from "react-router-dom";
import shareyourstory from "../assets/shareyourstory.jpg";
const Footer = () => {
  let localData = localStorage.getItem("user");
  return (
    <div className="footerMain p-top">
      <img src={shareyourstory} alt="shareyourstory" />
      <div className="publicyourstory">
        <h1>Publish Your Story, Today!🤩</h1>
        <p>
          Share your story with shareherestory where world listens your story
        </p>
        {localData ? (
          <Link to="/addstory" className="addstoryfooter">
            Add Story
          </Link>
        ) : (
          <Link
            className="addstoryfooter"
            onClick={() => {
              alert("Please Login");
            }}
          >
            Add Story
          </Link>
        )}
      </div>
      <div className="socalmedia">
        <a
          href="https://github.com/abhi6206kr"
          target="_blank"
          rel="noopener noreferrer"
          className="socialmediaLink"
        >
          <span>Follow on Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-kumar-35608a208/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialmediaLink"
        >
          <span>Follow on Linkedin</span>
        </a>
        <p>Made with ❤️ By Abhishek </p>
      </div>
    </div>
  );
};

export default Footer;
