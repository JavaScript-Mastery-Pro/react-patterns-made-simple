import { useState, useEffect } from "react";

function USD({ value }) {
  return (
    <div className="currency-card">
      <p>Amount in USD</p>
      <p>{value.toFixed(2)} USD</p>
    </div>
  );
}

function EUR({ value }) {
  return (
    <div className="currency-card">
      <p>Amount in EUR</p>
      <p>{value.toFixed(2)} EUR</p>
    </div>
  );
}

function CurrencyConverter({ renderUSD, renderEUR }) {
  const [amount, setAmount] = useState(0);
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      setRates(data.rates);
    };

    fetchRates();
  }, []);

  if (!rates) return <div className="spinner" />;

  const convertedUSD = amount;
  const convertedEUR = amount * rates.EUR;

  return (
    <div className="currency-container">
      <p>Enter amount in USD</p>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Enter amount in USD"
      />

      {renderUSD({ value: convertedUSD })}
      {renderEUR({ value: convertedEUR })}
    </div>
  );
}

function RenderPropsPattern() {
  return (
    <main className="container">
      <h2>Currency Converter</h2>

      <CurrencyConverter renderUSD={USD} renderEUR={EUR} />
    </main>
  );
}

export default RenderPropsPattern;
