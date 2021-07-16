/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

import HeroImage from "./heroImage";
import Title from "./title";

const MY_NAME = "Gilbert Aurel";
const MY_PITCH = "Mobile / Web App Developer";

const Hero: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        position: relative;
        grid-row: 1/2;
      `}
    >
      <HeroImage />
      <Title headline={MY_NAME} subHeadline={MY_PITCH} />
    </div>
  );
};

export default Hero;
