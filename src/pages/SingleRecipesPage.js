import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { menu } from "../assets";
import { FaClock, FaUser, FaUserClock } from "react-icons/fa";

const SingleRecipesPage = () => {
  const { id } = useParams();
  const receipe = menu.find((item) => item.id === parseInt(id));

  return (
    <Wrapper>
      <article>
        <section>
          <img src={receipe.img} alt={receipe.title} />
          <div className="main">
            <h1>{receipe.title}</h1>
            <p>{receipe.desc}</p>
            <div className="aside">
              <div className="aside-main">
                <div className="deal">
                  <div className="dealer">
                    <FaClock />
                  </div>
                  <p> PrepTime:</p>
                  <p className="peel">{receipe.time} min</p>
                </div>
                <div className="deal">
                  <div className="dealer">
                    <FaUserClock />
                  </div>
                  <p>CookTime:</p>
                  <p className="peel">{receipe.cook} min</p>
                </div>
                <div className="deal">
                  <div className="dealer">
                    <FaUser />
                  </div>
                  <p className="dealers">Serving:</p>
                  <p className="peela">{receipe.serving}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mane">
          <div className="main-body">
            <div className="step-main">
              <h1>Instructions</h1>
              <div className="step-body">
                <div className="step">
                  STEP 1:
                  <div></div>
                </div>
                <p>{receipe.instructions[0]}</p>
              </div>
              <div className="step-body">
                <div className="step">
                  STEP 2:
                  <div></div>
                </div>
                <p>{receipe.instructions[1]}</p>
              </div>
              <div className="step-body">
                <div className="step">
                  STEP 3:
                  <div></div>
                </div>
                <p>{receipe.instructions[2]}</p>
              </div>
              <div className="step-body">
                <div className="step">
                  STEP 4:
                  <div></div>
                </div>
                <p>{receipe.instructions[3]}</p>
              </div>
            </div>
            <div className="ingret">
              <div className="ingret-main">
                <h1>Ingredients</h1>
                <div className="ingret-body">
                  <p>{receipe.ingredients[0]}</p>
                  <p>{receipe.ingredients[1]}</p>
                  <p>{receipe.ingredients[2]}</p>
                </div>
              </div>
              <div className="tools">
                <div className="tools-main">
                  <h1>Tools</h1>
                  <div className="tools-body">
                    <p>{receipe.tools[0]}</p>
                    <p>{receipe.tools[1]}</p>
                    <p>{receipe.tools[2]}</p>
                    <p>{receipe.tools[3]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 5%;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-top: 8em;
  }
  section img {
    width: 550px;
    height: 350px;
    border-radius: 0.5rem;
  }

  .main h1 {
    padding: 0 1rem;
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
    margin-bottom: 1.8rem;
    font-weight: bold;
    color: crimson;
    font-family: "Open Sans", sans-serif;
  }

  .main p {
    margin-top: 1%;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.125rem;
    font-family: "Rajdhani", sans-serif;
    color: #222;
    line-height: 1.5;
    margin: 10px;
    margin-bottom: 5%;
    text-align: left;
  }

  .aside {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  .deal p {
    font-size: 1.3em;
  }

  .dealer {
    font-size: 2rem;
    padding: 0 2rem;
  }
  .dealers {
    font-size: 2rem;
    padding: 0 1rem;
  }

  .aside-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    margin: 2.5rem 0;
  }

  .deal p {
    font-size: 1.3rem;
    margin-top: 0;
    margin: 0;
    font-weight: 600;
  }

  .peel {
    padding: 0 0.7rem;
  }

  .peela {
    padding: 0 2.8rem;
  }

  @media screen and (max-width: 1180px) {
    section {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }

    section img {
      width: 100%;
      margin-top: 10em;
    }

    .main h1 {
      font-size: 2rem;
    }

    .main p {
      width: 100%;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 781px) {
    section img {
      height: 300px;
    }

    .aside {
      /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
      grid-template-columns: 1fr 1fr;
      place-items: center;
    }
  }

  /* Main Section */
  .mane {
    margin-top: 5%;
    height: 600px;
    margin-bottom: 7%;
    width: 100%;
  }

  .main-body {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 10px;
  }

  .step-main h1 {
    padding: 0 1rem;
    font-size: 2.5rem;
    color: crimson;
    letter-spacing: 0.25rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }

  .step-body .step {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: center;
    color: blueviolet;
    letter-spacing: 0.125rem;
    margin-bottom: 0.2%;
    font-family: "Amiri", serif;
    font-weight: 600;
    padding: 0 1rem;
    font-size: 2rem;
  }

  .step-body .step div {
    height: 1px;
    background: gray;
    width: 80%;
  }
  .step-body p {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.125rem;
    font-family: "Rajdhani", sans-serif;
    color: #222;
    line-height: 1.5;
    margin: 10 0 10px 10px;
    padding: 0 1rem;
    margin-bottom: 1%;
    text-align: left;
    width: 82%;
  }

  .spanner {
    border-bottom: 1px solid black;
  }

  .ingret {
    margin-top: 3%;
    margin-bottom: 4%;
  }

  .ingret-main h1 {
    padding: 0 1rem;
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
    margin-bottom: 1rem;
    color: crimson;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }

  .ingret-body p {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.125rem;
    font-family: "Rajdhani", sans-serif;
    color: #222;
    line-height: 1.5;
    margin: 10 0 10px 10px;
    padding: 0 1rem;
    margin-bottom: 3%;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid gray;
    text-align: left;
  }

  .tools-main h1 {
    padding: 0 1rem;
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: crimson;
    font-family: "Open Sans", sans-serif;
  }

  .tools-body p {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.125rem;
    font-family: "Rajdhani", sans-serif;
    color: #222;
    line-height: 1.5;
    margin: 10 0 10px 10px;
    padding: 0 1rem;
    margin-bottom: 3%;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid gray;
    text-align: left;
  }

  @media screen and (max-width: 1180px) {
    .step-body p {
      font-size: 1.2rem;
    }

    .ingret-body p {
      font-size: 1.2rem;
    }

    .tools-body p {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 990px) {
    .mane {
      height: auto;
      margin-bottom: 5%;
    }
    .main-body {
      grid-template-columns: 1fr;
      place-items: center;
    }

    .step-body .step div {
      width: 90%;
    }

    .step-body p {
      width: 93%;
    }

    .ingret {
      display: grid;
      place-items: left;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5em;
      text-align: left;
    }
  }

  @media screen and (max-width: 490px) {
    .ingret {
      place-items: center;
      grid-gap: 1em;
      grid-template-columns: 1fr;
    }
  }
`;

export default SingleRecipesPage;
