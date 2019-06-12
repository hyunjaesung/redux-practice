import * as types from './ActionTypes';

export const increment = (index) => ({
    type : types.INCREMENT,
    index
})

export const setColor = ({color,index})=> ({
    type: types.SET_COLOR,
    color,
    index
})

export const create = (color) => ({
    type:types.CREATE,
    color
})

export const remove = () => ({
    type : types.REMOVE
})

