import React from 'react';

const WhyTradeCommodities = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Left */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#FF7A00' }}>
              Why trade commodities with us?
            </h2>
            <ul className="list-unstyled">
              <li className="mb-4">
                <h5 className="fw-semibold">📡 Stay in the know</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                  Stay up to date with breaking news impacting global commodity prices through our in-platform Reuters feed.
                </p>
              </li>
              <li className="mb-4">
                <h5 className="fw-semibold">🔁 Go long or short</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                  Trade both rising and falling markets and take advantage of volatility.
                </p>
              </li>
              <li>
                <h5 className="fw-semibold">⚖️ Use leverage</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                  Start trading by depositing just a fraction of the full price – but remember, leverage can increase both profits and losses.
                </p>
              </li>
            </ul>
          </div>

          {/* Image Right */}
          <div className="col-md-6 text-center">
            <img
              src="/images/commodities-banner.png" // replace with actual path
              alt="Why Trade Commodities"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradeCommodities;
