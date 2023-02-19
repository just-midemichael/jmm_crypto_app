import React from 'react';
import '../componentsCSS/HeaderComp.css';

function CoinSearchComp({searchCoin}) {


    return (
        <div className='coin_search_container'>
            <input id='input_search' className='coin_search' type='text' placeholder='search coin...' onChange={(e) => searchCoin(e.target.value)}/>
        </div>
    );
}

export default CoinSearchComp;