import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    
  </Layout>
)

export default IndexPage
