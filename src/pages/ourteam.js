import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import OurTeam from "../components/OurTeam";
import {FaHome} from 'react-icons/fa'

const CompliancePage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - Our Team Page" />
    <OurTeam />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02"><FaHome /> Home</AniLink>
  </Layout>
)

export default CompliancePage
