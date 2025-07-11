import React from 'react';
import { FaDesktop, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const platformFeatures = [
  {
    icon: <FaDesktop size={32} color="#007BFF" />,
    title: 'Web Trading',
    description:
      'Simplicity, speed, and reliability deliver a superior trading experience accessible from all modern browsers and operating systems.',
  },
  {
    icon: <FaMobileAlt size={32} color="#007BFF" />,
    title: 'Mobile Apps',
    description:
      'You’re on the move and so are the markets. Manage your account and trade on the go with ease, using one-swipe trading and quality execution.',
  },
  {
    icon: <FaChartLine size={32} color="#007BFF" />,
    title: 'TradingView',
    description:
      'Connect to TradingView to access their suite of renowned charts, exclusive trader tools, and ideas.',
  },
];

const TradingPlatformsSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#014421' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left (Image) */}
          <div className="col-md-6 text-center">
            <img
              src="/images/trading-platforms-devices.png"
              alt="Trading Platforms"
              className="img-fluid"
              style={{ maxHeight: '380px' }}
            />
          </div>

          {/* Right (Text Content) */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ fontSize: '1.8rem', color:'#f24521' }}>
              Trade the global markets, your way
            </h2>
            <p className="mb-4 fs-5">
              Open a Standard account and manage your trading across all your devices.
            </p>

            <div className="d-flex flex-column gap-4">
              {platformFeatures.map(({ icon, title, description }, index) => (
                <div key={index} className="d-flex align-items-start gap-3">
                  <div>{icon}</div>
                  <div>
                    <h5 className="fw-semibold mb-1" style={{ color: '#007BFF' }}>{title}</h5>
                    <p className="mb-0" style={{ color: '#014421' }}>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="btn btn-outline-primary fw-semibold rounded-pill px-4 py-2">
                SEE ALL PLATFORMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPlatformsSection;
