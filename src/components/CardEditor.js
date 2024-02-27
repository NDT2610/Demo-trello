import "../styles/CardEditor.css";

import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import EditButtons from "./EditButtons";

class CardEditor extends Component {
  state = {
    show: false,
    setShow: false,
    text: this.props.text || "",
    content: this.props.content || "",
  };
  

  handleChangeText = event => this.setState({ text: event.target.value });
  handleChangeContent = event => this.setState({ content: event.target.value });

  onEnter = e => {
    const { text } = this.state;

    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSave(text);
    }
  };

  render() {
    
    const { text, content } = this.state;
    const { onSave, onCancel, onDelete, adding } = this.props;

    return (
      <div className="Edit-Card">
        <div className="Card">
            <Button variant="primary" onClick={() => this.setState({ show: true })}>
              Edit card
            </Button>
            <Modal className="Card-detail" show={this.state.show} onHide={() => this.setState({ show: false })}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {text}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Card Name</Form.Label>
                    <Form.Control
                      type="title"
                      placeholder="job name"
                      autoFocus
                      value={text}
                      onChange={this.handleChangeText}
                      onKeyDown={this.onEnter}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Job content</Form.Label>
                    <Form.Control as="textarea" rows={3} value={content} onChange={this.handleChangeContent} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => onSave(text, content)}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
        <EditButtons
          handleSave={() => onSave(text)}
          saveLabel={adding ? "Add card" : "Save"}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
      </div>
    );
  }
}

export default CardEditor;
