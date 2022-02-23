import React from 'react'
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { CardGroup, Card } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

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
                  Read More...
                </AniLink>
              
               
        </Card>
    )
  })
  return servicesArray
}

  return (
    <CardGroup>
            {getServices(data)}
    </CardGroup>
  )
}

export default Services