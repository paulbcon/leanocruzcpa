import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LostImage from "../assets/images/lostinthewoods.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StyledContainer, StyledHeading, StyledContent } from "../components/StyledComponents";
import styled from "styled-components"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - 404: Not found" />
    
    <StyledContainer>
      <StyledHeading>Oops...Sorry you are lost!</StyledHeading>
      <StyledContent>
        <ContentContainer>
        <img src={LostImage} alt="Leano and Cruz, CPAs - Not Found" width={350} height={350} />
        <br></br>
        
        </ContentContainer>
        <ContentContainer>
        <p>You just hit a route that doesn&#39;t exist...please go back</p>
        </ContentContainer>
        <hr></hr>          
        <AniLink paintDrip to="/" duration={1} hex="#0d1f02">Go back to the homepage</AniLink>
      </StyledContent>
     </StyledContainer>
    
  </Layout>
)

export default NotFoundPage

const ContentContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`