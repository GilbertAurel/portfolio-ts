/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { COLORS, FONTS } from "constants/theme";
import { Props as IProps } from "./index";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
});

const Headline: React.FC<IProps> = ({ headline }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(headlineRef.current, {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: 0.3,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <h1
      ref={headlineRef}
      css={css`
        margin: 0;
        padding: 0;
        font-family: "Playfair Display", serif;
        font-size: ${FONTS.TITLE};
        font-weight: 400;
        color: ${COLORS.TEXT_BRIGHT};
        text-align: center;
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      `}
    >
      {headline}
    </h1>
  );
};

export default Headline;
