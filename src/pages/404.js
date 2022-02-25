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
    <Container>
    <StyledContainer>
      <StyledHeading>Oops...Sorry you are lost!</StyledHeading>
      <StyledContent>
        <img src={LostImage} alt="Leano and Cruz, CPAs - Not Found" width={500} height={500} />
        <br></br>
        <p>You just hit a route that doesn&#39;t exist...please go back</p>
        <hr></hr>          
      </StyledContent>
      <AniLink paintDrip to="/" duration={1} hex="#0d1f02">Go back to the homepage</AniLink>
    </StyledContainer>
    </Container>
  </Layout>
)

export default NotFoundPage

const Container=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`