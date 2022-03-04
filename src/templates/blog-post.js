import * as React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {StyledHeading, StyledContent, StyledContainer} from "../components/StyledComponents"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.graphCmsNewsletter
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const  { previous,next } = pageContext

      
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.preview}
      />
      <StyledContainer>
      <StyledHeading>{post.title}</StyledHeading>
        <StyledContent>
          {post.date}
        
       
        <ReactMarkdown>{post.body}</ReactMarkdown>
     
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            color:'#ffffff'
          }}
        >
          <li key={"prev"+post.id}>
            {previous && (
              <Link to={`/newsletter/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li key={"next"+post.id}>
            {next && (
              <Link to={`/newsletter/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>

        <hr/>
        
        
        </StyledContent>
        </StyledContainer>
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
