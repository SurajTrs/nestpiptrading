'use client';

import React from 'react';
import GbpUsdBanner from '@/components/Markets/popular-fx-markets/gbpusd/GbpUsdBanner';
import PivotTablePage from '@/components/Markets/popular-fx-markets/eurusd/PivotTable';
import GbpUsdChart from '@/components/Markets/popular-fx-markets/gbpusd/GbpUsdChart';


const EurUsdbannerPage = () => (
  <main>
    <GbpUsdBanner />
     <GbpUsdChart/>
     <PivotTablePage/>
  </main>
  
);

export default EurUsdbannerPage;
