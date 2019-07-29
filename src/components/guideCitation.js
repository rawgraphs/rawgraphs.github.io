import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FaPaste } from "react-icons/fa"
import { timeFormat } from "d3-time-format"
import styles from "./guideCitation.module.scss"

class GuideCitation extends React.PureComponent {
  state = {
    copied: null,
  }
  render() {
    const { title, url } = this.props
    const { copied } = this.state
    const date = timeFormat("%B %d, %Y")(Date.now())

    const text = `"${title}", by RAWGraphs Team. Licensed under CC BY-NC-SA 4.0.  Accessed: ${date}, from ${url}`
    return (
      <div>
        <p className={`${copied ? styles.copied : ""}`}>{text}</p>
        <CopyToClipboard
          text={text}
          onCopy={() => this.setState({ copied: true })}
        >
          <p className={styles.copyPaste}>
            <FaPaste></FaPaste>
            <span className="ml-2">Copy to clipboard</span>
          </p>
        </CopyToClipboard>
      </div>
    )
  }
}

export default GuideCitation
