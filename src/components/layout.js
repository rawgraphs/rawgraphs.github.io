/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Import Bootstrap and its default variables
import '../styles/index.scss';
import styles from './layout.module.scss'

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div className={`${styles.layoutContent}`}>
        
        {children}
        
      </div>
      <Footer siteTitle={data.site.siteMetadata.title}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
