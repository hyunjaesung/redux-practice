import React from 'react';
import propTypes from 'prop-types';
import './Button.css';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className = "Buttons">
            <div className = "btn add" OnClick = {onCreate}></div>
            <div className = "btn remove" OnClick = {onRemove}></div>
        </div>
    );
}

Buttons.propTypes = {
    onCreate : propTypes.func,
    onRemove : propTypes.func
};

export default Buttons;

