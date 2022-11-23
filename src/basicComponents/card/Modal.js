import React  from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IButton from '../button/Button.js';

const propTypes = {
  header: PropTypes.string,
  footer: PropTypes.element
};

const defaultProps = {
  header: 'Modal title'
};

class IModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active : false,
            ...this.state
        };
      }

  render() {
    let {
      header,
      footer,
      ...attributes
    } = this.props;

    if (attributes.children === undefined) {
       attributes.children = <p>This is a modal. </p>
    }

    if (attributes.footer === undefined) {
       footer = (<div className="d-flex flex-row"><IButton color="primary">Do Something</IButton>{'  '}
                      <IButton color="secondary" onClick={() => this.setState({visible : false})}>Cancel</IButton></div>);
    }

    const children = (
        <ModalBody>
            {attributes.children}
        </ModalBody>
    );

    const modal = (
      <Modal
        isOpen={this.state.visible}
        {...attributes}
      >
        {header !== undefined ? <ModalHeader> { header } </ModalHeader> : null}
        {children}
        {footer !== undefined ? <ModalFooter className="text-muted"> { footer } </ModalFooter> : null}
      </Modal>
    );

    return modal;
  }
}

IModal.propTypes = propTypes;
IModal.defaultProps = defaultProps;
IModal.displayName = 'IModal';

export default IModal;