import React from 'react'
import styled from "styled-components"
import { Button } from "./Button"
import {FaTimes} from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Link } from 'gatsby'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon onClick={toggle} />
        </Icon>
        <DropDownWrapper>
            <DropDownMenu>
                {menuData.map((item,i) => {
                  return (  
                    <DropDownLink to={item.link} key={i}>
                        {item.title}    
                    </DropDownLink>
                  )   
                })}
            </DropDownMenu>
            <BtnWrap>
                <Button primary="true" round="true" to="/contactus">
                    Contact Us
                </Button>
            </BtnWrap>  
            
        </DropDownWrapper>
        <DropDownFooter>
        &copy; {new Date().getFullYear()} Leano & Cruz, CPAs
        </DropDownFooter>
    </DropDownContainer>
  )
}

export default Dropdown

const DropDownFooter=styled.footer`
  display:flex;
  color:#fff;
  align-items: center;
  justify-content: center;
  font-family:"EB Garamond !important";
`
const DropDownContainer=styled.aside`
 position:fixed;
 z-index:999;
 width:100%;
 height:100%;
 background:#005100;
 display:grid;
 align-items:left;
 top:0;
 left:0;
 transition: 0.3s ease-in-out;
 opacity: ${({isOpen}) => (isOpen ? "1": "0")};
 top: ${({isOpen}) => (isOpen ? "0": "-100%")};
`
const Icon=styled.div`
 position:absolute;
 top:1.2rem;
 right:1.5rem;
 background: transparent;
 font-size:2rem;
 cursor:pointer;
 outline:none;
`

const CloseIcon=styled(FaTimes)`
 color:goldenrod;
`
const DropDownWrapper=styled.div`
 color:goldenrod;
`

const DropDownMenu=styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows:repeat(4, 80px);
  text-align: center;
  margin-bottom:4rem;  

  @media screen and (max-width:480px) {
    grid-template-rows:repeat(4, 60px);
  }
`

const DropDownLink=styled(Link)`
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:1.5rem;
  text-decoration: none;
  list-style: none;
  color: goldenrod;
  cursor:pointer;
  transition:0.2s ease-in-out; 
 &:hover {
     color:#f26a2e;
 }
`

const BtnWrap=styled.div`
 display:flex;
 justify-content: center;
`

