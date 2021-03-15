import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ProfilePicture = (props: React.ComponentProps<typeof Img>) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mugshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Img
      {...props}
      fluid={data.file.childImageSharp.fluid}
      alt="Profile picture"
    />
  );
};

export default ProfilePicture;
