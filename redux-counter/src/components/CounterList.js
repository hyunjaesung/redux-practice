import React from 'react';
import Counter from './Counter';
import propTypes from 'prop-types';
import './CounterList.css'

const CounterList = ({counters, onIncrement, onSetColor})=> {

    return  (
            <div className = "CounterList">
                {
                    counters.map((counter,index) => 
                    (<Counter
                        key={index}
                        index={index}
                        {...counter}
                        onIncrement ={onIncrement}
                        onSetColor = {onSetColor}
                    />))
                }
            </div>
        )

}

CounterList.propTypes = {
    counters : propTypes.array,
    onIncrement : propTypes.func,
    onSetColor : propTypes.func
}

export default CounterList;