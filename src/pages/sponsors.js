import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.scss"
import contributors from './contributors.json'
import SponsorsGrid from '../components/SponsorsGrid'



const SponsorsPage = () => (
  <Layout>
    <SEO title="Sponsors" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">Sponsors</h1>
            <h2 className="light">
              <p>RAW Graphs is an open source project ...</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.about} container-fluid`}>
      <div className="container">
        <SponsorsGrid/>
      </div>
    </div>
    <div className="container-fluid grey-bg">
      <div className="container">
        <h1 className="text-center">Contributors</h1>
        <p style={{textTransform: 'capitalize'}}>
          { contributors.join(", ").toLowerCase()}
        </p>
      </div>
    </div>
    <AskInfo
      question="Do you want to sponsor or support the project?"
      button="contact us"
      link="mailto:hello@rawgraphs.io"
    ></AskInfo>
  </Layout>
)

export default SponsorsPage
