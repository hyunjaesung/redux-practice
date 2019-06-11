import * as types from '../actions/ActionTypes';
import numberReducer from './number';
import colorReducer from './color';
import { combineReducers } from 'redux';


const reducer = combineReducers({ // state 안에 오브젝트가 두개있는꼴
    numberData : numberReducer,
    colorData : colorReducer
})

// const initialState = {
//     color:'black',
//     number:0
// };

// function counterReducer(state=initialState, action) {
//     switch(action.type){
//         case types.INCREMENT :
//             return {
//                 ...state,
//                 number : state.number +1
//             };

//         case types.SET_COLOR :
//             return {
//                 ...state,
//                 color : action.color


//             };

//         default :
//             return state;

//         }
// };


export default reducer; // store에 들어간다

