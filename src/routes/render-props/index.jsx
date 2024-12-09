import { useState, useEffect } from "react";

function USD({ value }) {
  return (
    <div className="currency-card bg-black-200 text-gray-500 p-4 rounded-md shadow-md my-4">
      <p>Amount in USD</p>
      <p className="currency text-4xl text-indigo-500 font-bold">
        {value.toFixed(2)} USD
      </p>
    </div>
  );
}

function EUR({ value }) {
  return (
    <div className="currency-card bg-black-200 text-gray-500 p-4 rounded-md shadow-md my-4">
      <p>Amount in EUR</p>
      <p className="currency text-4xl text-indigo-500 font-bold">
        {value.toFixed(2)} EUR
      </p>
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
    <div className="currency-card p-6 bg-black-100 text-white rounded-xl shadow-lg mt-10">
      <p className="mb-3 text-gray-500">Enter amount in USD</p>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        className="w-full p-2 mb-4 text-lg bg-black-200 text-white rounded-lg"
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
