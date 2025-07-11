import React from 'react';
import { FaCoins, FaDesktop, FaArrowTrendUp } from 'react-icons/fa6';

const StandardAccountFeatures: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#014421' }}>
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#f24521' }}>
            Why Trade with a Standard Account
          </h2>
        </div>

        {/* Feature Blocks */}
        <div className="row text-center g-4">
          {/* Feature 1 */}
          <div className="col-md-4">
            <FaCoins size={40} color="#014421" className="mb-3" />
            <h5 className="fw-bold">Tight spreads as low as 0.8 pips for EUR/USD</h5>
            <p>
              Trade over 80 currency pairs with tight spreads and superior execution.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <FaArrowTrendUp size={40} color="#014421" className="mb-3" />
            <h5 className="fw-bold">Opportunity for price improvement on limit orders</h5>
            <p>
              When the market moves in your favor, our trading tech passes along savings by executing your trade at a better price.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <FaDesktop size={40} color="#014421" className="mb-3" />
            <h5 className="fw-bold">Powerful trading platforms</h5>
            <p>
              Integrated tools, Reuters news, 80+ indicators on web & mobile apps, plus TradingView integration.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-5">
          <button className="btn btn-success fw-semibold me-3 px-4 py-2 rounded-pill">
            OPEN A STANDARD ACCOUNT
          </button>
          <button className="btn btn-outline-success fw-semibold px-4 py-2 rounded-pill">
            OPEN DEMO ACCOUNT
          </button>
        </div>
      </div>
    </section>
  );
};

export default StandardAccountFeatures;
