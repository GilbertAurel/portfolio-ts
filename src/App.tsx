/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

import Home from "components/home";
import Project from "components/projects";

export const App: React.FC = () => {
  // useEffect(() => {
  //   const scroller: any = document.querySelector("#test");
  //   const bodyScrollBar: any = Scrollbar.init(document.body, {
  //     damping: 0.1,
  //     delegateTo: document,
  //   });

  //   bodyScrollBar.setPosition(0, 0);
  //   bodyScrollBar.track.xAxis.element.remove();
  //   bodyScrollBar.track.yAxis.element.remove();

  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.scrollerProxy(document.body, {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         bodyScrollBar.scrollTop = value;
  //       }
  //       return bodyScrollBar.scrollTop;
  //     },
  //   });

  //   bodyScrollBar.addListener(ScrollTrigger.update);
  // }, []);

  return (
    <div
      id="test"
      css={css`
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        background-color: ${COLORS.BG_DARK};
      `}
    >
      <Home />
      <Project />
    </div>
  );
};

export default App;
