import * as actions from "./actionTypes";

export const number = dispatch => value => {
    dispatch({
        type: actions.NUMBER,
        payload: value
    })
}

export const result = dispatch => totalResult => {
    dispatch({
        type: actions.RESULT,
        payload: totalResult
    })
}

