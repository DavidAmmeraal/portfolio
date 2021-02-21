import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const ProfilePicture = (props: React.ComponentProps<typeof Img>) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mugshot.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 250, height: 250, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      {...props}
      fixed={data.file.childImageSharp.fixed}
      alt="Profile picture"
    />
  );
};

export default ProfilePicture;
