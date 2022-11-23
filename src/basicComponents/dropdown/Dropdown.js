import React from "react";
import PropTypes from 'prop-types';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink} from "reactstrap";

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  status: PropTypes.oneOf(['disabled', 'header', 'divider', 'text'])
};

const defaultProps = {
  color: 'primary',
  size: 'lg',
  direction: 'down',
  status: 'text'
};

class IDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.state = {
            dropDownValue: props.actions.length > 0 ? props.actions[0].name : "No options",
            dropdownOpen: false,
            ...this.state
        };
    }

    toggleDropDown = () => {this.setState({dropdownOpen: !this.state.dropdownOpen});}

    changeValue(e) {
        this.setState({dropDownValue: e.currentTarget.textContent});
    }

    getDropdownItems(actions) {
        const dropdownItems = actions.map(action => {
            const itemName = this.props.nav ? (<NavLink href={action.href} className="d-inline"> {action.name} </NavLink>) : (action.name);
            if (action.submenu && action.submenu.actions.length > 0) {
                return (<IDropdown submenu actions={action.submenu.actions} {...this.props} {...action.submenu}> {itemName} </IDropdown>);
            }
            if (action.status === 'header') {
                return <DropdownItem id={action.id} key={action.id} onClick={action.onClick || this.changeValue} header> {itemName} </DropdownItem>
            } else if (action.status === 'divider') {
                return <DropdownItem divider />;
            } else if (action.status === 'disabled') {
                return <DropdownItem id={action.id} key={action.id} onClick={action.onClick || this.changeValue} disabled> {itemName} </DropdownItem>
            } else {
                return <DropdownItem id={action.id} key={action.id} onClick={action.onClick || this.changeValue} > {itemName} </DropdownItem>
            }
        });
        return dropdownItems;
    }

    render() {
        let {
              color,
              size,
              direction,
              nav,
              submenu,
              ...attributes
            } = this.props;

        let dropdownToggle;
        if (nav) {
            if (submenu) {
                dropdownToggle = (<DropdownToggle caret color={color}>
                                     {attributes.children}
                                  </DropdownToggle>);
            } else {
                dropdownToggle = (<DropdownToggle caret color={color} id="nav-dropdown-toggle">
                                    {attributes.children}
                                  </DropdownToggle>);}
        } else {
        dropdownToggle = (
            <DropdownToggle caret color={color} size={size}>
                {this.state.dropDownValue}
            </DropdownToggle>)
        }

        const dropdown = (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown} onMouseEnter={this.toggleDropDown} onMouseLeave={this.toggleDropDown} direction={direction}>
                {dropdownToggle}
                <DropdownMenu>
                    {this.getDropdownItems(this.props.actions)}
                </DropdownMenu>
            </Dropdown>
        );

        return dropdown;
    }
}

IDropdown.propTypes = propTypes;
IDropdown.defaultProps = defaultProps;
IDropdown.displayName = 'IDropdown';

export default IDropdown;