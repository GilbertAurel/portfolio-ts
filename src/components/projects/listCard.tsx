/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";
import React from "react";

interface Props {
  project: {
    title: string;
    category: string;
  };
}

const listCard: React.FC<Props> = ({ project: { title, category } }) => {
  return (
    <div
      css={css`
        background-color: ${COLORS.BG_DARK};
      `}
    >
      {title}
    </div>
  );
};

export default listCard;
