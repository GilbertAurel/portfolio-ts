/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Hero from "./hero";
import Menu from "./menu";

gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
});

export const Home: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(componentRef.current, {
      visibility: "visible",
    });
  }, []);

  return (
    <div
      ref={componentRef}
      css={css`
        min-height: 100vh;
        grid-column: 1/5;
        display: grid;
        grid-template-rows: 4fr 1fr;
        justify-items: center;
        align-items: center;
        visibility: hidden;
      `}
    >
      <Hero />
      <Menu />
    </div>
  );
};

export default Home;
