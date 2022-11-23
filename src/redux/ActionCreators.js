import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

const axios = require('axios');

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishesAxios = () => (dispatch) => {
    dispatch(addDishes([
                                   {
                                   id: 0,
                                   name:'Uthappizza',
                                   image: '/assets/images/uthappizza.png',
                                   category: 'mains',
                                   label:'Hot',
                                   price:'4.99',
                                   featured: true,
                                   description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                                   },
                                   {
                                   id: 1,
                                   name:'Zucchipakoda',
                                   image: '/assets/images/zucchipakoda.png',
                                   category: 'appetizer',
                                   label:'',
                                   price:'1.99',
                                   featured: false,
                                   description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                                   },
                                   {
                                   id: 2,
                                   name:'Vadonut',
                                   image: '/assets/images/vadonut.png',
                                   category: 'appetizer',
                                   label:'New',
                                   price:'1.99',
                                   featured: false,
                                   description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
                                   },
                                   {
                                   id: 3,
                                   name:'ElaiCheese Cake',
                                   image: '/assets/images/elaicheesecake.png',
                                   category: 'dessert',
                                   label:'',
                                   price:'2.99',
                                   featured: false,
                                   description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                                   }
                               ]
));
    axios.get(baseUrl + 'dishes')
      .then(function (response) {
        console.log(response);
        dispatch(addDishes(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
};

export const fetchDishes = () => ({
    type: ActionTypes.DISHES_FETCH
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishesdishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    axios.get(baseUrl + 'comments')
      .then(function (response) {
        console.log(response);
        dispatch(addComments(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    axios.get(baseUrl + 'promotions')
      .then(function (response) {
        console.log(response);
        dispatch(addPromos(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    axios.get(baseUrl + 'leaders')
      .then(function (response) {
        console.log(response);
        dispatch(addLeaders(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
};

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});