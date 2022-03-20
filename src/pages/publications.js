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
 </Layout>
)

export default PublicationPage

