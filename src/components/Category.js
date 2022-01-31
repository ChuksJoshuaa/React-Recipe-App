import React from "react";
import styled from "styled-components";
import { menu } from "../assets";

const Category = () => {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  // console.log(allCategories);
  return (
    <Wrapper>
      <h2>Category</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
`;

export default Category;
