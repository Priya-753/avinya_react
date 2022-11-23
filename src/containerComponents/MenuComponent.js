import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import {allDishesSelector} from '../redux/selectors'
import {withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


function RenderMenuItem ({dish, onClick}) {
    return (
        // <Card
        //     onClick={() => onClick(dish.id)}>
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

class Menu extends Component {

    render() {
    const menu = this.props.dishes.map((dish) => {
                return (
                    <div className="col-12 col-md-5 m-1"  key={dish.id}>
                        <RenderMenuItem dish={dish} />
                    </div>
                );
            });

            return (
                        <div className="container">
                            <div className="row">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                                </Breadcrumb>
                                <div className="col-12">
                                    <h3>Menu</h3>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                {menu}
                            </div>
                        </div>
                    );
    }


}

const mapStateToProps = state => {
    return {
      dishes: allDishesSelector(state)
    }
}

export default withRouter(connect(mapStateToProps)(Menu));