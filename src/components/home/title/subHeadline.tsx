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

const SubHeadline: React.FC<IProps> = ({ subHeadline }) => {
  const subHeadlineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.from(subHeadlineRef.current, {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: 0.6,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <p
      ref={subHeadlineRef}
      css={css`
        margin: 0;
        padding: 0;
        font-family: "Noto Sans", sans-serif;
        font-size: ${FONTS.BODY};
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
      {subHeadline}
    </p>
  );
};

export default SubHeadline;
