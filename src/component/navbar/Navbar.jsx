import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

//BEM - Block ELement Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wgpt3">What is GPT?</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#possibility">Open AI</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </>
    );
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            onClick={() => setToggleMenu(false)}
            size={26}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            onClick={() => setToggleMenu(true)}
            size={26}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>sign In</p>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
