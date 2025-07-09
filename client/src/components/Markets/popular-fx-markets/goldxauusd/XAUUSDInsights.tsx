'use client';

import React, { useEffect, useState } from 'react';

interface PriceData {
  price: number;
  daily_high?: number;
  daily_low?: number;
  prev_close?: number;
  symbol: string;
}

const XAUUSDInsights: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const socket = new WebSocket(
      'wss://ws.twelvedata.com/v1/quotes/price?apikey=fba60fe5f065465795f66506e7df063b'
    );

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          action: 'subscribe',
          params: { symbols: 'XAUUSD' },  // No slash here!
        })
      );
    };

    socket.onmessage = (event) => {
      const data: PriceData = JSON.parse(event.data);
      if (data.symbol === 'XAUUSD' && data.price) {
        setPrice(data.price);
        if (data.daily_high !== undefined) setHigh(data.daily_high);
        if (data.daily_low !== undefined) setLow(data.daily_low);
        if (data.prev_close !== undefined) setPrevClose(data.prev_close);
        setLastUpdated(new Date().toLocaleTimeString());
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const change =
    price !== null && prevClose !== null ? ((price - prevClose) / prevClose) * 100 : null;

  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold" style={{ color: '#f24521' }}>
          XAU/USD Insights
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8 bg-white rounded shadow p-4">
            <h3 className="mb-3">Current Price: {price !== null ? price.toFixed(2) : '--'}</h3>
            <p>
              <strong>Change: </strong>{' '}
              {change !== null ? (
                <span className={change >= 0 ? 'text-success' : 'text-danger'}>
                  {change >= 0 ? '+' : ''}
                  {change.toFixed(2)}%
                </span>
              ) : (
                '--'
              )}
            </p>
            <p>
              <strong>Days High:</strong> {high !== null ? high.toFixed(2) : '--'}
            </p>
            <p>
              <strong>Days Low:</strong> {low !== null ? low.toFixed(2) : '--'}
            </p>
            <p className="text-muted small">Last updated at: {lastUpdated ?? '--'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XAUUSDInsights;
