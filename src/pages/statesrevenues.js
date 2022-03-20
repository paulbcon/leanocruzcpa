import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import StatesRevenues from "../components/StatesRevenues";
import {FaHome} from 'react-icons/fa'

const StatesRevenuesPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - State Tax Forms and Information" />
    <StatesRevenues />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02"><FaHome /> Home</AniLink>
  </Layout>
)

export default StatesRevenuesPage

