import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <Nav>
      <Link to="/"><StaticImage src="../assets/images/logo2.png" width={200} height={200} /></Link>
      <Bars />
      <NavMenu>
        {menuData.map((item,index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          primary="true"
          round="true"
          to="/contactus"
        >Contact Us</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background:transparent;
  height: 80px;
  display:flex;
  justify-content:space-between;
  padding:0.5rem calc((100vw - 1300px) /2);
  z-index: 100;
  position:relative;
`

const NavLink = styled(Link)`
  color:#fff;
  text-shadow: 0px 2px 2px #222;
  font-size:1.2rem;
  font-weight:bolder;
	
  display:flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor:pointer;
  &:hover {
    color:goldenrod;
  }
`
const Bars = styled(FaBars)`
  display:none;
  color:#fff;

  @media screen and (max-width:768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
  }
`
const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: -48px;

 @media screen and (max-width:768px)
 {
  display:none;
 }
`

const NavBtn = styled.div`
 display:flex;
 align-items: center;
 margin-right: 24px;

 @media screen and (max-width:768px)
 {
   display:none;
 }
`