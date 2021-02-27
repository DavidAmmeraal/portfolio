import React from "react";
import cx from "classnames";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import tw from "twin.macro";
import { ProjectFragment } from "../../graphql-types";
import { focusClasses, textClasses } from "../classes";

const Mono: React.FC<unknown> = (props) => (
  <p className="font-mono pt-3 text-xs" {...props} />
);

const shortcodes = {
  mono: Mono,
};

const Box = styled.div`
  :before {
    ${tw`rounded-lg`}
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #121519;
    top: 0;
    left: 0;
  }
`;

export type ProjectProps = {
  data: ProjectFragment;
};

const Project: React.FunctionComponent<ProjectProps> = ({ data }) => {
  return (
    <Box className={cx("lg:w-96", "w-full", "relative")}>
      <div
        className={cx(
          "relative",
          "rounded-lg",
          "p-5",
          "transition-transform",
          "duration-200",
          "transform",
          "hover:scale-105",
          "focus:scale-105",
          focusClasses
        )}
        tabIndex={0}
        style={{ backgroundColor: "#20252d" }}
      >
        <header>
          <p className={textClasses["subtitle"]}>
            {data?.frontmatter?.subtitle}
          </p>
          <h3 className={textClasses["heading-2"]}>
            {data?.frontmatter?.title}
          </h3>
        </header>
        <div className="my-2.5 text-sm">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </Box>
  );
};

export const query = graphql`
  fragment Project on Mdx {
    frontmatter {
      title
      subtitle
    }
    body
  }
`;

export default Project;
