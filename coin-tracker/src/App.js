import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [won, setWon] = useState(0.0);

  const handleSelect = (event) => {
    const coinPrice = event.target.value.split(' ')[3];
    setWon(coinPrice * 1268);
  };
  //1268
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? null : coins.length}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={handleSelect}>
          {coins.map((coin, index) => {
            return (
              <option id={index}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            );
          })}
        </select>
      )}

      {loading?null:<h2>KOR: {won}won</h2>}

      
    </div>
  );
}

export default App;
