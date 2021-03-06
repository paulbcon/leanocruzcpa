import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tax from "../components/Tax"
import {FaHome} from 'react-icons/fa'

const TaxesPage = () => (
  <Layout>
  <Seo title="Leano and Cruz, CPAs - Business Page" />
  <Tax />

  <AniLink paintDrip to="/" duration={1} hex="#0d1f02"><FaHome /> Home</AniLink>
</Layout>
)

export default TaxesPage
