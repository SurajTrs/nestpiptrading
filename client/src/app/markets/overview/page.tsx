
'use client';


import CryptoPricingTable from '@/components/Markets/market/Cryptocurrency/CryptoPricingTable';
import OverviewBanner from '@/components/Markets/overview/OverviewBanner';
import SpreadsTable from '@/components/Markets/overview/SpreadsTable';
import TradePlatforms from '@/components/Markets/overview/TradePlatforms';
import React from 'react';




const IndicesPage = () => (
   <main>
  <OverviewBanner/>
  <TradePlatforms/>
  <SpreadsTable/>
  <CryptoPricingTable/>
  </main>
  
);

export default IndicesPage;
