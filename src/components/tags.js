import React from "react";
import styled from "styled-components";
import { menu } from "../assets";
import { Link, useParams } from "react-router-dom";

const TagsPage = () => {
  const { slug } = useParams();

  const yes = (slug) => {
    if (slug !== "all") {
      const receipe = menu.filter((item) => item.category === slug);
      return receipe;
    } else {
      return menu;
    }
  };

  return (
    <Wrapper>
      <article className="article-result">
        <h1>{slug}</h1>
        <p className="underline"></p>
        <div className="article-head">
          {yes(slug).map((item) => {
            const { id, title, img, time, cook } = item;
            return (
              <aside key={id} className="article-container">
                <Link to={`/recipes/${id}`}>
                  <img src={img} alt={title} />
                </Link>
                <h2>{title}</h2>
                <p>
                  Prep: {time}min
                  <span className="span">|</span>
                  <span>Cook: {cook}min</span>
                </p>
              </aside>
            );
          })}
        </div>
        <Link to="/category" className="btn">
          GO BACK
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 10em;
  height: 100vh;

  .article-result h1 {
    font-size: 2.6rem;
    text-align: center;
    letter-spacing: 0.125rem;
    font-weight: 400;
    color: #222;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
  }

  .btn {
    display: block;
    width: 148px;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 5%;
  }

  .article-result .underline {
    width: 6rem;
    height: 0.25rem;
    background: #222;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
    opacity: 0.8;
  }
  .article-result {
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    /* height: 950px; */
  }

  .article-head {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .article-container img {
    width: 270px;
    min-width: 200px;
    height: 200px;
    border-radius: 0.5rem;
  }

  .article-container:hover img {
    opacity: 0.8;
  }

  .article-container h2 {
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    font-family: "Amiri", serif;
    margin-bottom: 3%;
    color: crimson;
  }

  .article-container p {
    margin-top: -1rem;
    color: #222;
    letter-spacing: 0.125rem;
    margin-bottom: 0;
    font-family: "Rajdhani", sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .article-container .span {
    color: crimson;
    font-size: 2em;
    opacity: 0.7;
  }
  @media screen and (max-width: 1249px) {
    .article-result {
      margin-bottom: 3%;
      height: auto;
    }

    .article-head {
      place-items: center;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .article-container img {
      width: 100%;
    }
  }
  @media screen and (max-width: 743px) {
    .article-head {
      place-items: center;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 637px) {
    .article-head {
      grid-template-columns: 1fr;
    }
  }
`;

export default TagsPage;
