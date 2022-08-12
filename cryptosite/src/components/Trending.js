import React, { useEffect, useState } from 'react'
const url = "https://api.coingecko.com/api/v3/search/trending"
const Trending = () => {
    
    const [currentTrending, setCurrentTrending] = useState([]);

    useEffect(() => {
        fetch(url).then(resp => resp.json()
        .then((data) => {setCurrentTrending(data.coins);console.log(data)}
        
        ));
        
      }, []);

  return (
    <div>
        {currentTrending.map((coins, index) => (
        <div key={index} className="trending-coins"><img src={coins.item.small} alt={coins.item.name}></img>{coins.item.name}</div>
      ))}
    </div>
  )

}

export default Trending