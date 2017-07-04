import React, {Component} from 'react';
import {Modal,Button,Popover,Tooltip,OverlayTrigger} from 'react-bootstrap';

class ModalButton extends Component {
  constructor(props){
    super(props);
    this.state = {showModal: false};
  }

  close = () => {
    this.setState({
      showModal: false
    });
  }

  open = () => {
    this.setState({
      showModal: true
    });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <Button 
        bsStyle={this.props.buttonStyle}
        onClick={this.open.bind(this)}
        >
          {this.props.buttonText}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)} keyboard={this.props.modalcloseOnEsc}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a>popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a>tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ModalButton.defaultProps = {
  buttonText: 'Modal button',
  buttonStyle: 'info',
  modalTitle: 'Page title',
  modalcloseOnEsc: true,  
}

export default ModalButton;