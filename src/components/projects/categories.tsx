/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

import { CATEGORY_SELECTIONS } from "assets/data/categories";
import CategoryButton from "components/projects/categoryButton";

interface Props {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const categories: React.FC<Props> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div
      css={css`
        height: 13rem;
        padding: 13rem 0;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      `}
    >
      {CATEGORY_SELECTIONS.map((category, index) => (
        <CategoryButton
          key={index}
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
};

export default categories;
