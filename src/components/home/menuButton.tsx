/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { COLORS, FONTS } from "constants/theme";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
}

const MenuButton: React.FC<Props> = ({ title }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(headlineRef.current, {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: 0.6,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <a
      href={`/${[title]}`}
      css={css`
        text-decoration: none;
      `}
    >
      <div
        ref={headlineRef}
        css={css`
          margin: 0;
          padding: 0;
          font-family: "Playfair Display", serif;
          font-size: ${FONTS.BODY};
          font-weight: 400;
          text-align: center;
          cursor: pointer;
          color: ${COLORS.BTN_NOT_ACTIVE_DARK};

          :hover {
            color: ${COLORS.BTN_ACTIVE_DARK};
          }
        `}
      >
        {title}
      </div>
    </a>
  );
};

export default MenuButton;
