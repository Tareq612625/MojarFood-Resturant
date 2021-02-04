import * as actionTpyes from './actionTypes'
import DISHES from '../data/dishes'

export const addComment = (dishId, author, rating, comment) => ({
    type: actionTpyes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
})

export const loadDishes = dishes => ({
    type: actionTpyes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTpyes.DISHES_LOADING
})
export const fatchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        setTimeout(() => {
            dispatch(loadDishes(DISHES))
        }, 1200);
    }
}