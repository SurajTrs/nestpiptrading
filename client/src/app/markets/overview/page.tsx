
'use client';


import OverviewBanner from '@/components/Markets/overview/OverviewBanner';
import SpreadsTable from '@/components/Markets/overview/SpreadsTable';
import TradePlatforms from '@/components/Markets/overview/TradePlatforms';
import React from 'react';




const IndicesPage = () => (
   <main>
  <OverviewBanner/>
  <TradePlatforms/>
  <SpreadsTable/>
  </main>
  
);

export default IndicesPage;
