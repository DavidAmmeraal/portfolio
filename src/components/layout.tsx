/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Container from "./container";

const Layout: React.FC = (props) => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "bg-gray-900 dark text-white overflow-x-hidden",
        }}
      />
      <Container>{props.children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
