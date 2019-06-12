import Counter from "../components/Counter";
import * as actions from "../actions";
import {connect} from 'react-redux';
import CounterList from "../components/CounterList";
import { getRandomColor } from "../lib/getRandomColor";


const mapStateToProps = (state) => ({
    counters:state.counters
})

const mapDispatchToProps = (dispatch) => ({
    onIncrement : (index) => dispatch(actions.increment(index)),
    onSetColor : (index) => {
        const color = getRandomColor();   
        dispatch(actions.setColor(index, color));
    }
})

const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(CounterList);


export default CounterContainer;