import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../static/images/logo.jpg";
import { useReceipesContext } from "../contexts/receipes_context";
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { links } from "../assets";

const Navbar = () => {
  const { openSidebar } = useReceipesContext();
  const [navPosition, setNavPosition] = useState(0);
  const scrollHeight = window.pageYOffset;
  

  const handleScroll = () => {
    setNavPosition(scrollHeight);
  };
  

  const letHandle = () => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }

  useEffect(() => {
    letHandle()
  }, []);

  return (
    <NavContainer className={`${handleScroll ? "fixed-nav" : openSidebar || navPosition === 0 ?  null: null}`}>
      <nav>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
          rel="stylesheet"
        ></link>
        <div className="nav-center">
          <div className="nav-header">
            <img
              src={logo}
              alt="This is a logo"
              className="image-top"
              style={{ width: "50px" }}
            />
            <button className="nav-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="links">
            {links.map((item) => {
              const { id, text, icon, url } = item;
              return (
                <li key={id} className="linky">
                  <Link to={url}>
                    {icon}
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com/ChuksJoshuaa">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/ChuksJoshuaa">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chuks-joshuaa">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  z-index: 9999;

  nav {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: var(--light-shadow);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-toggle {
    font-size: 1.5em;
    color: #222;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }

  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }

  .logo {
    height: 40px;
  }

  .links a {
    color: var(--clr-grey-3);
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
    font-family: "Rajdhani", sans-serif;
  }

  .links a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }

  .social-icons {
    display: none;
  }

  .links {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    .nav-header {
      padding: 0;
    }

    .nav-toggle {
      display: none;
    }

    .links {
      height: auto;
      display: flex;
    }

    .links a {
      padding: 0;
      margin: 0 0.5rem;
      font-size: 1.6rem;
      color: #222;
    }

    .links a:hover {
      padding: 0;
      background: transparent;
      text-decoration: none;
    }

    .social-icons {
      display: flex;
    }

    .social-icons a {
      margin: 0 0.5rem;
      font-size: 1.6rem;
      color: #222;
      transition: var(--transition);
    }

    .social-icons a:hover {
      color: var(--clr-primary-7);
    }
  }
`;

export default Navbar;
