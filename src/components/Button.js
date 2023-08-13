import React from 'react';
import { useNavigate } from 'react-router-dom';

//standard button component
const Button = props => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(props.btnNavigate)} className={props.className}>
            {props.btnText}
        </button>

    )
}
export default Button