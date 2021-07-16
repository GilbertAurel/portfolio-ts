/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

import RenderHeadline from "./headline";
import RenderSubHeadline from "./subHeadline";

export interface Props {
  headline?: string;
  subHeadline?: string;
}

const Title: React.FC<Props> = ({
  headline = "Gilbert Aurel",
  subHeadline,
}) => {
  return (
    <div
      css={css`
        min-width: max-content;
        position: absolute;
        bottom: -3rem;
      `}
    >
      <RenderHeadline headline={headline} />
      <RenderSubHeadline subHeadline={subHeadline} />
    </div>
  );
};

export default Title;
