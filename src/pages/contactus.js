import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import {FaHome} from 'react-icons/fa'
import ContactUs from "../components/ContactUs";

const ContactPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - Contact Page" />
    <ContactUs />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02"><FaHome /> Home</AniLink>
  </Layout>
)

export default ContactPage

