import React  from 'react';
import { CarouselIndicators as RSCarouselIndicators, List, ListInlineItem } from 'reactstrap';

class ICarouselIndicators extends React.Component {

  render() {
    let {
      activeIndex,
      items,
      onClickHandler,
      ...attributes
    } = this.props;

    const indicators = items.map((item, idx) => {
        return (
          <ListInlineItem
            key={`${item.key || Object.values(item).join('')}`}
            onClick={(e) => {
              onClickHandler(idx);
            }}
          > <i className="fa fa-circle"></i> </ListInlineItem>);
      });

    const carouselIndicators = (
        <List className="carousel-indicators">
            {indicators}
        </List>
    );

    return carouselIndicators;
  }
}

ICarouselIndicators.displayName = 'ICarouselIndicators';

export default ICarouselIndicators;