import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {StyledContainer,StyledHeading,StyledContent} from "./StyledComponents"
import { Table } from "react-bootstrap"
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
    <StyledContainer>
      <StyledHeading>Tax Forms and Publications</StyledHeading>
        <StyledContent>
            <SubP>
            The publications listed below are located on the IRS Web site and require <Link to="https://get.adobe.com/reader/">Adobe Acrobat Reader</Link> to view. Visit the Adobe Web Site to install the latest version of Acrobat Reader.
            Click a publication to view it online.
            </SubP>
            
            <Table striped responsive>
                <thead>
                    <tr>
                    <th><AniLink swipe direction="up" to="https://apps.irs.gov/app/vita/glossary.jsp">Glossary</AniLink></th>
                    <th>Description</th>
                    </tr>
                </thead>
                  <tbody>
                    {posts.nodes.map(post => (
                        <tr key={post.id}>
                            <td>
                                <AniLink swipe direction="up" to={post.url}>{post.taxformalias}</AniLink>
                            </td>
                            <td>{post.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </StyledContent>
     </StyledContainer>
  )
}

export default Publications

const SubP = styled.p`
  text-align: justify;
`
