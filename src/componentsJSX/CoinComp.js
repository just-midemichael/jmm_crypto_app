import React from 'react';
import '../componentsCSS/MarketData.css'

function CoinComp({coins, loading, error}) {
    return (
        <div id='market_data_container' className='market_data_container'>
            <table className='coin_table'>
                <thead className='table_head'>
                    <tr>
                    <td>Rank</td>
                    <td>Name</td>
                    <td>Symbol</td>
                    <td className='coin_marketcap'>Market Cap</td>
                    <td className='coin_price'>Price</td>
                    <td className='coin_volume'>Volume</td>
                    <td className='extra_coin_data'>PriceChange1d</td>
                    <td className='extra_coin_data'>PriceChange1h</td>
                    <td className='extra_coin_data'>PriceChange1w</td>
                    </tr>
                </thead>
                
                <tbody id='table_body' className='table_body'>
                {coins.map(coin => {
                    
                        return (
                        <tr key={coin.id}>
                            <td>{coin.rank}</td>
                            <td>
                                <span className='coin_icon_container'>
                                    <img className='coin_icon' src={coin.icon} alt='coin_icon'/>
                                    {coin.id.toUpperCase()} 
                                </span>
                            </td>
                            <td>{coin.symbol}</td>
                            <td className='coin_marketcap'>{coin.marketCap}</td>
                            <td className='coin_price'>{coin.price} ($)</td>
                            <td className='coin_volume'>{coin.volume}</td>
                            <td className='extra_coin_data'>{coin.priceChange1d}</td>
                            <td className='extra_coin_data'>{coin.priceChange1h}</td>
                            <td className='extra_coin_data'>{coin.priceChange1w}</td>
                        </tr>
                        )
                    })
                } 
                </tbody>
           
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='coin_marketcap'></td>
                        <td className='coin_price'></td>
                        <td className='coin_volume'></td>
                        <td className='extra_coin_data'></td>
                        <td className='extra_coin_data'></td>
                        <td className='extra_coin_data'></td>
                    </tr>
                </tfoot>
            </table>

            <div className='error_loading'>
                {error ? error : null} 
                {loading ? 'Loading data ...': null}
            </div>     
        </div>
    );
}

export default React.memo(CoinComp);