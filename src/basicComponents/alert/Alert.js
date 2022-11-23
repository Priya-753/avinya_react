import React  from 'react';
import PropTypes from 'prop-types';
import { Alert as RSAlert } from 'reactstrap';

const propTypes = {
  color: PropTypes.string
};

const defaultProps = {
  color: 'primary',
};

function IAlert = () => {

  render() {
    let {
      color,
      ...attributes
    } = this.props;

    if (attributes.children === undefined) {
       attributes.children = <p>This is an alert. </p>
    }

    const alert = (
      <RSAlert
        color = {color}
        {...attributes}
      >
        {attributes.children}
      </RSAlert>
    );

    return alert;
  }
}

IAlert.propTypes = propTypes;
IAlert.defaultProps = defaultProps;
IAlert.displayName = 'IAlert';

export default IAlert;