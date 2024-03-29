import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { CardGroup, Card } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { StyledContainer, StyledHeading, StyledContent } from './StyledComponents';
import styled from 'styled-components';

const Services = () => {
  const data = useStaticQuery(graphql`
  query ServicesQuery {
    allServicesJson {
    edges {
      node {
        text
        title
        id
        img {
          id
          childImageSharp {
            fluid {
              src
            }
          }
        }
        alt
        startprice
        link
      }
    }
  }
}

  `)

function getServices(data) {
  const servicesArray = []
  data.allServicesJson.edges.forEach((item, i) => {
    servicesArray.push(
      <Card className="card" key={i}>
              <Card.Img variant="top" src={item.node.img.childImageSharp.fluid.src}
                alt={item.node.alt} />
              <Card.Body>
                <Card.Title><h2>{item.node.title}</h2></Card.Title>
                <CardSubTitle>Starting at <strong>{item.node.startprice}</strong></CardSubTitle>
                <Card.Text>
                {item.node.text}
                </Card.Text>
              </Card.Body>
              
                <AniLink paintDrip to={item.node.link} hex="#0d1f02">
                  Continue Reading...
                </AniLink>
              
               
        </Card>
    )
  })
  return servicesArray
}

  return (
    <StyledContainer>
      <StyledHeading>Services</StyledHeading>
        <StyledContent>
          <CardCenter>
          <CardGroup>
                  {getServices(data)}
          </CardGroup>
          </CardCenter>
        </StyledContent>        
    </StyledContainer>
  )
}

export default Services

const CardCenter = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`
const CardSubTitle = styled.div`
 color: color: #008644;
`
