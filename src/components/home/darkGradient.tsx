/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

const DarkGradient: React.FC = () => {
  return (
    <div
      css={css`
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(
          180deg,
          rgba(14, 18, 21, 0) 23.67%,
          #0e1215 93.49%
        );
      `}
    />
  );
};

export default DarkGradient;
