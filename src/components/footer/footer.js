import React from 'react';
import './footer.css';

const Footer = ()=>{

    return (
        <footer>
        <div className="wave">
            <div className="footer">
                <div className="social">
                    <img src="images/facebook.svg" alt="" />
                    <img src="images/github.svg" alt="" />
                    <img src="images/whatsapp.svg" alt="" />
                </div>
                <p>Ticketing App@2020</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;