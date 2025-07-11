'use client';

import React from 'react';

interface MarketData {
  name: string;
  sell: number;
  buy: number;
  spread: number;
}

const pricingData: MarketData[] = [
  { name: 'USD/CAD', sell: 1.36972, buy: 1.37002, spread: 3.0 },
  { name: 'USD/JPY', sell: 146.915, buy: 146.932, spread: 1.7 },
  { name: 'EUR/USD', sell: 1.16751, buy: 1.16763, spread: 1.2 },
  { name: 'GBP/USD', sell: 1.35484, buy: 1.35507, spread: 2.3 },
  { name: 'AUD/USD', sell: 0.65765, buy: 0.65778, spread: 1.3 },
];

const categories: string[] = [
  'All',
  'Forex',
  'Metals',
  'Indices',
  'Commodities',
  'Stocks',
  'Cryptos',
];

const StandardMarketPricingTable: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#014421' }}>
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold text-center mb-3" style={{ fontSize: '1.8rem' }}>
          <span style={{ color: '#f24521' }}>Standard Market:</span> Trade on ultra-competitive, transparent, and reliable spreads
        </h2>

        {/* Category Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="btn btn-outline-success px-3 py-1 rounded-pill fw-semibold"
              style={{ fontSize: '0.9rem' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-borderless text-center align-middle" style={{ minWidth: '350px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #FF7A00' }}>
                <th style={{ color: '#FF7A00' }}>Name</th>
                <th style={{ color: '#FF7A00' }}>Sell</th>
                <th style={{ color: '#FF7A00' }}>Buy</th>
                <th style={{ color: '#FF7A00' }}>Spread</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #FFB76B' }}>
                  <td className="fw-semibold">{item.name}</td>
                  <td>{item.sell.toFixed(5)}</td>
                  <td>{item.buy.toFixed(5)}</td>
                  <td className="fw-bold" style={{ color: '#FF7A00' }}>
                    {item.spread}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA + Timestamp */}
        <div className="text-center mt-4">
          <button className="btn btn-outline-warning fw-semibold rounded-pill px-4 py-2">
            Show More
          </button>
          <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
            Indicative Pricing updated 11:32:44 AM
          </p>
        </div>
      </div>
    </section>
  );
};

export default StandardMarketPricingTable;
