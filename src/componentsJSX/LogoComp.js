import React from 'react';
import '../componentsCSS/HeaderComp.css'

const LogoComp = (props) => {
    return (
        <div className='logo_container'>
            <a className='logo_link' href='home' >
            <div className='logo_icon'></div>
            <span className='logo_name'>
                <span className='my_logo_name'>JMM</span> 
                CryptoMarketTracker</span>
            </a>
        </div>
    );
}

export default LogoComp;