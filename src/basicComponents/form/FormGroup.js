import React  from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../constants.js'
import { InputTypes } from '../utils.js'
import IButton from '../button/Button.js'
import IButtonGroup from '../button/ButtonGroup.js'
import { FormGroup as RSFormGroup, Label, Input, FormText, FormFeedback, CustomInput } from 'reactstrap';
import Select from 'react-select';
import _ from 'lodash';

const propTypes = {
    type: PropTypes.oneOf(InputTypes),
    id: PropTypes.string,
    size: PropTypes.oneOf([CONSTANTS.LARGE, CONSTANTS.SMALL]),
    label: PropTypes.string,
    formText: PropTypes.string,
    formFeedback: PropTypes.string,
    fileExtensions: PropTypes.array,
    fileSize: PropTypes.string
};

const defaultProps = {
    type: CONSTANTS.TEXT,
    formText: "Enter input",
    formFeedback: "Wrong",
    fileExtensions: ["jpeg"],
    fileSize: "1MB"
};

class IFormGroup extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          valid : true,
          ...this.state
      };
  }

  render() {
    let {
      type,
      id,
      label,
      size,
      formText,
      formFeedback,
      ...attributes
    } = this.props;

    let onChange = undefined;
    if (attributes.onChange) {
        onChange = attributes.onChange;
    }

    let input = <Input type={type} name={id} id={id} valid={this.state.valid} invalid={!this.state.valid} onChange={(e) => {
                                               if (onChange !== undefined) {onChange(e);}}}/>;
    let options;

    switch (type)
    {
        case CONSTANTS.EMAIL:
            if (onChange === undefined) {
                onChange = (e) => {
                    const emailRegex =
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    const { valid } = this.state;
                    if (emailRegex.test(e.target.value)) {
                        this.setState({ valid: true });
                    } else {
                        this.setState({ valid: false });
                    }
                }
            }
            break;

        case CONSTANTS.PASSWORD:
            if (onChange === undefined) {
                onChange = (e) => {
                    const passwordRegex =
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    const { valid } = this.state;
                    if (passwordRegex.test(e.target.value)) {
                        this.setState({ valid: true });
                    } else {
                        this.setState({ valid: false });
                    }
                }
                formFeedback = "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
            }
            break;

        case CONSTANTS.SELECT:
            options = _.map(attributes.options, (optionName) => {
                                return {label: optionName, value: optionName}
                              });
            input = <Select options={options} isSearchabe maxMenuHeight={50}/>
            break;
        case CONSTANTS.MULTI_SELECT:
            options = _.map(attributes.options, (optionName) => {
                                return {label: optionName, value: optionName}
                              });
            input = <Select options={options} isSearchabe isMulti/>
            break;
        case CONSTANTS.FILE:
            if (onChange === undefined) {
                onChange = (e) => {
                if (e.target.files.length > 0) {
                    let fileNameParts = e.target.files[0].name.split(".");
                    let fileExtension = fileNameParts[fileNameParts.length - 1];
                    let fileSize = e.target.files[0].size;
                    let allowedExtensions = attributes.fileExtensions;
                    let allowedSize = attributes.fileSize;
                    if (_.endsWith(allowedSize, "KB")) {
                        allowedSize = allowedSize.replace("KB", '') * 1024;
                    } else if (_.endsWith(allowedSize, "MB")) {
                        allowedSize = allowedSize.replace("MB", '') * 1048576;
                    } else if (_.endsWith(allowedSize, "GB")) {
                        allowedSize = allowedSize.replace("GB", '') * 1073741824;
                    }
                    if (_.indexOf(allowedExtensions, fileExtension) < 0) {
                        this.setState({valid: false})
                    } else if (fileSize > allowedSize) {
                        this.setState({valid: false})
                    } else {
                        this.setState({valid: true})
                    }
                }}
                formFeedback = "Please upload files having extensions " + attributes.fileExtensions + " and of max size " + attributes.fileSize;
            }
            break;
        case CONSTANTS.URL:
            if (onChange === undefined) {
                onChange = (e) => {
                    const urlRegex =
                      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
                    const { valid } = this.state;
                    if (urlRegex.test(e.target.value)) {
                        this.setState({ valid: true });
                    } else {
                        this.setState({ valid: false });
                    }
                }
            }
            break;
    }

    const formGroup = (
        <RSFormGroup>
           <Label for={id}> {label} </Label>
           {input}
           <FormFeedback invalid={!this.state.valid}> {formFeedback} </FormFeedback>
           <FormText color="muted"> {formText} </FormText>
        </RSFormGroup>
    );

    return formGroup;
  }
}

IFormGroup.propTypes = propTypes;
IFormGroup.defaultProps = defaultProps;
IFormGroup.displayName = 'IFormGroup';

export default IFormGroup;