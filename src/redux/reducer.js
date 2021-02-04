// import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import { combineReducers } from 'redux'
import { InitialContactForm } from './forms'
import { createForms } from 'react-redux-form'
import * as actionTpyes from './actionTypes'


const dishReducer = (disState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTpyes.DISHES_LOADING:
            return {
                ...disState,
                isLoading: true,
                dishes: []
            }
        case actionTpyes.LOAD_DISHES:
            return {
                ...disState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return disState;
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTpyes.ADD_COMMENT: {
            let comment = action.payload;
            comment.id = commentState.length
            comment.date = new Date().toDateString();
            // console.log("action .payload : ", comment);
            return commentState.concat(comment);
        }
        default:
            return commentState;
    }
}


const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
})

export default Reducer