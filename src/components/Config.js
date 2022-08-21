import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Config = ({ title, img, url }) => {
  return (
    <Wrapper>
      <aside data-aos={"zoom-in"}>
        <img src={img} alt={title} />
        <a href={url} className="link">
          <FaSearch />
        </a>
        <h2>{title}</h2>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0.2px;
  aside {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  aside img {
    width: 300px;
  }

  .link {
    transform: translate(-50%, -50%);
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50%;
    width: 2.8rem;
    color: red;
    height: 2.8rem;
    border-radius: 50%;
    transition: all 0.2s linear;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.4rem;
      color: #fff;
    }
  }

  aside:hover img {
    opacity: 0.5;
  }
  aside:hover .link {
    opacity: 1;
  }

  aside h2 {
    font-size: 1.3em;
    text-align: center;
    font-family: "Amiri", serif;
  }

  @media screen and (max-width: 1290px) {
    aside img {
      width: 100%;
    }
  }

  @media screen and (max-width: 350px) {
    aside {
      width: 95%;
    }
  }

  @media screen and (max-width: 300px) {
    aside {
      width: 85%;
    }
  }
`;

export default Config;
