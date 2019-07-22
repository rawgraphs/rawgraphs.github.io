import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Header = ({ siteTitle, headerBg }) => (
  <nav
    className={`navbar navbar-expand-lg navbar-light bg-white fixed-top ${styles.navbar}`}
  >
    <div className="container">
      <Link className={`navbar-brand ${styles.brand}`} to="/">
        RAW<span className={styles.brandGreen}>Graphs</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link
            className={`nav-item nav-link ${styles.item}`}
            activeClassName="active"
            to="/about"
            partiallyActive={true}
          >
            About
          </Link>
          <Link
            className={`nav-item nav-link ${styles.item}`}
            activeClassName="active"
            to="/blog"
            partiallyActive={true}
          >
            Blog
          </Link>
          <Link
            className={`nav-item nav-link ${styles.item}`}
            activeClassName="active"
            to="/learning"
            partiallyActive={true}
          >
            Learning
          </Link>
          <Link
            className={`nav-item nav-link ${styles.item}`}
            activeClassName="active"
            to="/gallery"
            partiallyActive={true}
          >
            Gallery
          </Link>
          <a
            className={`nav-item nav-link ${styles.item}`}
            href="https://github.com/densitydesign/raw/wiki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  headerBg: "white",
}

export default Header
