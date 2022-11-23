import React  from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import IDropdown from '../dropdown/Dropdown.js';
import _ from 'lodash';

function lazyFunction(f) {
    return function () {
        return f.apply(this, arguments);
    };
}

var lazyTreeType = lazyFunction(function () {
    return propTypes;
});

const propTypes = {
    brand: PropTypes.string,
    color: PropTypes.string,
    navItems: PropTypes.arrayOf(lazyTreeType)
};

const defaultProps = {
    brand: "Brand",
    color: "light",
    navItems: []
};

class INav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navItemsVisible : false,
            ...this.state
        };
      }

  toggleNavbar = () => {this.setState({navItemsVisible: !this.state.navItemsVisible});}
  handleBoxToggle = () => console.log("onMouseEnter");


  render() {
    let {
      brand,
      color,
      navItems,
      ...attributes
    } = this.props;

    navItems = _.map(navItems, (navItem) => {
        return (<NavItem><NavLink href={navItem.link}>{navItem.name}</NavLink></NavItem>);
    });

    const nav = (
      <Navbar fixed='top' color={color} light expand="md">
        <NavbarBrand href="/" className="mr-auto"> {brand} </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={this.state.navItemsVisible} navbar>
          <Nav navbar>
            <NavItem><NavLink href="/">A</NavLink></NavItem>
            <NavItem><NavLink href="/">B</NavLink></NavItem>
            <NavItem><IDropdown nav color={color} size="sm" direction="right" actions={[{name: '1', status: 'header'}, {name: '2', href: "/menu",
            submenu: { actions: [{name: '2.1'}, {name: '2.2'}, {name: '2.3'}, {name: '2.4'}]}}]}>C</IDropdown></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );

    return nav;
  }
}

INav.propTypes = propTypes;
INav.defaultProps = defaultProps;
INav.displayName = 'INav';

export default INav;