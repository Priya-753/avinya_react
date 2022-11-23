import React  from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup as RSButtonGroup } from 'reactstrap';
import * as CONSTANTS from '../constants.js'
import _ from 'lodash';

const propTypes = {
  selectedButtons: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf([CONSTANTS.CHECKBOX, CONSTANTS.RADIO, CONSTANTS.NORMAL])
};

const defaultProps = {
  selectedButtons: [],
  type: CONSTANTS.NORMAL
};

class IButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButtons: [],
            ...this.state
        };
    }

    setSelectedButtons = (selectedButton) => {
        let selectedButtons = this.state.selectedButtons;
        switch (this.props.type) {
            case CONSTANTS.CHECKBOX:
                const index = _.indexOf(selectedButtons, selectedButton)
                if (index < 0) {
                    selectedButtons.push(selectedButton);
                } else {
                    selectedButtons.splice(index, 1);
                }
                break;

            case CONSTANTS.RADIO:
                selectedButtons = [selectedButton];
                break;

            default:
                break;
        }
        this.setState({selectedButtons: selectedButtons});
    }

    render() {
        let {
          selectedButtons,
          ...attributes
        } = this.props;

        if (attributes.onSelected) {
                this.props.onSelected(this.state.selectedButtons);
        }

        const buttonGroup = (
          <RSButtonGroup
            {...attributes}
          >
            {React.Children.map(this.props.children, child => {
                      return React.cloneElement(child, {
                        onSelected: this.setSelectedButtons })})}
          </RSButtonGroup>
        );

        return buttonGroup;
    }
}

IButtonGroup.propTypes = propTypes;
IButtonGroup.defaultProps = defaultProps;
IButtonGroup.displayName = 'IButtonGroup';

export default IButtonGroup;