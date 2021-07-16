/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import DarkGradient from "./darkGradient";
import IMAGES from "assets/images";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
});

const HeroImage: React.FC = () => {
  const tl = gsap.timeline({ delay: 0.8 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tl.from(
      containerRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: Power3.easeOut,
      },
      "Start"
    ).from(
      "#image",
      {
        scale: 1.2,
        ease: Power3.easeOut,
        duration: 1,
      },
      0.1
    );
  }, []);

  return (
    <div
      css={css`
        position: relative;
        overflow: hidden;
      `}
    >
      <div ref={containerRef}>
        <img
          css={css`
            min-height: 25rem;
            max-width: 20rem;
            object-fit: cover;
          `}
          id="image"
          src={IMAGES.ME}
          alt="gilbert's portrait"
        />
      </div>
      <DarkGradient />
    </div>
  );
};

export default HeroImage;
