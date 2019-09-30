import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./sponsorship.module.scss"

const SponsorshipPage = () => (
  <Layout>
    <SEO title="Sponsorship" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">Sponsorship</h1>
            <h2 className="light">
              <p>Everything you need to know about the <a href="https://igg.me/at/rawgraphs2">Indiegogo</a> sponsorship.</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.sponsorship} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Do you have a code of conduct for sponsorships?</h2>
            <p>
One goal of the RawGraphs team is to be inclusive to the largest number of people, with the most varied and diverse backgrounds possible. As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, ability, ethnicity, socioeconomic status, and religion (or lack thereof).
            </p>
			<p>
			Saying so:
			</p>
			<ul>
			<li>We expect all sponsors to abide by these guidelines.</li>
<li>We don't accept donations from sponsors whose financial background or aims run counter to RAWGraphs’ team guidelines and reputation.</li>
<li>Sponsors shall conform to all laws and regulations relating to their profession or business and shall not engage in any conduct involving fraud, deceit, bribery, misrepresentation or dishonesty in their professional or business activity.</li>
<li>We reserve the right to reject and refund any donation from sponsors who are found to be in violation of our policies/guidelines.</li>

			</ul>
          </div>
        </div>
      </div>
    </div>
    <AskInfo
      question="Do you want to sponsor or support the project?"
      button="contact us"
      link="mailto:hello@rawgraphs.io"
    ></AskInfo>
  </Layout>
)

export default SponsorshipPage
