import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner: React.FC = () => {
  return (
    <section className="banner position-relative text-white d-flex align-items-center">
      {/* Background video with blur */}
      <video
        className="banner-video position-absolute w-100 h-100"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/Banner6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening */}
      <div className="overlay position-absolute w-100 h-100" />

      {/* Content aligned to left */}
      <div className="container position-relative text-start text-white">
        <div className="col-md-7 px-3 px-md-5">
          <h1 className="display-4 fw-bold mb-3 heading-orange animate fadeInUp delay-1">
            Trade Global Markets Online with Nestpip
          </h1>
          <p className="lead mb-4 animate fadeInUp delay-2">
            Forex, Crypto, Stocks & More in One Powerful Platform
          </p>

          <ul className="list-unstyled mb-4 fs-5">
            <li className="animate fadeInUp delay-3">
              ✅ 500+ Instruments — Forex, Crypto, Stocks, Indices, Commodities
            </li>
            <li className="animate fadeInUp delay-4">
              ✅ Designed for Beginners and Professional Traders
            </li>
            <li className="animate fadeInUp delay-5">
              ✅ Real-Time Data & Advanced Trading Tools
            </li>
            <li className="animate fadeInUp delay-6">
              ✅ Secure & Reliable with Cutting-Edge Technology
            </li>
          </ul>

          <button className="btn btn-lg px-5 btn-orange animate fadeInUp delay-7">
            Start Trading Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .banner {
          height: 75vh;
          overflow: hidden;
          background: black;
        }
        .banner-video {
          object-fit: cover;
          top: 0;
          left: 0;
          z-index: 0;
          filter: blur(4px);
          transform: scale(1.05);
          height: 100%;
          position: absolute;
        }
        .overlay {
          background: rgba(0, 0, 0, 0.55);
          top: 0;
          left: 0;
          z-index: 1;
          position: absolute;
        }
        .container {
          z-index: 2;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
        }
        .heading-orange {
          color: #f24521;
        }
        .btn-orange {
          background-color: #f24521;
          color: white;
          transition: background-color 0.3s ease;
        }
        .btn-orange:hover,
        .btn-orange:focus {
          background-color: #d7371a;
          border-color: #d7371a;
          color: white;
        }

        /* Animation classes */
        .animate {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        .fadeInUp {
          animation-name: fadeInUp;
        }
        .delay-1 {
          animation-delay: 0.3s;
        }
        .delay-2 {
          animation-delay: 0.6s;
        }
        .delay-3 {
          animation-delay: 0.9s;
        }
        .delay-4 {
          animation-delay: 1.2s;
        }
        .delay-5 {
          animation-delay: 1.5s;
        }
        .delay-6 {
          animation-delay: 1.8s;
        }
        .delay-7 {
          animation-delay: 2.1s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          ul li {
            font-size: 1rem !important;
          }
          .col-md-7 {
            width: 100%;
            padding: 0 1rem;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
