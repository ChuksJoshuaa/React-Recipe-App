import React from "react";
import photo from "../static/images/food2";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={photo} alt="photo" />
        <article>
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
            Recusandae ipsum facere aspernatur sed totam iste!
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
    border-radius: var(--radius);
    height: 500px;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #222;
    font-family: "Racing Sans One", cursive;
  }
  .title {
    text-align: left;
  }

  .title h2 {
    font-size: 2rem;
    letter-spacing: 0.125rem;
    font-weight: 500;
    color: gray;
    text-transform: uppercase;
    font-family: "Amiri", serif;
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
`;

export default AboutPage;
