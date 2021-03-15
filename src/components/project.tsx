import React from "react";
import cx from "classnames";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import tw from "twin.macro";
import { ProjectFragment } from "../../graphql-types";
import { focusClasses, textClasses } from "../classes";

const Mono: React.FC<unknown> = (props) => (
  <p className="font-mono pt-3 text-xs" {...props} />
);

const A: React.FC<unknown> = ({ children, ...rest }) => (
  <a
    {...rest}
    className="mt-4 block font-semibold text-gray-200 hover:underline"
  >
    <FaExternalLinkAlt className="text-gray-200 mr-2 inline align-baseline" />
    {children}
  </a>
);

const shortcodes = {
  mono: Mono,
  a: A,
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

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ProjectFragment;
}

const Project: React.FC<ProjectProps> = ({ data, className, ...rest }) => {
  const keywords = data?.frontmatter?.keywords?.split(",") || [];

  return (
    <Box className={cx("lg:w-96", "w-full", "relative", className)} {...rest}>
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
          <h3 className={cx(textClasses["heading-2"], "inline")}>
            {data?.frontmatter?.title}
          </h3>
        </header>
        <div className="my-2.5 text-sm">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.body}</MDXRenderer>
          </MDXProvider>
        </div>
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="font-mono mr-1 text-xs px-2 bg-gray-600 rounded-md inline-block text-white leading-loose"
          >
            {keyword.trim()}
          </span>
        ))}
      </div>
    </Box>
  );
};

export const query = graphql`
  fragment Project on Mdx {
    frontmatter {
      title
      subtitle
      keywords
    }
    body
  }
`;

export default Project;
