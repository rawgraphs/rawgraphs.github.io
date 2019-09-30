import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import styles from "./modalCampain.module.scss"

class ModalCampain extends React.Component {
  state = {
    modal: true,
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={styles.modal}
        cssModule={{
          "modal-content": styles.modalContent,
        }}
        size="lg"
      >
        <ModalHeader
          toggle={this.toggle}
          className="border-0 mb-auto mb-md-0"
        ></ModalHeader>
        <ModalBody
          cssModule={{
            "modal-body": styles.modalBody,
          }}
        >
          <h1 className="modal-title mb-3">
            Hello!{" "}
            <span role="img" aria-label="hello">
              👋 👋 👋
            </span>
            <br />
            It's time to support RAWGraphs!
          </h1>
          <p className="pb-2">
            We are planning to work on a brand new version of RAWGraphs. We need your help!
          </p>
          <p>
          <button className={`btn btn-default btn-larger ${styles.btnIndie}`}><a href="https://igg.me/at/rawgraphs2">Donate on Indiegogo!</a></button>
          </p>
        </ModalBody>
      </Modal>
    )
  }
}

export default ModalCampain
