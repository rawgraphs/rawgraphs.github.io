import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./support-us.module.scss"



const SupportUs = () => (
  <Layout>
    <SEO title="Sponsors" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">Support Us</h1>
            <h2 className="light">
              <p>
              Tell those are services in theory, but in practiuce if you buy them you give resources to the project.
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid grey-bg">
      <div className="container">
        <h1 className="text-center">Follow a course</h1>
        <p style={{textTransform: 'capitalize'}}>
          Facciamo dei corsi su RAWGraphs. CI sono diverse possibilità a seconda che lo vuoi dal vivo, registrato oppure se lo compri per la tua azienda. I prezzi partono da €€€
        </p>
      </div>
      <div className="container">
        <h1 className="text-center">Your visual model</h1>
        <p style={{textTransform: 'capitalize'}}>
          Possiamo farti un modello progettato sulle tue esigenze. Puoi importare il modello nella versione pubblica di RAW (ma vederlo solo tu) oppure clonarla e averlo sempre a disposizone in locale sulla tua macchina. i prezzi partono da €€€
        </p>
      </div>
      <div className="container">
        <h1 className="text-center">Your custom version</h1>
        <p style={{textTransform: 'capitalize'}}>
          La tua versione con un sacco di cose preimpostate, colori, font e modelli. I prezzi partno da €€€.
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

export default SupportUs
