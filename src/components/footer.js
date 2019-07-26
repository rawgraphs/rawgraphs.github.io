import React from "react"
import { Link } from "gatsby"
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa"
import logoCalibro from "../images/logo-calibro-white@2x.png"
import logoDD from "../images/logo-dd-white@2x.png"
import styles from "./footer.module.scss"

const Footer = () => (
  <div className={`container-fluid ${styles.siteFooter}`}>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <h4 className={styles.rawLogo}>
            RAW<span className={styles.brandGreen}>Graphs</span>
          </h4>
          <div className="d-md-block d-none">
            <div className="menu-footer-menu-container">
              <ul
                id="menu-footer-menu"
                className={`nav navbar-nav navbar-right ${styles.nav}`}
              >
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="menu-item">
                  <Link to="/learning">Learning</Link>
                </li>
                <li className="menu-item">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank"
                    href="https://github.com/densitydesign/raw/wiki"
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </a>
                </li>
                <li className="menu-item">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="menu-item">
                  <a
                    href="https://forms.gle/WnqxUfwnE3nVt58RA"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Submit your work
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    title="Enjoy the repo"
                    target="_blank"
                    href="https://github.com/densitydesign/raw/"
                    rel="noopener noreferrer"
                  >
                    Enjoy the repo
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    title="User survey"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdfbS0TsyQEXdNfYp9XkiDx5pzwEYfKCmplDJTz1VPAm1R6VA/viewform"
                    rel="noopener noreferrer"
                  >
                    User survey
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    title="Subscribe to our newsletter"
                    href="http://eepurl.com/c9eFWH"
                  >
                    Subscribe to our newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-2 offset-sm-0 col-6">
          <h4>A project by</h4>
          <a
            href="http://densitydesign.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`${styles.logo} img-fluid`}
              alt="logo densitydesign"
              src={logoDD}
            />
          </a>
          <a href="http://calib.ro" target="_blank" rel="noopener noreferrer">
            <img
              className={`${styles.logo} img-fluid`}
              alt="logo calibro"
              src={logoCalibro}
            />
          </a>
        </div>
        <div className="col-sm-2 offset-sm-1 col-6">
          <h4>Supported by</h4>
          <p className="small">
            <a href="mailto:hello@rawgraphs.io">
              Contact us if you want to become our new supporter!
            </a>
          </p>
        </div>

        <div
          className={`${styles.contactUs} col-sm-3 offset-sm-1 col-12 mt-3 mt-md-0`}
        >
          <h4>Contact Us:</h4>
          <p className="small">Bumped into issues?</p>
          <a
            href="https://groups.google.com/forum/?hl=en#!forum/densitydesign-raw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-default" type="submit">
              Ask on Google Group
            </button>
          </a>
          <br />
          <br />
          <p className="small">Any feedback or general question?</p>
          <a href="mailto:hello@rawgraphs.io">
            <button className="btn btn-default" type="submit">
              Drop us a message
            </button>
          </a>
          <div className={styles.socialIcons}>
            <a
              target="_blank"
              href="https://github.com/densitydesign/raw"
              rel="noopener noreferrer"
            >
              <FaGithubSquare color="white" size="2em"></FaGithubSquare>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/rawgraphs"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <FaTwitterSquare color="white" size="2em"></FaTwitterSquare>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
