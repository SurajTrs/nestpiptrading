import React from 'react';

const LandingSection: React.FC = () => {
  return (
    <section className="landing-section-wrapper">
      <div className="landing-section">
      

        <div className="text-section align-left">
          <h1 className="headline text-white">
            Trade Global Markets Online with Nestpip – Forex, Crypto, Stocks & More in One Platform
          </h1>
          <p className="paragraph">
            Your One-Stop Shop for Trading in All Global Financial Markets
          </p>
          <ul className="features-list text-white">
         
  <li>Trade a wide range of assets including <strong>Forex</strong>, <strong>Cryptocurrencies</strong>, <strong>Stocks</strong>, <strong>Indices</strong>, and <strong>Commodities</strong> — all in one place.</li>
  <li>Designed for everyone — from <strong>beginners</strong> to <strong>professional traders</strong>.</li>
  <li>Access <strong>500+ top trading instruments</strong> across global markets in <strong>real time</strong>.</li>
  <li><strong>Reliable</strong>, <strong>secure</strong>, and built with the tools you need to succeed in modern trading.</li>


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
      
      </div>
    </section>
  );
};

export default LandingSection;
