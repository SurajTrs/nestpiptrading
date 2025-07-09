
'use client';


import StockBanner from '@/components/Markets/Stocks/StockBanner';
import StockCfdFaq from '@/components/Markets/Stocks/StockCfdFaq';
import StockCFDsExplained from '@/components/Markets/Stocks/StockCFDsExplained';
import StockCFDsInfo from '@/components/Markets/Stocks/StockCFDsInfo';
import StockFeatures from '@/components/Markets/Stocks/StockFeatures';
import StockPricingTable from '@/components/Markets/Stocks/StockPricingTable';
import StocksNewsAndCalendar from '@/components/Markets/Stocks/StocksNewsAndCalendar';
import WhyTradeStockCFDs from '@/components/Markets/Stocks/WhyTradeStockCFDs';
import React from 'react';




const IndicesPage = () => (
  <main>
  <StockBanner/>
   <StockCFDsExplained/>
   <StockCFDsInfo/>
   <StockFeatures/>
   <StockPricingTable/>
   <StocksNewsAndCalendar/>
   <WhyTradeStockCFDs/>
      <StockCfdFaq/>

  </main>
  
);

export default IndicesPage;
