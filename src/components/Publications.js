import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const Publications = () => {
    const {posts} = useStaticQuery(graphql`
     {
       posts: allGraphCmsTaxFormPublication {
        nodes {
          id
          description
          url
          taxformalias
        }
      }
    }
  `)

 
  return (
    <Container>
      <Heading>Tax Forms and Publications</Heading>
        <Content>
            <table>
                <thead>
                    <th>Glossary</th>
                    <th>Description</th>
                </thead>
                  <tbody>
                    {posts.nodes.map(post => (
                        <tr key={post.id}>
                            <td>
                                <AniLink swipe direction="up" to={post.url}>{post.taxformalias}</AniLink></td>
                            <td>{post.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Content>
     </Container>
  )
}

export default Publications

const Container = styled.div`
 min-height:100vh;
 background:#fff;
 color:#fff;
`
const Heading = styled.div`
   font-size: clamp(1.2rem, 5vw, 3rem);
   text-align:center;
   margin-top:1rem;
   margin-bottom:2rem;
   color:#008644;
   text-shadow: 0px 2px 2px #222;
   font-weight:bolder;
`
const Content = styled.div`
 color:#000;
`
