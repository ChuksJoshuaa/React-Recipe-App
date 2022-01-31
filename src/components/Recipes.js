import React, { useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import Loading from "./Loading";
import { menu } from "../assets";

const Recipes = () => {
  const [data, setData] = useState(menu);

  if (data.length < 1) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="section">
        <h1>Local Recipes</h1>
        <p className="underline"></p>
        <div className="center">
          <Category />
          <div className="aside">
            {data.map((item) => {
              const { id, title, img, time, cook } = item;
              return (
                <div key={id} className="baby">
                  <img src={img} alt={title} />
                  <h2>{title}</h2>
                  <p>
                    Prep: {time}min
                    <span className="span">|</span>
                    <span>Cook: {cook}min</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 1rem;
  .section {
    height: 900px;
    width: 100%;
  }

  .section h1 {
    font-size: 3rem;
    text-align: center;
    letter-spacing: 0.125rem;
    font-weight: 400;
    color: #222;
    font-family: "Racing Sans One", cursive;
    text-transform: uppercase;
  }

  .section .underline {
    width: 6rem;
    height: 0.25rem;
    background: #222;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
    opacity: 0.8;
  }

  .center {
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 10px;
  }

  .aside {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-top: 1%;
  }

  .baby img {
    width: 200px;
    height: 150px;
  }

  .baby h2 {
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    font-family: "Amiri", serif;
    margin-bottom: 3%;
    color: crimson;
  }

  .baby p {
    letter-spacing: 0.125rem;
    margin-bottom: 0;
    font-family: "Rajdhani", sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .baby .span {
    color: #222;
    font-size: 2em;
    opacity: 0.7;
  }

  @media screen and (max-width: 1154px) {
    .section {
      height: auto;
      margin-bottom: 5%;
    }
    .center {
      display: flex;
      flex-direction: column;
      margin: 10px;
    }

    .aside {
      place-items: center;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 688px) {
    .baby img {
      width: 250px;
    }
    .aside {
      place-items: center;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 528px) {
    .baby img {
      width: 350px;
    }
    .aside {
      place-items: center;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  @media screen and (max-width: 528px) {
    .baby img {
      width: 250px;
    }
  }
`;

export default Recipes;
