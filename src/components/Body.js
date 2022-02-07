import React from "react";
import styled from "styled-components";
import HomeRecipes from "./HomeRecipes";

const Body = () => {
  return (
    <Wrapper>
      <div className="head-container">
        <HomeRecipes />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3%;
  height: 500px;
  width: 100%;

  .head-container {
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
  }

  @media screen and (max-width: 1300px) {
    height: auto;
    margin-bottom: 2%;
  }
`;

export default Body;
