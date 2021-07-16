/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

import ListCard from "components/projects/listCard";

interface Props {
  projects: {
    title: string;
    category: string;
  }[];
}

const lists: React.FC<Props> = ({ projects }) => {
  return (
    <div
      css={css`
        justify-self: stretch;
        padding: 10rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-auto-rows: minmax(250px, 400px);
        gap: 3rem;
      `}
    >
      {projects.map((project, index) => (
        <ListCard key={index} project={project} />
      ))}
    </div>
  );
};

export default lists;
