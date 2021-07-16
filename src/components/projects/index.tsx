/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";
import React, { useEffect, useState } from "react";

import Categories from "components/projects/categories";
import Lists from "components/projects/lists";
import PROJECTS_DATA from "assets/data/projects";

const initialData = PROJECTS_DATA.filter((data) => data.category === "all");

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [projects, setProjects] = useState(initialData);

  useEffect(() => {
    setProjects(
      PROJECTS_DATA.filter((data) => data.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div
      css={css`
        min-height: 100vh;
        grid-column: 1/5;
        display: grid;
        grid-template-columns: minmax(250px, 1fr) 3fr;
        justify-items: center;
        position: relative;
        background-color: ${COLORS.BG_BRIGHT};
      `}
    >
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Lists projects={projects} />
    </div>
  );
};

export default Index;
