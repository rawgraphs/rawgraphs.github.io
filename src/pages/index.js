import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import logo from '../images/logo@2x.png'
import styles from './home.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-center py-5">
      <img src={logo} className={styles.homeLogo} alt="logo" />
      <p className="lead">
        The missing link between spreadsheets and data visualization.
      </p>

    </div>
    <h1>

    </h1>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
