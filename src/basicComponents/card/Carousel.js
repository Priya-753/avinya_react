import React from 'react';
import PropTypes from 'prop-types';
import ICardGroup from './CardGroup.js';
import ICarouselIndicators from './CarouselIndicator.js';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  CarouselIndicators
} from 'reactstrap';
import _ from 'lodash';

const propTypes = {
  color: PropTypes.string,
  itemsPerSlide: PropTypes.number
};

const defaultProps = {
  color: 'primary',
  itemsPerSlide: 3
};

class ICarousel extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          activeIndex : 0,
          animating: false,
          children: [],
          ...this.state
      };
  }

  componentDidMount() {
    const children = React.Children.map(this.props.children, (child, index) => {
                                return React.cloneElement(child, {
                                  index: index,
                                  onDismiss: this.onDismiss})});
    this.setState({children: children});
  }

  onDismiss = (child) => {
    const children = _.filter(this.state.children, function(c) { if (c.props.index !== child.index ) {return true;}});
    this.setState({children: children});
  }

  render () {
      let {
        color,
        itemsPerSlide,
        ...attributes
      } = this.props;

      const childGroups = _.chunk(this.state.children, itemsPerSlide);

      const next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === childGroups.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex : nextIndex});
      }

      const previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? childGroups.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex : nextIndex});
      }

      const goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({activeIndex : newIndex});
      }

      const slides = _.map(childGroups, (child) => {
        return (
         <CarouselItem
            onExiting={() => this.setState({animating : true})}
            onExited={() => this.setState({animating : false})}
          >
            <ICardGroup cardsPerRow={itemsPerSlide}>
                {child}
            </ICardGroup>
          </CarouselItem>
        );
      });

      const carousel = (
        <div>
            <Carousel
                activeIndex={this.state.activeIndex}
                next={next}
                previous={previous}
            >
                <ICarouselIndicators items={childGroups} activeIndex={this.state.activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
      );

      return carousel;
  }
}

ICarousel.propTypes = propTypes;
ICarousel.defaultProps = defaultProps;
ICarousel.displayName = 'ICarousel';

export default ICarousel;