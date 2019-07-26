import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 py-5">
          <h1>Ooooops!</h1>
          <p>This page doesn't exist!</p>
          <img
            src="https://media.giphy.com/media/jR8EDxMbqi1QQ/giphy.gif"
            className="img-fluid"
            alt="pie charts"
            width="100%"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
