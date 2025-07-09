'use client';

import React from 'react';
import EurUsdbanner from '@/components/Markets/popular-fx-markets/eurusd/EurUsdbanner';
import EURUSDNews from '@/components/Markets/popular-fx-markets/eurusd/EURUSDNews';
import PivotTablePage from '@/components/Markets/popular-fx-markets/eurusd/PivotTable';
import EurUsdChart from '@/components/Markets/popular-fx-markets/eurusd/EurUsdChart';


const EurUsdbannerPage = () => (
  <main>
    <EurUsdbanner />
     <EurUsdChart/>
     <PivotTablePage/>
     <EURUSDNews/>
     
    
  </main>
  
);

export default EurUsdbannerPage;
