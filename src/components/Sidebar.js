import React from "react";
import { Link } from "react-router-dom";
import logo from "../static/images/logo.jpg";
import styled from "styled-components";
import { useReceipesContext } from "../contexts/receipes_context";
import { links } from "../assets";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useReceipesContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
          rel="stylesheet"
        ></link>
        <div className="sidebar-header">
          <img
            src={logo}
            alt="This is a logo"
            className="image-top"
            style={{ width: "50px" }}
          />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links?.map((item) => {
            const { id, text, icon, url } = item;
            return (
              <li key={id} className="linky" onClick={closeSidebar}>
                <Link to={url}>
                  {icon} {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};
const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: all 0.2s linear;
    cursor: pointer;
    color: crimson;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: #fff;
  }
  .logo {
    justify-self: center;
    height: 45px;
  }

  .links a {
    color: #222;
    font-size: 1.6rem;
    text-align: left;
    font-weight: 900;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 1rem 1.5rem;
    transition: var(--transition);
    font-family: "Rajdhani", sans-serif;
  }

  .links a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
    text-decoration: none;
  }

  .social-icons {
    display: none;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
