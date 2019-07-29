import React from "react"
import styles from "./askInfo.module.scss"

const AskInfo = ({ question, button, link, bgLight, btGreen }) => (
  <div
    className={`container-fluid text-center text-md-left py-3 py-md-0 ${
      styles.askInfo
    } ${bgLight ? "bg-light" : ""}`}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-9">
          <h3 className="my-3 my-md-0">{question}</h3>
        </div>
        <div className="col-sm-3">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button
              className={`btn btn-default btn-larger ${
                btGreen ? "btn-green" : ""
              }`}
            >
              {button}
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default AskInfo
