import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
    const currentYear =  new Date().getFullYear();
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-9 row">
                    <h6 className="footer-link">Need Help?</h6>
                    <h6 className="footer-link">Contact Us</h6>
                    <h6 className="footer-link">Legal and Privacy</h6>
                </div>
                <div className="col-md-3 row">
                    <img />
                    <img />
                    <img />
                    <h6 className="footer-link">©{currentYear} IdeaMarkets</h6>
                </div>
            </div>
            
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;