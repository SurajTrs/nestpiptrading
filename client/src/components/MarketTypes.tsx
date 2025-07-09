import React from 'react';

const MarketCardRow: React.FC = () => {
  const cards = [
    {
      img: '/icons/stocks.svg',
      alt: 'Stocks',
      title: 'Stocks & CFDs',
      desc: 'Access thousands of stocks, gold, oil, and crypto CFDs on a single platform.',
    },
    {
      img: '/icons/spreads.svg',
      alt: 'Spreads',
      title: 'Tight Spreads',
      desc: 'Trade major FX pairs with spreads as low as 0.0 and minimal commissions.',
    },
    {
      img: '/icons/commissions.svg',
      alt: 'Commissions',
      title: 'Low Commissions',
      desc: 'Enjoy transparent pricing with zero hidden fees and competitive rates.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
      <div className="container">
        <h3 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
          More Markets, Better Terms
        </h3>

        <div className="row justify-content-center">
          {cards.map(({ img, alt, title, desc }, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="d-flex align-items-start">
                <img
                  src={img}
                  alt={alt}
                  height={48}
                  className="me-4"
                  style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.1))' }}
                />
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: '#f24521' }}>
                    {title}
                  </h5>
                  <p className="text-muted mb-0">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-success mx-2 px-4 py-2 rounded-pill" style={{ fontSize: '1.1rem' }}>
            Start Trading
          </button>
          <button className="btn btn-outline-primary mx-2 px-4 py-2 rounded-pill" style={{ fontSize: '1.1rem' }}>
            Try a Demo Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketCardRow;
