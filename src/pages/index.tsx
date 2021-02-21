import React from "react";
import { graphql, PageProps } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ProfilePicture from "../components/profile-picture";
import Layout from "../components/layout";
import Button from "../components/button";
import Project from "../components/project";
import styled from "styled-components";
import Heading from "../components/heading";
import { BlogIndexQuery } from "../../graphql-types";

const StyledProfilePicture = styled(ProfilePicture)`
  box-shadow: -10px -10px 0px -2px #121519;
`;

const IndexPage: React.FC<PageProps<BlogIndexQuery>> = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center h-screen lg:flex-1 pt-8 lg:mr-10 lg:sticky lg:top-0 lg:pt-12 rounded-lg p-5 lg:w-96 w-full">
          <div className="flex space-x-4">
            <StyledProfilePicture className="rounded-full" />
            <div className="flex space-x-4 items-end">
              <FaGithub className="text-4xl" />
              <FaLinkedin className="text-4xl" />
            </div>
          </div>
          <Heading className="my-10">
            Hello, I'm <span className="text-orange">David Ammeraal</span>,{" "}
            <br /> a full-stack developer located in Hilversum.
          </Heading>
          <p className="text-gray-400 tracking-loose max-w-prose mb-4">
            Thank you for taking the time to have a look at my portfolio. I
            specialize in JavaScript/TypeScript development in the front-end and
            in NodeJS.
          </p>
          <div className="flex space-x-5">
            <Button className="p-4 hover:bg-orange border-2 border-orange">
              Get in contact
            </Button>
            <a href="/cv-1.0.1.pdf">
              <Button className="p-4 hover:bg-indigo-700 border-2 border-indigo-700">
                Read my C.V.
              </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-10 lg:mt-12 mb-5">
          <header>
            <p className="font-mono tracking-wide text-sm text-orange">
              projects
            </p>
            <h2 className="text-3xl font-bold tracking-widest">
              things I've worked on
            </h2>
          </header>
          {data.allMdx.edges.map((entry) => (
            <Project data={entry.node} />
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
          frontmatter {
            subtitle
            title
          }
          body
        }
      }
    }
  }
`;

export default IndexPage;
