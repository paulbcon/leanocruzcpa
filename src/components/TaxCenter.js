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
                  </tbody>    

        </Table>    
            

        </StyledContent>
     </StyledContainer>
  )
}

export default TaxCenter


