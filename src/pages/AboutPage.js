import React from "react";
import icon from "../static/images/food0.jpg";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={icon} alt="icon" data-aos={"fade-right"} />
        <article data-aos={"zoom-in"}>
          <div className="title">
            <h2>About Us</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            neque sapiente necessitatibus. Ducimus, similique. Nemo repudiandae
            expedita commodi officiis iste! Nisi expedita porro nesciunt
            temporibus et voluptatem molestias eum fuga, ad sunt aperiam quod
            ducimus ut debitis delectus ea laudantium ipsam tempore velit.
            Recusandae ipsum facere aspernatur sed totam iste Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ratione, explicabo fugit!
            Dolorem sapiente perspiciatis modi beatae quae libero ullam
            doloremque.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    height: 500px;
    border-radius: 0.5rem;
  }
  article p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1.8rem;
    color: #222;
    font-family: "Rajdhani", sans-serif;
  }
  .title {
    text-align: left;
  }

  .title h2 {
    font-size: 2.4rem;
    letter-spacing: 0.125rem;
    font-weight: 400;
    color: #222;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
  }

  .underline {
    margin-left: 0;
    width: 6rem;
    height: 0.25rem;
    background: #222;
    margin-right: auto;
    margin-bottom: 3%;
    opacity: 0.8;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1200px) {
    .title h2 {
      font-size: 2rem;
      text-align: center;
    }

    .underline {
      margin: 0 auto;
    }

    article p {
      font-size: 1.2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 781px) {
    img {
      height: 300px;
    }
  }
`;

export default AboutPage;
