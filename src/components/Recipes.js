import React, { useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { menu } from "../assets";
import { Link } from "react-router-dom";
// import slugify from "slugify";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const Recipes = () => {
  const [recipeItem, setReceipeItem] = useState(menu);

  const filterItems = (category) => {
    if (category === "all") {
      setReceipeItem(menu);
      return;
    }
    const newRecipes = menu.filter((item) => item.category === category);
    setReceipeItem(newRecipes);
  };

  if (recipeItem.length === 0) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="section">
        <h1>Local Recipes</h1>
        <p className="underline"></p>
        <div className="center">
          <div className="butt" data-aos={"fade-right"}>
            <h1>Category</h1>
            <div className="bobbi">
              {allCategories?.map((category, index) => {
                return (
                  <button
                    key={index}
                    className="btn"
                    onClick={() => filterItems(category)}
                  >
                    {category}
                    <span style={{ color: "crimson" }}>
                      (
                      {`${
                        category === "all"
                          ? 9
                          : category === "shakes"
                          ? 3
                          : category === "lunch"
                          ? 2
                          : category === "breakfast"
                          ? 3
                          : 1
                      }`}
                      )
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="aside" data-aos={"zoom-in"}>
            {recipeItem.map((item) => {
              const { id, title, img, time, cook } = item;
              // const slug = slugify(title, { lower: true });
              return (
                <div key={id} className="baby">
                  <Link to={`/recipes/${id}`}>
                    <img src={img} alt={title} />
                  </Link>
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
  margin-top: 3em;
  .section {
    height: 900px;
    width: 100%;
  }

  .section h1 {
    font-size: 2.6rem;
    text-align: center;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: #222;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
  }

  .butt h1 {
    letter-spacing: 0.125rem;
    font-weight: 400;
    color: crimson;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    margin-top: -0.08rem;
    font-size: 1.8rem;
    position: relative;
    right: 11%;
    text-align: center;
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
  .bobbi {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .bobbi .btn {
    text-transform: uppercase;
    background: #fff;
    color: #222;
    letter-spacing: 0.125rem;
    display: inline-block;
    font-weight: 800;
    transition: all 0.2s linear;
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin: 10px;
    width: 60%;
    border: 1px solid silver;
  }

  @media screen and (max-width: 1200px) {
    .bobbi {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .bobbi .btn {
      width: 90%;
      margin-left: 3%;
      flex-wrap: wrap;
    }

    .butt h1 {
      right: 0;
      margin-top: 2rem;
      text-align: center;
      margin-bottom: 3%;
    }
  }

  @media screen and (max-width: 527px) {
    .bobbi .btn {
      place-items: center;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 10px;
    }
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
    width: 210px;
    height: 150px;
    border-radius: 0.5rem;
  }

  .baby:hover img {
    opacity: 0.8;
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
    margin-top: -1rem;
    color: #222;
    letter-spacing: 0.125rem;
    margin-bottom: 0;
    font-family: "Rajdhani", sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .baby .span {
    color: crimson;
    font-size: 2em;
    opacity: 0.7;
  }

  /* @media screen and (max-width: 1273px) {
    margin-top: 40rem;
  } */

  @media screen and (max-width: 1154px) {
    .section {
      height: auto;
      margin-bottom: 5%;
    }

    .section h1 {
      font-size: 2.3rem;
    }
    .center {
      display: flex;
      flex-direction: column;
      margin: 10px;
    }

    .butt h1 {
      font-size: 1.9rem;
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

    .center {
      place-items: center;
    }
  }

  @media screen and (max-width: 300px) {
    .baby img {
      width: 220px;
    }
    .aside {
      place-items: center;
    }
  }
`;

export default Recipes;
