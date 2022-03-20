import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Publications from "../components/Publications"
import {FaHome} from 'react-icons/fa'

const PublicationPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - Tax Forms and Publications" />
    <Publications />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02"><FaHome /> Home</AniLink>
  </Layout>
)

export default PublicationPage

