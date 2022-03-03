import * as React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.graphCmsNewsletter
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.preview}
      />
      <h1>{post.title}</h1>
        <p
          style={{
            ...-0.20,
            display: `block`,
            marginBottom: 1,
            marginTop: -1
          }}
        >
          {post.date}
        </p>
        <ReactMarkdown source={post.body} />
        <hr
          style={{
            marginBottom: 1
          }}
        />
        
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    graphCmsNewsletter(slug: { eq: $slug }) {
      id
      title
      slug
      preview
      date
      body
    }
  }
`;
