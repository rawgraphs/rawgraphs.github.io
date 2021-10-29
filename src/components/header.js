import React from "react"
import { Link } from "gatsby"
import { Collapse, NavbarToggler } from "reactstrap"
import styles from "./header.module.scss"

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { useIt } = this.props
    const { isOpen } = this.state
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white sticky-top ${styles.navbar}`}
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.brand}`} to="/">
            RAW<span className={styles.brandGreen}>Graphs</span>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <div className="navbar-nav ml-auto align-items-center">
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
              <Link
                className={`nav-item nav-link ${styles.item}`}
                activeClassName="active"
                to="/sponsors"
                partiallyActive={true}
              >
                Sponsors
              </Link>
              <a
                className={`nav-item nav-link ${styles.item}`}
                href="https://github.com/rawgraphs/rawgraphs-app#readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>

              {/* <a
                className={`nav-item nav-link ${styles.item}`}
                href="https://dev.rawgraphs.io/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Early access
              </a> */}

              {/* <a
                className={`nav-item nav-link ${styles.item}`}
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfbS0TsyQEXdNfYp9XkiDx5pzwEYfKCmplDJTz1VPAm1R6VA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                User survey
              </a> */}
              {useIt && (
                <a
                  id={styles.use}
                  className={`nav-item nav-link ${styles.item}`}
                  href="https://app.rawgraphs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use it now!
                </a>
              )}
            </div>
          </Collapse>
          {/*</div>*/}
        </div>
      </nav>
    )
  }
}

Header.defaultProps = {
  siteTitle: "",
  headerBg: "white",
  useIt: true,
}

export default Header
