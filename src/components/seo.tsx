/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { SeoQuery } from "../../graphql-types";
import { useStaticQuery, graphql } from "gatsby";

type SEOProps = {
  description?: string;
  lang?: string;
  title?: string;
  meta?: React.ComponentProps<typeof Helmet>["meta"];
};

const SEO: React.FC<SEOProps> = ({
  description,
  lang = "en",
  meta = [],
  title,
}) => {
  const { site }: SeoQuery = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site?.siteMetadata?.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site?.siteMetadata?.title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription || undefined,
        },
        {
          property: `og:title`,
          content: title || undefined,
        },
        {
          property: `og:description`,
          content: metaDescription || undefined,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author || undefined,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription || undefined,
        },
        ...(meta ? meta : []),
      ]}
    />
  );
};

export default SEO;
