import React  from 'react';
import PropTypes from 'prop-types';
import { Button as RSButton, ButtonToggle as RSButtonToggle } from 'reactstrap';
import * as CONSTANTS from '../constants.js'

const propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf([CONSTANTS.CHECKBOX, CONSTANTS.RADIO, CONSTANTS.NORMAL]),
};

const defaultProps = {
  color: 'primary',
  type: CONSTANTS.NORMAL,
};

class IButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        active : false,
        ...this.state
    };
  }

  render() {
    let {
      color,
      type,
      ...attributes
    } = this.props;

    // TODO: Check if attributes.children is only string

    if (attributes.onSelected) {
        attributes.onClick = () => {
            this.props.onSelected(attributes.children);
            this.setState({active : !this.state.active})
        }
    }

    else if (attributes.toggle) {
        return (
            <RSButtonToggle
                color = {color}
                {...attributes}
            >
                {attributes.children}
            </RSButtonToggle>
        )
    }

    else if (attributes.close) {
        attributes.className = `btn-${color} position-absolute top-0 end-0`;
    }

    const button = (
      <RSButton
        color = {color}
        active = {this.state.active}
        {...attributes}
      >
        {attributes.children}
      </RSButton>
    );

    return button;
  }
}

IButton.propTypes = propTypes;
IButton.defaultProps = defaultProps;
IButton.displayName = 'IButton';

export default IButton;
