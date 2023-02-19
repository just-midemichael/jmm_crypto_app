import React, {useState, useEffect} from 'react';
import '../componentsCSS/MarketData.css'
import CoinSearchComp from './CoinSearchComp';
import CoinComp from './CoinComp';
import Axios from 'axios'


function MarketDataComp(props) {
    const [listOfCoins, setListOfCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [searchCoin, setSearchCoin] = useState('')

    useEffect(() => {
        Axios
            .get('https://api.coinstats.app/public/v1/coins?skip=0&limit=')
            .then(res => {
                setListOfCoins(res.data.coins)
                setLoading(false)
                console.log('useState Success', res.data)
            })
            .catch((err) => {
                setLoading(false)
                setError('Sorry, unable to load data ❗', err.data)
                console.log('Data Error', err.data)
            })

            
    }, [])

    


    //Filter search
    const filterCoin = listOfCoins.filter((coin) => {
        const coinSearchInput = document.getElementById('input_search');
        const marketContainer = document.getElementById('market_data_container');
        const coinPrice = document.getElementsByClassName('coin_price')

        
        const inputChange = () => {
            if( coinSearchInput.value !== '') {
                marketContainer.style.border = '1px solid gold';

                return coin.id.includes(searchCoin.toLowerCase())
            }
            else {
                marketContainer.style.border = '1px solid transparent';

                return coin.id.includes(searchCoin.toLowerCase())
            }
        }

        return inputChange();
        
    })

    return (
        <div className='section_two'>
            <div className='section_two_inner_wrapper'>
                <CoinSearchComp searchCoin={setSearchCoin}/>
                <CoinComp coins={filterCoin} loading={loading} error={error}/>
            </div>
        </div>
    );
}

export default React.memo(MarketDataComp);