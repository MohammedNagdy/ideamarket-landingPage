import React from 'react';
import PropTypes from 'prop-types';
import nasdaq from "../assets/nasdaq 1.png";
import vice from "../assets/vice 1.png";
import coindesk from "../assets/coindesk 1.png"

const FourthFrame = props => {
    return (
        <div className="fourth-frame">
                <h2 className="featured-title">
                    Featured in
                </h2>
                <div className="featured-logos row">
                    <img className="logo" src={nasdaq} alt="nasdaq-logo" />
                    <img className="logo" src={vice} alt="vice-logo"/>
                    <img className="logo" src={coindesk} alt="coindesk-logo" />
                </div>
            
        </div>
    );
};

FourthFrame.propTypes = {
    
};

export default FourthFrame;