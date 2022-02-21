import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/1.mp4"
import BusinessImage from "../assets/images/business.jpg"
import ComplianceImage from "../assets/images/compliance.jpg"
import TaxImage from "../assets/images/taxes.jpg"
import { CardGroup, Card } from "react-bootstrap"

const Hero = () => {
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
            <Card className="card">
              <Card.Img variant="top" src={BusinessImage} />
              <Card.Body>
                <Card.Title><h2>Business Services</h2></Card.Title>
                <Card.Text>
                <h5>This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.</h5>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Read More...</small>
              </Card.Footer>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={TaxImage} />
              <Card.Body>
                <Card.Title><h2>Tax Services</h2></Card.Title>
                <Card.Text>
                <h5>This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.</h5>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Read More...</small>
              </Card.Footer>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={ComplianceImage} />
              <Card.Body>
                <Card.Title><h2>Tax Compliance Services</h2></Card.Title>
                <Card.Text>
                  <h5>This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.</h5>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Read More...</small>
              </Card.Footer>
            </Card>
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
