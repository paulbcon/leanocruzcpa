import React, {useState} from "react"
import Dropdown from "./Dropdown"
import Header from "./header"
import Footer from "./Footer"
import Announcement from "./Banner"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
 const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
   setIsOpen(!isOpen)
 }

  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Header toggle={toggle} />
      
       <main>{children}</main>
       <Footer />
    </>
  )
}

export default Layout
