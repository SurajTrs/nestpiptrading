'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HowToGetStarted: React.FC = () => {
  const steps = [
    {
      icon: '/icons/step-1.svg',
      title: 'Open a NestPip.com account',
      subtitle: '(Not available with a MetaTrader account)',
      button: {
        label: 'Open an Account',
        link: '#open-account',
      },
    },
    {
      icon: '/icons/step-2.svg',
      title: 'Create a TradingView login',
      subtitle: 'Go to TradingView.com, create an account, and log in.',
    },
    {
      icon: '/icons/step-3.svg',
      title: 'Connect to NestPip.com',
      subtitle: 'Enter your FOREX.com credentials on TradingView.',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          How to Get Started
        </h2>

        <div className="row justify-content-center g-4">
          {steps.map((step, idx) => (
            <div key={idx} className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={step.icon}
                  alt={`Step ${idx + 1}`}
                  height={64}
                  className="mb-3"
                  style={{
                    backgroundColor: '#FFEBD9',
                    borderRadius: '50%',
                    padding: '1rem',
                  }}
                />
                <h5 className="fw-semibold mb-2">{step.title}</h5>
                <p className="text-muted mb-3">{step.subtitle}</p>
                {step.button && (
                  <a
                    href={step.button.link}
                    className="btn btn-sm"
                    style={{
                      backgroundColor: '#f24521',
                      color: '#fff',
                      borderRadius: '10px',
                      padding: '0.5rem 1.5rem',
                      fontWeight: 500,
                    }}
                  >
                    {step.button.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
