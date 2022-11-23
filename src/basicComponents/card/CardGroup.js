import React  from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ICard from './Card.js';
import { Container, Row, Col, CardGroup } from 'reactstrap';

const propTypes = {
  cardsPerRow: PropTypes.number
};

const defaultProps = {
  cardsPerRow: 4
};

class ICardGroup extends React.Component {

    render() {
        let {
          cardsPerRow,
          ...attributes
        } = this.props;

        attributes.className=`row row-cols-md-${cardsPerRow} g-2`;

        const cardGroup = (
          <CardGroup
            {...attributes}
          >
            {attributes.children}
          </CardGroup>
        );

        return cardGroup;
    }
}

ICardGroup.propTypes = propTypes;
ICardGroup.defaultProps = defaultProps;
ICardGroup.displayName = 'ICardGroup';

export default ICardGroup;