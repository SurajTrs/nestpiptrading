'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradePlatforms: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start flex-md-row-reverse">
          {/* Left Image */}
          <div className="col-md-6 mb-5 mb-md-0 text-center">
            <img
              src="/assets/FXUS-Laptop-and-Phones-Platform.png"
              alt="Trading Platforms"
              className="img-fluid"
              style={{ maxWidth: '460px', borderRadius: '20px' }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '2.2rem' }}>
              Trade Without Compromise
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
              Our app and platforms give you every possible edge—so you can focus on what matters most: performance and precision.
            </p>

            {/* Platform Features */}
            <div className="mb-4 d-flex">
              <img
                src="/icons/mobile-blue.svg"
                alt="Mobile App Icon"
                height={32}
                className="me-3 mt-1"
              />
              <div>
                <h6 className="fw-semibold mb-1">Mobile App</h6>
                <p className="text-muted mb-0">
                  Intuitive and packed with tools—trade on the go with one-swipe trading, TradingView charts, and our exclusive Performance Analytics.
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex">
              <img
                src="/icons/monitor-blue.svg"
                alt="Web Trading Icon"
                height={32}
                className="me-3 mt-1"
              />
              <div>
                <h6 className="fw-semibold mb-1">Web Trading</h6>
                <p className="text-muted mb-0">
                  Trade with over 80 indicators, Reuters news, behavioral science tools, and TradingView charts—all in your browser.
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex">
              <img
                src="/icons/metatrader-blue.svg"
                alt="MetaTrader Icon"
                height={32}
                className="me-3 mt-1"
              />
              <div>
                <h6 className="fw-semibold mb-1">MT5 Enhanced</h6>
                <p className="text-muted mb-0">
                  The classic MetaTrader 5, now with Reuters news integration and all the tools serious traders demand.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#platforms"
              className="btn btn-lg mt-3"
              style={{
                backgroundColor: '#f24521',
                borderColor: '#FF7A00',
                color: '#fff',
                borderRadius: '12px',
                padding: '0.75rem 2rem',
                fontWeight: 500,
              }}
            >
              Choose Your Trading Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradePlatforms;
