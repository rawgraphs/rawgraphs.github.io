import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="bg-dark sticky-bottom p-5 text-white">
    Hello footer
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
