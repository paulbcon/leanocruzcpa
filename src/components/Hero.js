import React from "react"
import styled from "styled-components"
import Link from 'gatsby-plugin-transition-link'
import Video from "../assets/videos/1.mp4"
import "@fontsource/eb-garamond"
import Typewriter from "typewriter-effect"

const Hero = () => {
  
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" loop muted autoPlay playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1
            data-sal="zoom-in"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
          >
            Leano and Cruz, CPAs
          </HeroH1>
          
          <HeroH2>
          <Typewriter
             onInit={(typewriter) => {
               typewriter
               .typeString('<strong><span style="color:#27ae60; text-shadow: 0px 1px 1px #fff;">Tax</span></strong> Services')
               .pauseFor(1000)
               .deleteChars(8)
               .typeString('and <span style="color:#27ae60; text-shadow: 0px 1px 1px #fff;">Accounting</span> Services')
               .start();
             }}  
          />
          </HeroH2>
                   
          <HeroP
            data-sal="slide-down"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
          >
            Grow your business with us. When it comes to managing the opportunities, various risks, and
            different situations regarding your business, we are here to help.
          </HeroP>
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
  /* Darker text on medium background */
  color: #fff;
	text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
	letter-spacing: 5px;
  font-family:"EB Garamond !important";
`
const HeroH2 = styled.h2`
  font-size:clamp(1.2rem,3vw, 2.2rem);
  letter-spacing:2px;
  font-family:"EB Garamond !important";
  font-style:italic;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 1vw, 1.7rem);
  margin-bottom: 1.5rem;
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

