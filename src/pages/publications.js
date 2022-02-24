import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Publications from "../components/Publications"

const PublicationPage = () => (
  <Layout>
    <Seo title="Leano and Cruz, CPAs - Business Page" />
    <Publications />

    <AniLink paintDrip to="/" duration={1} hex="#0d1f02">Go back to the homepage</AniLink>
  </Layout>
)

export default PublicationPage

