import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StyledContainer, StyledHeading, StyledContent } from './StyledComponents';
import { StaticImage } from 'gatsby-plugin-image';

const OurTeam = () => {

  return (
    <StyledContainer>
      <StyledHeading>Our Team</StyledHeading>
      <StyledContent>
      <h4>Darius Cruz, CPA</h4>
      <StaticImage src="../assets/images/dacruz.png" width={150} height={150} alt="Darius Cruz,CPA" />
       <p>
       Darius graduated with a Bachelor Degree in Accountancy from San Beda University-Manila, Philippines.  He has more than 20 years of professional experience that includes audit and assurance, accounting and bookkeeping, tax return preparation and consultation, tax compliance, and financial statement preparation.  Prior to moving to the United States, he was an Audit Senior Manager at Punongbayan & Araullo (now P&A Grant Thornton).  After moving to the United States, Darius acted as a Tax Manager at local CPA firms in Santa Monica and Camarillo.
       </p>
       <p>
       His industry knowledge includes manufacturing, food and beverage, retail and distribution, professional services, medical and dental practices, fund management, car rental and transportation, entertainment, and real estate to name a few. 
       </p>
       <p>
       Darius is a licensed CPA in the State of California.
       </p>
        <hr>
        </hr>
        <AniLink swipe direction="up" to="/">Go back to Home Page</AniLink>
    </StyledContent>  
        
    </StyledContainer>
  )
}

export default OurTeam


