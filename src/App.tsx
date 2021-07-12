/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";
import React from "react";

import Home from "components/home";

export const App: React.FC = () => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(0%, 100%);
        background-color: ${COLORS.BG_DARK};
        overflow: hidden;
      `}
    >
      <Home />
    </div>
  );
};

export default App;
