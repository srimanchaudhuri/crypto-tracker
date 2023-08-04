import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './coin/coin';
/*
https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

*/

const List = () => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const hitRefresh = [];

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, hitRefresh)

  const handleChange = e => {
    setSearch(e.target.value)
  }

  function refresh() {
    hitRefresh.push(1);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search Crypto</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input' onChange={handleChange} />
          <button className='coin-refresh' onClick={refresh}>Refresh</button>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  );
}

export default List
