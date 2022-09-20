import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  StyledHeading,
  StyledContent,
  StyledContainer,
} from "../components/StyledComponents"

const Newsletter = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allGraphCmsNewsletter.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <StyledContainer>
          <StyledContent>
            <p>
              No blog posts found. Add markdown posts to "content/blog" (or the
              directory you specified for the "gatsby-source-filesystem" plugin
              in gatsby-config.js).
            </p>
          </StyledContent>
        </StyledContainer>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <StyledContainer>
        <StyledHeading>Newsletters</StyledHeading>
        <StyledContent>
          <ol style={{ listStyle: `none` }}>
            {posts.reverse().map(({ node }) => {
              const title = node.title || node.slug
              return (
                <div key={node.id}>
                  <h3
                    style={{
                      marginBottom: 0.5,
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.date}</small>
                  <p>{node.preview}</p>
                </div>
              )
            })}
          </ol>
        </StyledContent>
      </StyledContainer>
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
        next {
          title
          slug
        }
        previous {
          title
          slug
        }
        node {
          title
          slug
          date
          preview
          body
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        itemCount
        pageCount
        perPage
      }
    }
  }
`
