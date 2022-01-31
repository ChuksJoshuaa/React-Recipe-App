import React from "react";
import styled from "styled-components";
import food2 from "../static/images/food2.jpg";

const Main = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h2>Simply Recipes</h2>
        <p>No Fluff, Just Recipes</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 500px;
  background: linear-gradient(rgba(63, 208, 212, 0.4), rgba(0, 0, 0, 0.7)),
    url(${food2}) center/cover no-repeat;
  background-position: center;
  background-size: cover;
  .hero {
    display: grid;
    place-items: center;
    text-align: center;
    position: relative;
    top: 27%;

    p {
      font-size: 2em;
      font-weight: 450;
      letter-spacing: 0.125rem;
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      font-family: "Amiri", serif;
      margin-bottom: 3%;
    }

    h2 {
      font-size: 80px;
      line-height: 60px;
      letter-spacing: 0.25rem;
      font-weight: 500;
      color: rgb(255, 255, 255);
      font-family: "Racing Sans One", cursive;
      margin-bottom: 2%;
    }

    @media only screen and (max-width: 919px) {
      h2 {
        font-size: 65px;
        line-height: 40px;
        margin-top: 0px;
        margin-bottom: 5%;
      }
      p {
        font-size: 30px;
      }
    }

    @media screen and (max-width: 480px) {
      h2 {
        font-size: 40px;
      }

      p {
        font-size: 20px;
      }
    }

    @media screen and (max-width: 299px) {
      p {
        font-size: 20px;
      }
      h2 {
        font-size: 30px;
      }
    }
  }
`;

export default Main;
