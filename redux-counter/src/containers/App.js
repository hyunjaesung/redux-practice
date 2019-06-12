import React , {Component} from 'react';

import CounterContainer from './CounterContainter';
import * as actions from "../actions";


import {connect} from 'react-redux';
import { getRandomColor } from '../lib/getRandomColor';
import Buttons from '../components/Button';



const mapToDispatchToProps = (dispatch) => ({
    onCreate : () => dispatch(actions.create(getRandomColor())),
    onRemove : () => dispatch(actions.remove())
})

class App extends Component {
    render(){
        const {onCreate, onRemove} = this.props;

        return(
            <div className ="App">
                <Buttons onCreate ={onCreate} onRemove={onRemove}/>
                <CounterContainer/>
            </div>

        );
    }

}

export default connect(null, mapToDispatchToProps)(App);