import React, { useEffect, useState } from 'react';
import '../css/trending.css';


const url = "https://api.coingecko.com/api/v3/search/trending";

const Trending = () => {
    
    const [currentTrending, setCurrentTrending] = useState([]);

    useEffect(() => {
        fetch(url).then(resp => resp.json()
        .then((data) => {setCurrentTrending(data.coins);console.log(data)}
        
        ));
        
      }, []);

  return (
    <div className='trending-container'>
        <h2 style={{color: "white"}}>Trending Coins</h2>
        {currentTrending.map((coins, index) => (
        <div key={index} className="trending-coins">
            <img src={coins.item.small} alt={coins.item.name}></img>
            <div className='trending-name'>
                {coins.item.name}({coins.item.symbol})
            </div>
            <div>
                <div>Rank#{coins.item.market_cap_rank}</div>
                <div className='trending-bit'><img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="bitcoin"></img>{coins.item.price_btc}</div>
            </div>
        </div>
      ))}
    </div>
  )

}

export default Trending