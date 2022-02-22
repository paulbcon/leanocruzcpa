import * as React from "react"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import Seo from "../components/seo"

const BusinessPage = () => (
  <Layout>
    <Seo title="Business Page" />
    <h1>Hi from the business page</h1>
    <p>Welcome to business page </p>
    <AniLink swipe direction="left" to="/">Go back to the homepage</AniLink>
  </Layout>
)

export default BusinessPage
