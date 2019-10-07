import React from "react"
import styles from "./bannerDonate.module.scss"

const bannerDonate = () => (
  <div className={styles.bannerContainer}>
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column flex-md-row">
          <h2 className="mr-md-5 mr-0 d-flex align-items-center text-center">
            <span role="img" className={`mr-3 ${styles.blink}`}>
              💸
            </span>
            <span>
              We need <span className={styles.bg}>you</span> to keep RAWGraphs{" "}
              <span className={styles.bg}>open</span> and{" "}
              <span className={styles.bg}>free</span>, support the new version.
            </span>
            <span role="img" className={`ml-3 ${styles.blink}`}>
              💸
            </span>
          </h2>
          <div className="d-flex align-items-center flex-fill mb-3 mb-md-0">
            <a
              href="https://igg.me/at/rawgraphs2"
              role="button"
              className={`btn btn-default btn-lg btn-block ${styles.btnIndie}`}
            >
              Donate!
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default bannerDonate
