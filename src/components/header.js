import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './layout.module.scss'
import logo from '../images/logo@2x.png'

const Header = ({ siteTitle }) => (
  <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top ${styles.header}`}> 
    <div className="container">
      <Link className="navbar-brand" to="/">
       <img src={logo} className={styles.headerLogo} alt="logo"></img>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link" activeClassName="active" to="/blog">Blog</Link>
          <Link className="nav-item nav-link" activeClassName="active" to="/learning">Learning</Link>
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
}

export default Header
