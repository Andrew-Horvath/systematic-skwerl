import React from 'react';
import skwerlLogo from '../images/skwerlLogo.png';

const Logo = props => {
    return (
        <div className="logo-container container d-sm-flex justify-content-center align-items-center"><img src={skwerlLogo} alt='logo for systematik skwerl line drawn squirrel' className="logo" />
        </div>
    )

}

export default Logo