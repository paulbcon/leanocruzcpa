import * as React from "react"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Business from "../components/Business";

const BusinessPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - Business Page" />
    <Business />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02">Go back to the homepage</AniLink>
  </Layout>
)

export default BusinessPage

