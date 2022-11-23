import React  from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        tabHeading: PropTypes.string,
        tabContent: PropTypes.any
    })).isRequired
};

const defaultProps = {
};

class ITab extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          activeTabIndex : 0,
          ...this.state
      };
    }

  toggle = tabIndex => {
      if(this.state.activeTabIndex !== tabIndex) {
        this.setState({activeTabIndex: tabIndex});
      }
  }

  render() {
    let {
      tabs,
      ...attributes
    } = this.props;

    const navItems = tabs.map((tab, index) => {
        return (<NavItem>
                  <NavLink onClick={() => { this.toggle(index); }}>
                    {tab.tabHeading}
                  </NavLink>
                 </NavItem>);
    });

    const tabPanes = tabs.map((tab, index) => {
        return (<TabPane tabId={index}>{tab.tabContent}</TabPane>);
    });

    const tab = (
      <div>
        <Nav tabs>
          {navItems}
        </Nav>
        <TabContent activeTab={this.state.activeTabIndex}>
          {tabPanes}
        </TabContent>
      </div>
    );

    return tab;
  }
}

ITab.propTypes = propTypes;
ITab.defaultProps = defaultProps;
ITab.displayName = 'ITab';

export default ITab;