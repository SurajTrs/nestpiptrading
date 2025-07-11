
'use client';

import FaqSection from '@/components/Markets/market/Forex/FaqSection';
import ForexBanner from '@/components/Markets/market/Forex/ForexBanner';
import ForexExplained from '@/components/Markets/market/Forex/ForexExplained';
import ForexFeatures from '@/components/Markets/market/Forex/ForexFeatures';
import ForexTradingInfo from '@/components/Markets/market/Forex/ForexTradingInfo';
import ForexTradingTools from '@/components/Markets/market/Forex/ForexTradingTools';
import FxPricingTable from '@/components/Markets/market/Forex/FxPricingTable';
import FxTradingApps from '@/components/Markets/market/Forex/FxTradingApps';
import LearnForexSection from '@/components/Markets/market/Forex/LearnForexSection';
import WhyForex from '@/components/WhyForex';
import WhyForexSection from '@/components/WhyForexSection';

import React from 'react';




const ForexBannerPage = () => (
  <main>
   
    <ForexBanner/>
    <ForexFeatures/>
    <ForexExplained/>
     <ForexTradingInfo/>
    

    <WhyForex/>
    
   
    <ForexTradingTools/>
    <FxPricingTable/>
    <FxTradingApps/>
    <WhyForexSection/>
    <LearnForexSection/>
    
    <FaqSection/>
  </main>
  
);

export default ForexBannerPage;
