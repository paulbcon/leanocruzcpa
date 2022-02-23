import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import Seo from "../components/seo"


const TaxesPage = () => (
  <Layout>
    <Seo title="Taxes Page" />
    <h1>Hi from the taxes page</h1>
    <p>Welcome to taxes page </p>
    <AniLink 
       cover
       to="/"
       direction="left"
       duration={3}
       bg="url(../assets/images/logo2.png)
         center / cover   /* position / size */
         no-repeat        /* repeat */
         fixed            /* attachment */
         padding-box      /* origin */
         content-box      /* clip */
         green            /* color */
       ">
         Go to the homepage
       </AniLink>
  </Layout>
)

export default TaxesPage
