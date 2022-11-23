import React  from 'react';
import PropTypes from 'prop-types';
import IButton from './button/Button.js';
import { Collapse } from 'reactstrap';
import _ from 'lodash';

export const withDismiss = (Component) => {
  class Dismiss extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: true
      };
    }

    render() {
      let {
          dismissible,
          ...passThroughProps
      } = this.props;

      if (dismissible) {
          const dismissButton = <IButton size="sm" color = {passThroughProps.color} close onClick={() => {this.setState({visible: false});
              }} />;
          passThroughProps.children = _.isArray(passThroughProps.children) ? passThroughProps.children.concat(dismissButton) : [passThroughProps.children, dismissButton];
      }

      return (
          <Collapse
              isOpen={this.state.visible}>
              <Component {...passThroughProps} />
          </Collapse>
      );
    }
  }

  Dismiss.propTypes = { dismissible: PropTypes.bool };
  Dismiss.defaultProps = { dismissible: true };
  Dismiss.displayName = 'Dismiss';

  return Dismiss;
}

export const withToggle = (Component) => {
  class Toggle extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: true
      };
    }

    toggle = () => {this.setState({visible: !this.state.visible});}

    render() {
      let {
          toggle,
          toggleText,
          ...passThroughProps
      } = this.props;

      let toggleButton;

      if (toggle) {
        toggleButton = <IButton size="sm" color = {passThroughProps.color} onClick={this.toggle} > {toggleText || "Toggle"} </IButton>;
      }

      return (
          <div>
          {toggleButton}
          <Collapse
              isOpen={this.state.visible}>
              <Component {...passThroughProps} />
          </Collapse>
          </div>
      );
    }
  }

  Toggle.propTypes = {
    toggle: PropTypes.bool,
    toggleText: PropTypes.string
  };

  Toggle.defaultProps = { toggle: true, toggleText: "Toggle" };
  Toggle.displayName = 'Toggle';

  return Toggle;
}

export const withScroll = (Component) => {
  class Scroll extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let {
          scrollable,
          ...passThroughProps
      } = this.props;

      passThroughProps.className = 'scroll';

      return (
          <Component {...passThroughProps} />
      );
    }
  }

  Scroll.propTypes = {
    scrollable: PropTypes.bool
  };

  Scroll.defaultProps = { scrollable: true};
  Scroll.displayName = 'Scroll';

  return Scroll;
}
