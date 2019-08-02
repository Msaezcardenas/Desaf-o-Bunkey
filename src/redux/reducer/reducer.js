import {NUMBER, RESULT} from '../actions/actionTypes';

export default (
    state = {
        value:'',
        outcome: '0'
    }, action) => {
    switch (action.type){
        case NUMBER:
            return{
                ...state,
                value: action.payload
            };
        case RESULT:
            return{
                ...state,
                outcome:action.payload
            };
        default: return state
    }
    }