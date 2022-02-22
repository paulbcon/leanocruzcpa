import * as React from "react"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import Seo from "../components/seo"

const CompliancePage = () => (
  <Layout>
    <Seo title="Tax Compliance Page" />
    <h1>Hi from the tax compliance page</h1>
    <p>Welcome to tax compliance page </p>
    <AniLink swipe direction="left" to="/">Go back to the homepage</AniLink>
  </Layout>
)

export default CompliancePage
