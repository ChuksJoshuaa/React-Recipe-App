import React, { useState } from "react";
import styled from "styled-components";
import { menu } from "../assets";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import slugify from "slugify";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const CategoryPage = () => {
  const [receipeItem, setReceipeItem] = useState(menu);

  const filterItems = (category) => {
    if (category === "all") {
      setReceipeItem(menu);
      return;
    }
    const newRecipes = menu.filter((item) => item.category === category);
    setReceipeItem(newRecipes);
  };

  if (receipeItem.length === 0) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="tagged">
        <div className="tags-head" data-aos={"zoom-in"}>

          {allCategories.map((category, index) => {
            const slug = slugify(category, { lower: true });
            return (
              <div key={index}>
                <div
                  className="tags-body"
                  onClick={() => filterItems(category)}
                >
                  <Link to={`/tags/${slug}`} className="a">
                    <h1>
                      {category}{" "}
                      <span style={{ color: "blueviolet" }}>
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
                    </h1>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div>
          <Tag menu={receipeItem} />
        </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  .tagged {
    max-width: 1100px;
    width: 90vw;
    margin: 0 auto;
  }

  .tags-head {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-top: 10em;
  }

  .tags-body {
    height: 100px;
    border: 1px solid silver;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: rgba(199, 217, 204, 0.2);
    text-decoration: none;
  }
  .a {
    text-decoration: none;
  }

  .tags-body h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
    font-family: "Rajdhani", sans-serif;
    color: crimson;
    line-height: 1.5;
    transition: all 0.2s linear;
  }

  .tags-body h1:hover {
    color: black;
  }

  @media screen and (max-width: 1100px) {
    .tags-head {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .tagged {
      height: auto;
      margin-bottom: 2%;
    }
  }

  @media screen and (max-width: 303px) {
    .tags-body {
      width: 85%;
      place-items: center;
    }
  }
`;

export default CategoryPage;
