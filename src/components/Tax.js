import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StyledContainer, StyledHeading, StyledContent } from './StyledComponents';

const Tax = () => {

  return (
    <StyledContainer>
      <StyledHeading>Tax Services</StyledHeading>
      <StyledContent>
      <p>
        Our tax services include corporate (C and S Corporations), 
        limited liability corporation (LLC), partnership, and
        individual tax return preparation.  Throughout the year,
        we work proactively towards tax planning opportunities 
        and make ourselves available to meet the various needs of our clients.     
        </p>
       
        <p>By using our services, we ensure that:</p>
        <ul>
            <li>
               Appropriate tax forms are prepared, all information is properly reported, and all calculations are accurately performed
            </li>
            <li>
                All applicable deductions and tax credits are included
            </li>
            <li>
                Tax returns are electronically filed for efficient and timely processing
            </li>
        </ul>
        <p>
        The current tax laws and continuous revisions and updates by the regulatory authorities are increasingly complicated. These changes make preparing and filing a simple return confusing and make it easy to miss deductions or credits that are applicable to you.  While a computer software program may help you find deductions, there’s no substitute for the quality of service and advice you’ll receive from an experienced tax professional.
        </p>
        <hr>
        </hr>
        <AniLink swipe direction="up" to="/">Go back to Home Page</AniLink>
    </StyledContent>  
        
    </StyledContainer>
  )
}

export default Tax


