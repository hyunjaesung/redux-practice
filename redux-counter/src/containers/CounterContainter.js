import Counter from "../components/Counter";
import * as actions from "../actions";
import {connect} from 'react-redux';

export function getRandomColor() {
    const colors = ['white','blue','red','orange'];

    const random = Math.floor(Math.random() * 4); // 4가지 색상

    return colors[random];
}

const mapStateToProps = (state) => ({
    color:state.colorData.color,
    number:state.numberData.number
})

const mapDispatchToProps = (dispatch) => ({
    onIncrement : () => dispatch(actions.increment()),
    onSetColor : () => {
        const color = getRandomColor();   
        dispatch(actions.setColor(color));
    }
})

const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter);


export default CounterContainer;