import React  from 'react';
import PropTypes from 'prop-types';
import { Card as RSCard, CardHeader, CardFooter, CardBody, CardTitle, CardSubtitle, CardImgOverlay, CardImg } from 'reactstrap';

const propTypes = {
  color: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  textAlignment: PropTypes.oneOf(["left", "center", "right"]),
  header: PropTypes.string,
  footer: PropTypes.string,
  image: PropTypes.shape({
               src: PropTypes.string,
               alt: PropTypes.string,
               style: PropTypes.oneOf(["thumbnail"])
             }),
  imageOverlay: PropTypes.bool
};

const defaultProps = {
  color: 'primary',
  textAlignment: 'left',
  imageOverlay: false
};

class ICard extends React.Component {

  render() {
    let {
      color,
      cardTitle,
      subtitle,
      textAlignment,
      header,
      footer,
      image,
      imageOverlay,
      ...attributes
    } = this.props;

    let cardImage = null;
    let textAlignmentClass;

    if (attributes.children === undefined) {
       attributes.children = <p>This is a card. </p>
    }

    if (image !== undefined) {
        cardImage = <CardImg id={image.style} width={image.width} src={image.src} alt={image.alt} />
    }

    switch (textAlignment) {
        case "center":
            textAlignmentClass="text-center";
            break;
        case "right":
            textAlignmentClass="text-end";
            break;
    }

    const children = (
        <div class={textAlignmentClass}>
            <CardTitle tag="h5">{cardTitle}</CardTitle>
            {subtitle !== undefined ? <CardSubtitle tag="h6" className="mb-2 text-muted"> {subtitle} </CardSubtitle> : null}
            {attributes.children}
        </div>
    );

    const card = (
      <RSCard
        color = {color}
        {...attributes}
      >
        {header !== undefined ? <CardHeader> { header } </CardHeader> : null}
        {cardImage}
        {imageOverlay ? (<CardImgOverlay> {children} </CardImgOverlay>) : (<CardBody> {children} </CardBody>)}
        {footer !== undefined ? <CardFooter className="text-muted"> { footer } </CardFooter> : null}
      </RSCard>
    );

    return card;
  }
}

ICard.propTypes = propTypes;
ICard.defaultProps = defaultProps;
ICard.displayName = 'ICard';

export default ICard;