import React, {useState, useEffect } from "react"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({toggle}) => {
  const [navbar,setNavbar] = useState(false)

  useEffect(() => {
    if(window.location.pathname)
    {
      setNavbar(window.location.pathname)
    }
  },[])
  return (
    <Nav navbar={navbar}>
      <Link to="/"><StaticImage src="../assets/images/logo2.png" width={100} height={100} /></Link>
      <Bars onClick={toggle}/>
      <NavMenu>
        {menuData.map((item,index) => {
          return (item.link !== "/" ?
          <NavLink to={item.link} key={index}>
            {item.title}
            </NavLink>
          : 
          <AniLink swipe direction="left" to={item.link} key={index}>
          {item.title}
          </AniLink>  
          )
        }
         
        )}
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
  background:${({navbar}) => (navbar !== "/" ? "#fff": "transparent" )};
  height: 80px;
  display:flex;
  justify-content:space-between;
  padding:0.5rem calc((100vw - 1300px) /2);
  z-index:1001;
  position:relative;
  @media screen and (max-width:768px) {
    z-index: 100;
  }

`

const NavLink = styled(Link)`
  color:${({navbar}) => (navbar !== "/" ? "#008644": "#fff" )};
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
  color:#008644;
  
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