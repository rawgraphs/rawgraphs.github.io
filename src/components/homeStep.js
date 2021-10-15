import React from "react"
import styles from "./homeStep.module.scss"

const HomeStep = ({ index, image, title, subSteps }) => (
  <div id={`step${index + 1}`} className={`container-fluid step`}>
    <div className="container">
      <div className="row">
        <div className={`col-sm-6 order-1  ${styles.correctColorStepImg}`}>
          <img
            className={`img-fluid ${styles.imgShadowed} ${styles.smoothCorners}`}
            src={image}
            alt={title}
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
                  <span className="d-none d-md-inline-block">
                    {subStep.icon}
                  </span>
                  {subStep.title}
                </h3>
                <p
                  className="small"
                  dangerouslySetInnerHTML={{ __html: subStep.text }}
                ></p>
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
