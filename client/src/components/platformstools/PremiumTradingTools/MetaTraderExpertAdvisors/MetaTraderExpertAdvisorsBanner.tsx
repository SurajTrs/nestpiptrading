'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const marketNavItems = [
  { icon: '/icons/ActiveTrader-icon.svg', label: 'Active Trader' },
  { icon: '/icons/APITrading-icon.svg', label: 'API Trading' },
  { icon: '/icons/ExpertAdvisor-icon.svg', label: 'MetaTrader Expert Advisors' },
  { icon: '/icons/VPSHosting-icon.svg', label: 'MetaTrader VPS Hosting' },
];

const MetaTraderExpertAdvisorsBanner: React.FC = () => {
  const pathname = usePathname();
  const currentMarket = pathname?.split('/').pop()?.replace(/-/g, '').toLowerCase();

  return (
    <section style={{ backgroundColor: '#f24521', color: '#fff', padding: '5rem 0' }}>
      <div className="container text-center">
        {/* Nav Icons */}
        <div
          className="d-flex justify-content-center gap-3 overflow-auto mb-4 pb-3"
          style={{ flexWrap: 'nowrap' }}
        >
          {marketNavItems.map(({ icon, label }, idx) => {
            const normalizedLabel = label.replace(/[()\/\s\.]/g, '').toLowerCase();
            const isActive = normalizedLabel === currentMarket;

            return (
              <a
                key={idx}
                href={`/platforms-tools/${label.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                className={`btn d-flex flex-column align-items-center justify-content-center fw-semibold ${
                  isActive ? 'btn-light' : 'btn-outline-light'
                }`}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '12px',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s ease',
                  backgroundColor: isActive
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  color: isActive ? '#000' : '#fff',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = isActive
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(255,255,255,0.1)')
                }
              >
                <img src={icon} alt={label} style={{ width: '40px', marginBottom: '0.6rem' }} />
                <span style={{ fontSize: '0.9rem' }}>{label}</span>
              </a>
            );
          })}
        </div>

        {/* Expert Advisors Content */}
        <div className="row align-items-center text-md-start text-center mt-5">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Automate Your Trading with MetaTrader Expert Advisors
            </h1>
            <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '620px', margin: '0 auto' }}>
              Use powerful algorithmic trading robots to execute strategies 24/7 without manual intervention.
            </p>
            <ul
              className="text-start"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                maxWidth: '420px',
                margin: '0 auto',
              }}
            >
              <li>Customizable and fully automated trading robots</li>
              <li>Backtest strategies with historical data</li>
              <li>Enhance precision and reduce emotional trading</li>
            </ul>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-4">
              <a
                href="/tools/meta-trader-expert-advisors"
                className="btn btn-primary fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '220px' }}
              >
                Explore Expert Advisors
              </a>
              <a
                href="/tools"
                className="btn btn-outline-light fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '150px', color: '#fff' }}
              >
                View All Tools
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="/assets/meta-trader-expert-advisors-banner.png"
              alt="MetaTrader Expert Advisors"
              className="img-fluid rounded"
              style={{ maxHeight: '360px', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaTraderExpertAdvisorsBanner;
