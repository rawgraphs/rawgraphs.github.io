import React from "react"

const YoutubeEmbed = ({ url }) => (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      title={url}
      className="embed-responsive-item"
      src={url}
      allowFullScreen
    ></iframe>
  </div>
)

export default YoutubeEmbed
