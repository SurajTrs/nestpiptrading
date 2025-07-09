import React from 'react';

const LandingSection: React.FC = () => {
  return (
    <section className="landing-section-wrapper">
      <div className="landing-section">
      

        <div className="text-section">
          <h1 className="headline text-white">
            BUILT FOR TRADERS BACKED BY EXPERTS
          </h1>
          <p className="paragraph">
            At Nestpip, we take care of the backend, support, risk, and compliance
            so you can focus on growing your trading community.
          </p>
          <ul className="features-list text-white">
            <li>Full white-label solutions</li>
            <li>Multi-language support</li>
            <li>Risk management tools</li>
            <li>Dedicated account managers</li>
          </ul>
        </div>

        <div className="images-section">
          <div className="hexagon-container">
            <img src="/images/trader-screen.png" alt="Trader at screen" />
          </div>
          <div className="phone-image-container">
            <img src="/images/stock-phone.png" alt="Phone stock chart" />
          </div>
        </div>

        <a
          className="bottom-right-link"
          href="https://www.nestpip.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#4CAF50" />
            <path d="M7 12l5 5V7z" fill="white" />
          </svg>
          www.nestpip.com
        </a>

        <div className="decor-topright">
          {[...Array(25)].map((_, i) => <div key={`top-${i}`} />)}
        </div>
        <div className="decor-bottomleft">
          {[...Array(25)].map((_, i) => <div key={`bot-${i}`} />)}
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
