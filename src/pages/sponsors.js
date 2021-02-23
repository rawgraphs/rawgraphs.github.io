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
              <p>
              RAWGraphs is an open-source project that relies on donations and the generous support of organizations and companies. Through the <a href="https://www.indiegogo.com/projects/rawgraphs-2-0-a-web-app-for-data-visualization/x/20662697#/">Indiegogo Campaign</a> we launched in the fall of 2019, we have received more than 350 donations from 40 countries. Keep on supporting us!
              </p>
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
        <h1 className="text-center">Contributors (ordered by contribution amount and date)</h1>
        <p style={{textTransform: 'capitalize'}}>
          { contributors.join(", ").toLowerCase()}.
        </p>
      </div>
    </div>
    <AskInfo
      question="Do you want to sponsor or support the project?"
      button="Contact us"
      link="mailto:hello@rawgraphs.io"
    ></AskInfo>
  </Layout>
)

export default SponsorsPage
