import React from 'react';
import '../componentsCSS/HeaderComp.css';
import CryptoCoins from './CryptoCoins';
import HamburgerComp from './HamburgerComp';
import LogoComp from './LogoComp';

const HeaderComp = (props) => {
    return (
        <div className='section_one'>
            <div className='header_container'>
                <LogoComp />
                <HamburgerComp />
            </div>
            <CryptoCoins /> 
        </div>
        
    );
}

export default HeaderComp;