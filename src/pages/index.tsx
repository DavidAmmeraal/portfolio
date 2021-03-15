import React, { useEffect, useState } from "react";
import { graphql, PageProps } from "gatsby";
import cx from "classnames";
import ProfilePicture from "../components/profile-picture";
import Layout from "../components/layout";
import Button from "../components/button";
import Project from "../components/project";
import styled from "styled-components";
import { BlogIndexQuery } from "../../graphql-types";
import SocialMedia from "../components/social-media";
import { textClasses } from "../classes";
import SEO from "../components/seo";

const StyledProfilePicture = styled(ProfilePicture)`
  box-shadow: -10px -10px 0px -2px #121519;
`;

const IndexPage: React.FC<PageProps<BlogIndexQuery>> = ({ data }) => {
  const openEmail = () => {
    window.location.href = `mailto:${atob("aW5mb0BkYXZpZGFtbWVyYWFsLm5s")}`;
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <Layout>
      <SEO title="A full stack developer" />
      <div className={cx("flex flex-col lg:flex-row")}>
        <div
          className={cx(
            "flex",
            "flex-col",
            "lg:max-h-screen",
            "pt-8",
            "rounded-lg",
            "w-full",
            "space-y-10",
            "lg:flex-1",
            "lg:mr-10",
            "lg:sticky",
            "lg:top-0",
            "lg:pt-12",
            "lg:w-96",
            "lg:justify-center",
            "lg:p-5",
            "transform-gpu ease-in-out",
            show
              ? "duration-500 opacity-1 translate-x-0"
              : "opacity-0 -translate-x-full"
          )}
        >
          <div className="flex flex-col lg:flex-row space-x-4 items-center md:items-start">
            <StyledProfilePicture className="w-1/3 rounded-full" />
          </div>
          <h1 className={textClasses["display-1"]}>
            Hello, I'm <span className="text-orange-500">David Ammeraal</span>,{" "}
            <br /> a full-stack developer located in Hilversum.
            <SocialMedia className="lg:hidden" />
          </h1>
          <p className="text-gray-300 tracking-loose max-w-prose mb-4">
            Thank you for taking the time to have a look at my portfolio. I
            specialize in JavaScript/TypeScript development in the front-end and
            in NodeJS.
          </p>
          <div className="flex space-x-5 flex-wrap">
            <Button color="orange" tabIndex={0} onClick={openEmail}>
              Get in contact
            </Button>
            <Button
              color="indigo"
              href="/20210225_davidammeraal-cv.pdf"
              tabIndex={0}
            >
              Read my C.V.
            </Button>
            <SocialMedia className="hidden lg:flex" />
          </div>
        </div>
        <div className="flex flex-col mt-12 mb-5">
          <header
            className={cx(
              "mb-10",
              "transform-gpu ease-in-out",
              show
                ? "duration-500 opacity-1 translate-y-0"
                : "opacity-0 -translate-y-full"
            )}
          >
            <p className={textClasses["subtitle"]}>projects</p>
            <h2 className={textClasses["heading-1"]}>things I've worked on</h2>
          </header>
          {data.allMdx.edges.map((entry, index) => (
            <Project
              data={entry.node}
              className={cx(
                "transform-gpu ease-in-out mb-5",
                show
                  ? "duration-500 opacity-1 translate-x-0"
                  : "opacity-0 translate-x-full"
              )}
              style={show ? { transitionDelay: `${0.1 * index}s` } : {}}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(sort: { fields: fileAbsolutePath }) {
      edges {
        node {
          id
          ...Project
        }
      }
    }
  }
`;

export default IndexPage;
