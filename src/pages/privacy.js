import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.scss"
// import contributors from './contributors.json'
// import SponsorsGrid from '../components/SponsorsGrid'



const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">Privacy</h1>
            <h2 className="light">
              <p>What we do with your browsing data</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.about} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="ol-12 col-sm-8">
            <h2>In short</h2>
            <p>
                This website uses Google Analytics to anonymously collect data about 
                visitors, sessions, and site usage. It helps us to understand how 
                the tool is used, and how to improve it.<br/>None of this data will be sold 
                to third-party ad servers.
            </p>
            <p>
                This website also uses common third-party services (e.g. Youtube), 
                which may have different policies about the processing of personal informations. 
                We strongly suggest you to install an ad-blocker software in order to have control 
                over the enabled services.
            </p>
          </div>
          <div className="ol-12 col-sm-8">
            <h2>Privacy Policy for RAWGraphs</h2>
            <p>
                At RAWGraphs, accessible from rawgraphs.io, one of our main priorities 
                is the privacy of our visitors. This Privacy Policy statement describes the types 
                of information that is collected and recorded by RAWGraphs and how it is used. 
                If you have additional questions or require more information about our Privacy Policy, 
                do not hesitate to contact us.
            </p>
            <p>
                This Privacy Policy applies only to our online activities and is valid for visitors 
                to our website with regards to the information that they shared and/or collect in RAWGraphs. 
                This policy is not applicable to any information collected offline or via channels 
                other than this website.
            </p>
            <h3>Consent</h3>
            <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
            <h3>Information we collect</h3>
            <p>
              The only information we collect is gathered through Google Analytics cookies. For more general 
              information on cookies, please read{" "}
                  <a
                      href="https://www.google.com/url?q=https://www.cookiesandyou.com/&sa=D&ust=1587379913515000&usg=AFQjCNGAbtb_TCLntYgo2kIKvObLqHOznQ"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      "What Are Cookies?"
                  </a>
              . <br/>
              None of these cookies are essential for the usage of rawgraphs.io. You can disable them without 
              having any issue in the usage of the tool.
            </p>
            <p>
              These cookies are used to:
            </p>
            <p>
              <ul>
                <li>
                  Calculate visitor, session, and keep track of RAWgraphs usage for the site's analytics report. 
                  The cookies store information anonymously and assign a randomly generated number to identify 
                  unique visitors.
                </li>
                <li>
                  Store information on how visitors use RAWgraphs and helps in creating an analytics report of 
                  how the website is doing. The data collected including the number visitors, the source where 
                  they have come from, and the pages visited in an anonymous form.
                </li>
              </ul>
              User and event data will be retained for 24 months.
            </p>
            <h3>Log Files</h3>
            <p>
              RAWGraphs follows a standard procedure of using log files. These files log visitors when they visit 
              websites. All hosting companies do this and also a part of hosting services' analytics. The information 
              collected by log files include internet protocol (IP) addresses, browser type, Internet Service 
              Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. 
              These are not linked to any information that is personally identifiable. The purpose of the 
              information is for analyzing trends, administering the site, tracking users' movement on 
              the website, and gathering demographic information.
            </p>
            <h3>Advertising Partners Privacy Policies</h3>
            <p>
              The data collected through cookies is only for internal use and it won’t be shared 
              with any third-party ad servers.
            </p>
            <h3>Third Party Privacy Policies</h3>
            <p>
              In this website, Third Party Services are used (e.g. videos embedded from Youtube).
            </p>
            <p>
              RAWGraphs's Privacy Policy does not apply to other advertisers or websites. Thus, we are 
              advising you to consult the respective Privacy Policies of these third-party ad servers 
              for more detailed information. It may include their practices and instructions about how 
              to opt-out of certain options. You may find a complete list of these Privacy Policies and 
              their links here: Privacy Policy Links.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. Detailed information 
              about cookie management with specific web browsers, can be found at the browsers respective websites.
            </p>
            <h3>GDPR Data Protection Rights</h3>
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. 
              Every user is entitled to the following:
            </p>
            <p>
              <ul>
                <li>
                  <span style={{fontWeight:'bold'}}>The right to access</span> – You have the right to request 
                  copies of your personal data. We may charge you a small fee for this service.
                </li>
                <li>
                  <span style={{fontWeight:'bold'}}>The right to rectification</span> – You have the right to 
                  request that we correct any information you believe is inaccurate. You also have the right 
                  to request that we complete the information you believe is incomplete.
                </li>
                <li>
                  <span style={{fontWeight:'bold'}}>The right to erasure</span> – You have the right to request 
                  that we erase your personal data, under certain conditions.
                </li>
                <li>
                  <span style={{fontWeight:'bold'}}>The right to restrict processing</span> – You have the right 
                  to request that we restrict the processing of your personal data, under certain conditions.
                </li>
                <li>
                  <span style={{fontWeight:'bold'}}>The right to object to processing</span> – You have the right 
                  to object to our processing of your personal data, under certain conditions.
                </li>
                <li>
                  <span style={{fontWeight:'bold'}}>The right to data portability</span> – You have the right to 
                  request that we transfer the data that we have collected to another organization, 
                  or directly to you, under certain conditions.
                </li>
              </ul>
            </p>
            <p>
              If you make a request, we have one month to respond to you.<br/>If you would like to 
              exercise any of these rights, please contact us.
            </p>


          </div>
        </div>
      </div>
    </div>
    <AskInfo
      question="Do you want to sponsor or support the project?"
      button="Support us on Indiegogo"
      link="https://www.indiegogo.com/projects/rawgraphs-2-0-a-web-app-for-data-visualization#/"
    ></AskInfo>
  </Layout>
)

export default PrivacyPage
