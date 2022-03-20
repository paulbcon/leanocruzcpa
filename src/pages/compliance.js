import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Compliance from "../components/Compliance"
import {FaHome} from 'react-icons/fa'

const CompliancePage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - Business Page" />
    <Compliance />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02"><FaHome /> Home</AniLink>
  </Layout>
)

export default CompliancePage
