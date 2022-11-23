import React  from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  href: '#',
  className: 'alert-link',
};

class IAlertLink extends React.Component {

  render() {
    let {
      href,
      className,
      ...attributes
    } = this.props;

    if (attributes.children === undefined) {
       attributes.children = <p> This is an alert link. </p>
    }

    // TODO: ensure attributes.children is paragraph

    const alertLink = (
      <a
        href = {href}
        className = {className}
        {...attributes}
      >
        {attributes.children}
      </a>
    );

    return alertLink;
  }
}

IAlertLink.propTypes = propTypes;
IAlertLink.defaultProps = defaultProps;
IAlertLink.displayName = 'IAlertLink';

export default IAlertLink;