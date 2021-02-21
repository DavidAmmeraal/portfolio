import React from "react";
import cx from "classnames";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import tw from "twin.macro";
import { ProjectFragment } from "../../graphql-types";

const Mono: React.FC<unknown> = (props) => (
  <p className="font-mono pt-3 text-xs" {...props} />
);

const shortcodes = {
  mono: Mono,
};

const Box = styled.div`
  :hover:before {
    transform: scale(1.05);
  }

  :before {
    ${tw`rounded-lg`}
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #121519;
    transition: transform;
    transition-duration: 0.2s;
    top: 0;
    left: 0;
  }
`;

export type ProjectProps = {
  data: ProjectFragment;
};

const Project: React.FunctionComponent<ProjectProps> = ({ data }) => {
  return (
    <Box className="lg:w-96 w-full relative">
      <div
        className={cx(
          "relative",
          "rounded-lg",
          "p-5",
          "transition-transform",
          "duration-200",
          "transform",
          "hover:scale-105",
          "hover:translate-x-2",
          "hover:translate-y-2"
        )}
        //style={{ backgroundColor: "#20252d"}}
      >
        <header>
          <p className="font-mono tracking-wide text-sm text-orange">
            {data?.frontmatter?.subtitle}
          </p>
          <h3 className="text-xl font-bold tracking-widest">
            {data?.frontmatter?.title}
          </h3>
        </header>
        <div className="text-gray-400 my-2.5 text-sm">
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
