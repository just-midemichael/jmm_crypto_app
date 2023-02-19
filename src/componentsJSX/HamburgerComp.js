import React from 'react';

function HamburgerComp(props) {
    
    const openMenu = () => {
        alert('Hi, menu options are not available for this demo project ⚠ \nThank you')
    }
    
    return (
        <div className='hamburger_section'>
            <div className='hamburger_container' onClick={openMenu}>
                <div className='box box_1'></div>
                <div className='box box_2'>MENU</div>
                <div className='box box_3'></div>
            </div>
        </div>
    );
}

export default HamburgerComp;