/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

import MenuButton from "./menuButton";

const Menu: React.FC = () => {
  return (
    <div
      css={css`
        justify-self: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15rem;
      `}
    >
      <MenuButton title="profile" />
      <MenuButton title="projects" />
      <MenuButton title="social" />
    </div>
  );
};

export default Menu;
