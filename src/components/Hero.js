import React from "react"
import styled from "styled-components"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Video from "../assets/videos/1.mp4"
import { CardGroup, Card, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"


const Hero = () => {
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
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" loop muted autoPlay playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Grow your business with us.</HeroH1>
          <HeroP>
            When it comes to managing the opportunities, various risks, and
            different situations regarding your business, we are here to help.
          </HeroP>
          
          <CardGroup>
            {getServices(data)}
          </CardGroup>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  color: #fff;
  position: relative;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc() (100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 2rem);
  margin-bottom: 2rem;
`
const NavLink = styled(Link)`
  color:white;
  display:flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor:pointer;
  &:hover {
    color:yellow;
  }
`

