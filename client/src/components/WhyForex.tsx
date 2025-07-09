import React from 'react';

const WhyForex: React.FC = () => (
  <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
    <div className="container">
      <h3 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
        Why Choose NestPip?
      </h3>
      <p className="mb-5 text-center text-muted" style={{ maxWidth: '720px', margin: '0 auto' }}>
        With over two decades of experience, NestPip empowers traders with powerful platforms,
        expert tools, and unbeatable pricing—helping you succeed in global financial markets.
      </p>

      <div className="row justify-content-center">
        {[
          {
            img: '/icons/metatrader.svg',
            alt: 'MetaTrader',
            title: 'MetaTrader Support',
            desc: 'Trade on the world’s most trusted platform with charting, bots, and precision execution.',
          },
          {
            img: '/icons/pricing.svg',
            alt: 'Pricing',
            title: 'Competitive Pricing',
            desc: 'Tight spreads, low commissions, and zero hidden fees to boost your profitability.',
          },
          {
            img: '/icons/tools.svg',
            alt: 'Advanced Tools',
            title: 'Exclusive Tools',
            desc: 'Access smart analytics, trade signals, and risk control tools that elevate your strategy.',
          },
        ].map(({ img, alt, title, desc }, i) => (
          <div key={i} className="col-md-10 mb-4">
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
    </div>
  </section>
);

export default WhyForex;
