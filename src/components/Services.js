import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { CardGroup, Card } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { clamp } from 'gsap/all';

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
    <ServicesContainer>
      <ServicesHeading>Services</ServicesHeading>
        
          <CardGroup>
                  {getServices(data)}
          </CardGroup>
        
    </ServicesContainer>
  )
}

export default Services

const ServicesContainer = styled.div`
 min-height:100vh;
 background:#fff;
 color:#fff;
`
const ServicesHeading = styled.div`
   font-size: clamp(1.2rem, 5vw, 3rem);
   text-align:center;
   margin-top:1rem;
   margin-bottom:2rem;
   color:#008644;
   text-shadow: 0px 2px 2px #222;
   font-weight:bolder;
`

