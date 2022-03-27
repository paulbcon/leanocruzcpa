import React from "react"
import {StyledContainer,StyledHeading,StyledContent} from "./StyledComponents"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Table } from "react-bootstrap"


const TaxCenter = () => {
    
 
  return (
    <StyledContainer>
      <StyledHeading>Tax Center</StyledHeading>
        <StyledContent>
        <Table striped responsive>
      
                  <tbody>
                    <tr>
                    <td><AniLink swipe direction="up" to="/publications"> Tax Forms & Publications</AniLink></td>
                    <td>
                        <p>There are a number of excellent sources available for taxpayers to obtain tax forms, instructions, and publications. They include:</p>
                        <ul>
                            <li>
                            Downloading from <AniLink swipe direction="up" to="https://www.irs.gov/forms-instructions">IRS Forms & Publications</AniLink> page
                            </li>
                            <li>
                            Picking up copies at an <AniLink swipe direction="up" to="https://www.irs.gov/help/contact-your-local-irs-office">IRS Taxpayer Assistance Center</AniLink>    
                            </li>
                            <li>
                            Going to the <AniLink swipe direction="up" to="https://www.irs.gov/businesses/small-businesses-self-employed">IRS Small Business and Self-Employed One-Stop</AniLink> page
                            </li>
                            <li>
                            Requesting copies by phone - 1-800-TAX-FORM (or 1-800-829-3676) Hours of operation are 7 a.m. to 10 p.m., Monday-Friday, your local time - except Alaska and Hawaii which are Pacific time.
                            </li>
                        </ul>
                    </td>
                    </tr>  
                    <tr>
                        <td><AniLink swipe direction="up" to="/statesrevenues">50 States Department of Revenue</AniLink></td>
                        <td>Taxes-States-Departments of Revenue Links</td>
                    </tr>
                    <tr>
                      <td><AniLink swipe direction="up" to="/taxrates2022">2022 Federal Income Tax Brackets </AniLink> </td>
                      <td>2022 Federal Income Tax Brackets (for taxes due in April 2023)</td>
                    </tr>
                    <tr>
                      <td><AniLink swipe direction="up" to="/taxrates2021">2021 Federal Income Tax Brackets </AniLink> </td>
                      <td>2021 Federal Income Tax Brackets (for taxes due in April 2022)</td>
                    </tr>
                    <tr>
                      <td><AniLink swipe direction="up" to="https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp">Where's My Refund</AniLink></td>
                      <td>You can start checking on the status of your refund within 24 hours after the IRS have received your e-filed return or 4 weeks after you mail a paper return.
                        Where’s My Refund? will give you a personalized refund date after the IRS process your return and approve your refund.</td>
                    </tr>
                    <tr>
                      <td><AniLink swipe direction="up" to="https://www.ftb.ca.gov/file/when-to-file/due-dates-personal.html">California Due Dates - Personal</AniLink></td>
                      <td>State of California - Franchise Tax Board's Due Dates for Personal Income Tax Filer</td>
                    </tr>
                    <tr>
                    <td><AniLink swipe direction="up" to="https://www.ftb.ca.gov/file/when-to-file/due-dates-business.html">California Due Dates - Businesses</AniLink></td>
                    <td>State of California - Franchise Tax Board's Due Dates for Businesses</td>
                    </tr>
                  </tbody>    

        </Table>    
            

        </StyledContent>
     </StyledContainer>
  )
}

export default TaxCenter


