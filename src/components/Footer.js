import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {FaFacebook, FaPhone} from 'react-icons/fa'


const Footer = () => {
  return (
    <FooterContainer>
        <FooterLinksWrapper>
            <FooterDesc>
                <h2><HomeLink to="/">Leano & Cruz, CPAs</HomeLink></h2>
                <p><strong>Office and Mailing Address:</strong></p>                
                <p>25350 Magic Mountain Parkway, Suite 300</p>
                <p>Valencia, CA 91355</p>
                <p><strong>Office Hours:</strong></p>
                <p>Monday to Friday: 9am - 5pm PT</p>
                <p>Saturday: 9am - 1pm PT</p>
                <br>
                </br>
                
                <br></br>
                <p><a href="tel:8183782485"> <FaPhone /> (818) 378-2485</a></p>
                <p><FooterLink to="https://www.facebook.com/leanocruzcpa"><FaFacebook /> Leano & Cruz, CPAs </FooterLink></p>
            </FooterDesc>
           
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        <FooterLinkItems>
                <FooterLinkTitle>Services</FooterLinkTitle>
                <FooterLink to="/business">Business Services</FooterLink>
                <FooterLink to="/taxes">Taxes Services</FooterLink>
                <FooterLink to="/compliance">Tax Compliance Services</FooterLink>
        </FooterLinkItems>
       
        </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
 padding: 5rem calc((100vw - 1100px) /2);
 display:grid;
 grid-template-columns: repeat(2, 1fr);
 color:#fff;
 background: #000;
`

const HomeLink = styled(Link)`
     text-decoration: none;
     color: #008644;

`
const FooterDesc = styled.div`
 padding: 0 2rem;

 h2 {
     margin-bottom:1rem;
     color:#008644;
     font-family:"EB Garamond !important";
 }

 p {
     margin:0;
     font-size: 0.9em;
 }


 a, u {
  text-decoration: none !important;
  color: #fff;
}

a:hover {
    color:#008644;
}

 @media screen and (max-width: 400px) {
     padding:1rem;
 }
`
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: auto(2 , 1fr);

@media screen and (max-width: 400px) {
     grid-template-columns: 1fr;
 }
`

const FooterLinkItems = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
padding:1rem 2rem;

@media screen and (max-width: 400px) {
    padding: 1rem;
}
`
const FooterLinkTitle = styled.h2`
 font-size:16px;
 font-weight:bolder;
 margin-bottom:16px;
`

const FooterLink = styled(Link)`
 text-decoration: none;
 margin-bottom:0.5rem;
 font-size:14px;
 color:#fff;

 &:hover {
     color: #008644;
     transition:0.3s ease-out;
 }
`