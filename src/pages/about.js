import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Partner from "../components/Partner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.scss"
import logoCalibro from "../images/Logo-Calibro.png"
import logoDD from "../images/Logo-DD-1.png"
import logoInmagik from "../images/Logo-Inmagik.png"
import logoNova from "../images/Logo-nova.png"
import logoContact from "../images/Logo-contactlab.png"

const partners = [
  {
    name: "DensityDesign",
    description:
      "DensityDesign is a Research Lab in the Design Department of Politecnico di Milano. It focuses on the visual representation of complex social, organizational and urban phenomena to support decision making processes at any level. Our interfaces are open, inclusive, and preserve multiple interpretations of complex phenomena. DensityDesign is committed to collaborating with other researchers and organizations devoted to academic independence and rigor, open enquiry, and risk taking to enhance our understanding of the world.",
    link: "https://www.densitydesign.org/",
    linkLabel: "densitydesign.org",
    logo: logoDD,
  },
  {
    name: "Calibro",
    description:
      "Calibro is a multidisciplinary design studio established by Matteo Azzi and Giorgio Uboldi in 2015 in Milan. We are interested in exploring new pathways at the intersection between design, data visualization and humanities. Our background is in communication design and for several years we worked at DensityDesign Research Lab at Politecnico di Milano where we have been part of the team who created RAW. In the past few years we have been involved in research, consulting and teaching activities for several public and private institutions.",
    link: "https://calib.ro/",
    linkLabel: "calib.ro",
    logo: logoCalibro,
  },
    {
    name: "Inmagik",
    description:
      "Inmagik is a studio based in Bergamo (Italy), focused on the development of web applications, mobile apps, data management systems and interactive user experiences. We love open source open source components, languages and frameworks and have a lot of experience in the field of data visualization.",
    link: "https://inmagik.com/en/",
    linkLabel: "inmagik.com",
    logo: logoInmagik,
  },
]
const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">About</h1>
            <h2 className="light">
              <p>Everything you need to know about the project.</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.about} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>What is RAW Graphs?</h2>
            <p>
              RAW Graphs is an open source data visualization framework built
              with the goal of making the visual representation of complex data
              easy for everyone.
            </p>
            <p>
              Primarily conceived as a tool for designers and vis geeks, RAW
              Graphs&nbsp;aims at providing a missing link between spreadsheet
              applications (e.g. Microsoft Excel, Apple Numbers, OpenRefine) and
              vector graphics editors (e.g. Adobe Illustrator, Inkscape,
              Sketch).
            </p>
            <p>
              The project, led and maintained by the{" "}
              <a
                href="http://www.densitydesign.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DensityDesign Research Lab
              </a>{" "}
              (Politecnico di Milano) was&nbsp;released publicly in 2013 and
              is&nbsp;regarded by many as one of the most important tools in the
              field of data visualization.
            </p>
            <p>
              The team responsable for the design, development and mantainance of the project is composed by  
              {" "}<a
                href="http://www.densitydesign.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DensityDesign
              </a>{" "}
              ,{" "}
              <a
                href="http://calib.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calibro
              </a>{" "}
              and 
              {" "}
              <a
                href="https://inmagik.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inmagik 
              </a>{" "} , who joined the team in 2019.
              </p>
            <h1 id="how-to-cite">How to cite RAWGraphs?</h1>
            <p>
              If you have found RAWGraphs useful in your research, or if you
              want to reference it in your work, please consider to cite the
              paper we presented at CHItaly 2017. You can read the article in
              Green Open Access at the following link:
            </p>
            <p>
              <FaFilePdf></FaFilePdf>
              <a
                title="RAWGraphs: A Visualisation Platform to Create Open Outputs"
                href="https://dl.acm.org/authorize?N46728"
                className="ml-2"
              >
                RAWGraphs: A Visualisation Platform to Create Open Outputs – PDF
                file in Green Open Access
              </a>
            </p>
            <p>Cite RAWGraphs:</p>
            <p>
              Mauri, M., Elli, T., Caviglia, G., Uboldi, G., &amp; Azzi, M.
              (2017). RAWGraphs: A Visualisation Platform to Create Open
              Outputs. In{" "}
              <i>
                Proceedings of the 12th Biannual Conference on Italian SIGCHI
                Chapter
              </i>{" "}
              (p. 28:1–28:5). New York, NY, USA: ACM.{" "}
              <a href="https://doi.org/10.1145/3125571.3125585">
                https://doi.org/10.1145/3125571.3125585
              </a>
            </p>
            <p>Bibtex:</p>
            <pre>
              {`
@inproceedings{Mauri:2017:RVP:3125571.3125585,
 author = {Mauri, Michele and Elli, Tommaso and Caviglia, Giorgio and Uboldi, Giorgio and Azzi, Matteo},
 title = {RAWGraphs: A Visualisation Platform to Create Open Outputs},
 booktitle = {Proceedings of the 12th Biannual Conference on Italian SIGCHI Chapter},
 series = {CHItaly '17},
 year = {2017},
 isbn = {978-1-4503-5237-6},
 location = {Cagliari, Italy},
 pages = {28:1--28:5},
 articleno = {28},
 numpages = {5},
 url = {http://doi.acm.org/10.1145/3125571.3125585},
 doi = {10.1145/3125571.3125585},
 acmid = {3125585},
 publisher = {ACM},
 address = {New York, NY, USA},
 keywords = {Visualization tools, data visualization, open output, visual interface},
}
              `}
            </pre>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row">
              <div className="col-12">
                <div className={styles.factsheet}>
                  <p>Designed and developed with love from Milan, Italy.</p>
                  <p>
                    Released under{" "}
                    <a
                      href="https://github.com/densitydesign/raw#license"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apache 2 license
                    </a>
                    .
                  </p>
                  <p>
                    First git commit on July 10, 2013 by{" "}
                    <a
                      href="http://www.giorgiocaviglia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Giorgio Caviglia
                    </a>
                  </p>
                  <p>
                    More than 500k sessions in 3 years from all around the
                    world.
                  </p>
                  <p>
                    “Most beautiful” project and “Gold medal” for tools at the{" "}
                    <a
                      href="http://www.informationisbeautifulawards.com/news/49-2014-the-winners"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kantar information is beautiful awards 2014
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-12">
                <h2>Contacts</h2>
                <p>
                  Have you bumped into any issue while using the app? Please ask
                  on{" "}
                  <a
                    href="https://groups.google.com/forum/?hl=en#!forum/densitydesign-raw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Groups
                  </a>
                  .
                </p>
                <p>
                  Do you have questions about RAW Graphs?
                  <br />
                  Interested into collaborations?
                </p>
                <a href="mailto:hello@rawgraphs.io">
                  <button className="btn btn-grey" type="submit">
                    Contact us
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/densitydesign/raw"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <FaGithubSquare color="#3E3E41" size="2.5em"></FaGithubSquare>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/rawgraphs"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <FaTwitterSquare
                    color="#3E3E41"
                    size="2.5em"
                  ></FaTwitterSquare>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid grey-bg">
      <div className="container">
        <h2>Partners</h2>
        <div className="row">
          {partners.map(partner => (
            <Partner key={partner.name} {...partner}></Partner>
          ))}
        </div>
        <h2 className="mt-4">Former Supporters</h2>
        <div className="row">
          <div className="col-6 col-sm-3">
            <img alt="Contactlab" className="img-fluid" src={logoContact} />
          </div>
          <div className="col-6 col-sm-3">
            <img alt="La vita nova" className="img-fluid" src={logoNova} />
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

export default AboutPage
