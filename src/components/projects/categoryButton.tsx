/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";
import React from "react";

interface Props {
  category: {
    name: string;
    tag: string;
  };
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryButton: React.FC<Props> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <p
      css={css`
        margin: 0;
        padding: 0;
        position: relative;
        font-family: "Noto Sans", sans-serif;
        font-size: ${FONTS.BODY};
        font-weight: 400;
        cursor: pointer;
        color: ${category.tag === selectedCategory
          ? COLORS.BTN_ACTIVE
          : COLORS.BTN_NOT_ACTIVE};
        transition: all 0.3s;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      `}
      onClick={() => setSelectedCategory(category.tag)}
    >
      {category.name}
    </p>
  );
};

export default CategoryButton;
