'use client';

import CryptoBanner from '@/components/Markets/market/Cryptocurrency/CryptoBanner';
import CryptoCFDFeature from '@/components/Markets/market/Cryptocurrency/CryptoCFDFeature';
import CryptoDisclaimer from '@/components/Markets/market/Cryptocurrency/CryptoDisclaimer';
import CryptoExplained from '@/components/Markets/market/Cryptocurrency/CryptoExplained';
import CryptoMarketPricing from '@/components/Markets/market/Cryptocurrency/CryptoMarketPricing';
import CryptoMarketTable from '@/components/Markets/market/Cryptocurrency/CryptoMarketTable';
import CryptoNewsAndCalendar from '@/components/Markets/market/Cryptocurrency/CryptoNewsAndCalendar';
import CryptoPricingTable from '@/components/Markets/market/Cryptocurrency/CryptoPricingTable';
import CryptoRange from '@/components/Markets/market/Cryptocurrency/CryptoRange';
import CryptoTradingInfo from '@/components/Markets/market/Cryptocurrency/CryptoTradingInfo';
import PopularCryptos from '@/components/Markets/market/Cryptocurrency/PopularCryptos';
import React from 'react';




const cryptocurrencyPage = () => (
  <main>
   
 <CryptoBanner/>
  <CryptoCFDFeature/>
  <CryptoDisclaimer/>
  <CryptoExplained/>
  <CryptoMarketPricing/>
  <CryptoMarketTable/>
  <CryptoNewsAndCalendar/>
  <CryptoPricingTable/>
  <CryptoRange/>
  <PopularCryptos/>
  <CryptoTradingInfo/>
  </main>
);

export default cryptocurrencyPage;
