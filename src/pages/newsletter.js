import * as React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Newsletter = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allGraphCmsNewsletter.edges
  
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <ol style={{ listStyle: `none` }}>
      {posts.map(({ node }) => {
          const title = node.title || node.slug;
          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: 0.5
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.date}</small>
              <p>{node.preview}</p>
            </div>
          );
        })}
      </ol>
    </Layout>
  )
}

export default Newsletter

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGraphCmsNewsletter {
      edges {
        node {
          title
          slug
          date
          preview
          body
        }
      }
    }
  }
`;