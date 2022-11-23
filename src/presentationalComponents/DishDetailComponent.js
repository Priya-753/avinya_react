import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

class DishDetail extends Component {

  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  renderComments() {
    const comments = this.props.comments.map((comment) => {
      console.log(comment)
        return (
          <Card>
              <CardBody>
                <CardTitle>{comment.comment}</CardTitle>
                <CardText>{comment.author + " " + comment.date}</CardText>
              </CardBody>
          </Card>
        );
    });
      if (comments != null)
          return(
            <div>
              {comments}
            </div>
          );
      else
          return(
              <div></div>
          );
  }

  render() {
    return (
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
        </div>
    );
  }
}

export default DishDetail;
