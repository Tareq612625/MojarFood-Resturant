import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'

const initalState={
    dishes:DISHES,
    comments:COMMENTS,
    sample:"Hello World"
}

 const Reducer= (state=initalState,action)=>{
    //  console.log("action : ", action);
    if(action.type==='TEST'){
        return{
            ...state,
            sample: action.str
        }
    }
     return state;
}

export default Reducer;