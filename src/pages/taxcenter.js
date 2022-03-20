import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import {FaHome} from 'react-icons/fa'
import TaxCenter from "../components/TaxCenter";

const TaxCenterPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - Tax Information Hub " />
    <TaxCenter />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02"><FaHome /> Home</AniLink>
  </Layout>
)

export default TaxCenterPage

