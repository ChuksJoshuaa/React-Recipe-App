import React from "react";
import styled from "styled-components";
import { useReceipesContext } from "../contexts/receipes_context";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { FaSearch } from "react-icons/fa";

const RecipesPage = () => {
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
        <h1>Recipes</h1>
        <p className="underline"></p>
        <div className="oga">
          {products.slice(2, 34).map((product) => {
            const { id, title, img, url } = product;
            return (
              <aside key={id}>
                <img src={img} alt={title} />
                <a href={url} className="link">
                  <FaSearch />
                </a>
                <h2 key={id}>{title}</h2>
              </aside>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
  .top h1 {
    font-size: 3rem;
    text-align: center;
    letter-spacing: 0.125rem;
    font-weight: 400;
    color: #222;
    font-family: "Racing Sans One", cursive;
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

  @media screen and (max-width: 1273px) {
    .oga {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    aside img {
      width: 100%;
    }
  }
`;

export default RecipesPage;
