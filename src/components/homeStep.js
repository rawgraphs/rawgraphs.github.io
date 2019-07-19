import React from "react"
import styles from "./homeStep.module.scss"

const HomeStep = ({ index, image, title, subSteps }) => (
  <div id={`step${index + 1}`} className={`constainer-fluid step`}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 order-1">
          <img
            className={`img-fluid ${styles.imgShadowed} ${styles.smoothCorners}`}
            src={image}
          />
        </div>
        <div
          className={`${index % 2 ? "order-2 order-sm-0" : "order-2"} col-sm-6`}
        >
          <h2>
            <span className={styles.roundedNumber}>{index + 1}</span>
            {title}
          </h2>
          {subSteps.map((subStep, index) => {
            return (
              <div key={index} className={styles.subStep}>
                <h3>
                  {subStep.icon}
                  {subStep.title}
                </h3>
                <p className="small">{subStep.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

// HomeStep.propTypes = {
//   index: PropTypes.number,
// }

//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default HomeStep
