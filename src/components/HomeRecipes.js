import React from "react";
import styled from "styled-components";
import { useReceipesContext } from "../contexts/receipes_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import { FaSearch } from "react-icons/fa";
import Config from "./Config";

const HomeRecipes = () => {
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useReceipesContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    <Error />;
  }
  return (
    <Wrapper>
      <div className="top">
        <h1>Top Recipes</h1>
        <p className="underline"></p>
        <div className="oga">
          {products.slice(2, 6).map((product, index) => {
            return <Config key={index} {...product} />;
          })}
        </div>
      </div>
      <Link to="/recipes" className="btn">
        All Recipes
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  .top h1 {
    font-size: 2.6rem;
    text-align: center;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: #222;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
  }

  .top .underline {
    width: 6rem;
    height: 0.25rem;
    background: #222;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
    opacity: 0.8;
  }
  .oga {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    margin-top: 4%;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    margin-top: 4%;
  }

  @media screen and (max-width: 1273px) {
    .oga {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .top h1 {
      font-size: 2.3rem;
    }
  }
`;

export default HomeRecipes;
