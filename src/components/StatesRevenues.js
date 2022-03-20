import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {StyledContainer,StyledHeading,StyledContent} from "./StyledComponents"
import { Table } from "react-bootstrap"
import styled from "styled-components"

const StatesRevenues = () => {
    const {posts} = useStaticQuery(graphql`
     {
       posts:  allGraphCmsDeptRevenue(sort: {fields: revenueName, order: ASC}) {
    nodes {
      address
      email
      id
      phone
      revenueName
      url
    }
  }
    }
  `)

 
  return (
    <StyledContainer>
      <StyledHeading>States Tax Links</StyledHeading>
        <StyledContent>
            <SubP>
               Department of Revenue from 50 U.S. States.
            </SubP>
            
            <Table striped responsive>
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    </tr>
                </thead>
                  <tbody>
                    {posts.nodes.map((post,i) => (
                      
                        <tr key={post.id}>
                           
                            <td>
                                <AniLink swipe direction="up" to={post.url}> {post.revenueName}</AniLink>

                            </td>
                            <td>{post.address}</td>
                            <td>{post.phone}</td>
                            <td>{post.email}</td>

                           
                        </tr>
                      
                    ))}
                </tbody>
            </Table>
        </StyledContent>
     </StyledContainer>
  )
}

export default StatesRevenues

const SubP = styled.p`
  text-align: justify;
`
