import React from 'react';
import propTypes from 'prop-types';
import './Counter.css';


const Counter = ({number, color, onIncrement, onSetColor}) => {
    return (
        <div className ="Counter" onClick ={onIncrement} onContextMenu ={(event)=>{
            event.preventDefault();
            onSetColor();
        }} style = {{backgroundColor :color}}> {number}</div>
    );
}

Counter.propTypes = {
    number : propTypes.number,
    color : propTypes.string,
    onIncrement : propTypes.func,
    onSetColor: propTypes.func
};

Counter.defaultProps = {
    number : 0,
    color : 'black',
    onIncrement : () => console.warn("onIncre not defined"),
    onSetColor : () => console.warn("onSetColor not defined")

}

export default Counter;