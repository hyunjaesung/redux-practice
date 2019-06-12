import React from 'react';
import propTypes from 'prop-types';
import './Counter.css';


const Counter = ({index, number, color, onIncrement, onSetColor}) => {
    return (
        <div className ="Counter" onClick ={()=>onIncrement(index)} onContextMenu ={(event)=>{
            event.preventDefault();
            onSetColor(index);
        }} style = {{backgroundColor :color}}> {number}</div>
    );
}

Counter.propTypes = {
    index:propTypes.number,
    number : propTypes.number,
    color : propTypes.string,
    onIncrement : propTypes.func,
    onSetColor: propTypes.func
};

Counter.defaultProps = {
    index:0,
    number : 0,
    color : 'black',
    onIncrement : () => console.warn("onIncre not defined"),
    onSetColor : () => console.warn("onSetColor not defined")

}

export default Counter;