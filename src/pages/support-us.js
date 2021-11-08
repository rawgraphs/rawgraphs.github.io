import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./support-us.module.scss"

const SupportUs = () => (
  <Layout>
    <SEO title="Support us" />

    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big mb-3">Support Us</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8">
          <p>
            Since our last crowdfunding campaign, we have focused on developing
            the new version of RAWGraphs. The development is at the moment based
            on free time provided by the project partners and on the resources
            collected through didactical activities.
          </p>
          <p>
            We’re now defining how to keep the project financially sustainable,
            so if you want to actively sustain it you can consider one
            among the following options.
          </p>
          <h2 className="mt-4">Donate to the project</h2>
          <p>
            Donations are, of course, always welcome. If you feel generous you
            can contact us at hello [at] rawgraphs.io and we can sort out the
            most convenient solution for your company/institution. We will soon
            release updates about other ways to support the project through
            recurring donations.
          </p>
          <h2 className="mt-4">Join a RAWGraphs webinar</h2>
          <p>
            Webinars help you in getting more familiar with the software.
            Subscribe to our{" "}
            <a
              href="https://rawgraphs.us17.list-manage.com/subscribe?u=e54381d5fb7c9ae9ec27d29ad&id=ad8eec69a9"
              target="_blank"
              rel="noopener"
            >
              newsletter
            </a>{" "}
            and follow us on{" "}
            <a
              href="https://www.eventbrite.it/o/rawgraphs-team-34902034933"
              target="_blank"
              rel="noopener"
            >
              EventBrite
            </a>{" "}
            to know about upcoming courses.
          </p>
          <h2 className="mt-4">Invite us for in-house training</h2>
          <p>
            If you are part of a company or organization and you want to
            organize a workshop or a webinar, please contact us at hello [at]
            rawgraphs.io to get in touch. We will setup an <span style={{whiteSpace: "nowrap"}}>ad-hoc</span> didactical
            activity for your organization.
          </p>
          <h2 className="mt-4">Request a new chart</h2>
          <p>
            We can create another chart to help with new tasks of data
            exploration and communication. The chart can be integrated in
            RAWgraphs and made available to the whole community.
          </p>
          <h2 className="mt-4">Request a custom version</h2>
          <p>
            As done during the crowdfunding campaign, we can realize a custom
            version of RAWGraphs for your enterprise that you can host on your
            server. Your version will have a custom logo, colors, fonts,
            visualization presets and other features.
          </p>
          <p className="my-5">And please, help us in spreading the word and bringing RAWGraphs to anyone interested in a free, simple and open-source solution for visualizing data!</p>
        </div>
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
