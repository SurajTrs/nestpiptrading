// pages/index.tsx (or wherever your HomePage is)
import React from 'react';
import Head from 'next/head';
import TopNavBar from './TopNavBar';
import MainNavbar from './MainNavbar';
import HeroSection from '../components/HeroSection';
import MarketTypes from '../components/MarketTypes';
import WhyForex from '../components/WhyForex';
import PushingForward from '../components/PushingForward';
import ActiveTrader from '../components/ActiveTrader';
import TradePlatforms from '../components/Markets/overview/TradePlatforms';
import TradingViewHero from '../components/Markets/overview/TradingViewHero';
import HowToGetStarted from '../components/HowToGetStarted';
import WhatIsTradingView from '../components/WhatIsTradingView';
import TradingViewFeaturesWithImage from '../components/Markets/overview/TradingViewFeatures';
import TradingViewExtraFeatures from '../components/Markets/overview/TradingViewExtraFeatures';
import TradingViewMarketInfo from '../components/Markets/overview/TradingViewMarketInfo';
import TradingViewConnectBanner from '../components/Markets/overview/TradingViewConnectBanner';
import BenefitsSection from '../components/BenefitsSection';
import SpreadsTable from '../components/Markets/overview/SpreadsTable';
import NewsCards from '../components/NewsCards';
import TradeItBanner from '../components/TradeItBanner';
import Footer from './Footer';
import CryptoPricingTable from '@/components/Markets/market/Cryptocurrency/CryptoPricingTable';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>NestPip | More Markets, Better Terms</title>
        <meta name="description" content="Trade smarter with NestPip – low spreads, top platforms, and global markets at your fingertips." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopNavBar />
      <MainNavbar />
      <HeroSection />
      <MarketTypes />
       <WhatIsTradingView />
  
      <TradePlatforms />
      <TradingViewHero />
     <PushingForward />
     
      <TradingViewFeaturesWithImage />
      <TradingViewExtraFeatures />
      <TradingViewMarketInfo />
      <TradingViewConnectBanner />
<CryptoPricingTable/>
       <WhyForex />
      <HowToGetStarted />
      <BenefitsSection />
      <SpreadsTable />
          <ActiveTrader />
      <NewsCards />
      <TradeItBanner />
      <Footer />
    </>
  );
};

export default HomePage;
