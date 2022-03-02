import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ThankImage from "../assets/images/thankyou.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StyledContainer, StyledHeading, StyledContent } from "../components/StyledComponents";
import styled from "styled-components"

const ThankYouPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - 404: Not found" />
    
    <StyledContainer>
      <StyledHeading>Thank You!</StyledHeading>
      <StyledContent>
        <ContentContainer>
        <img src={ThankImage} alt="Leano and Cruz, CPAs - Thank You" width={350} height={350} />
        <br></br>
        </ContentContainer>
        <ContentContainer>
        <p>Thank you for contacting us/Leano and Cruz, CPAs. 
            We will get back in touch with you soon! Have a great day!
        </p>
        </ContentContainer>
        <hr></hr>          
        <AniLink paintDrip to="/" duration={1} hex="#0d1f02">Go back to the homepage</AniLink>
      </StyledContent>
     </StyledContainer>
    
  </Layout>
)

export default ThankYouPage

const ContentContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`