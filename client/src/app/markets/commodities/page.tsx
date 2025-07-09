'use client';


import CommoditiesBanner from '@/components/Markets/market/Commodities/CommoditiesBanner';
import CommoditiesFAQ from '@/components/Markets/market/Commodities/CommoditiesFAQ';
import CommoditiesFeatures from '@/components/Markets/market/Commodities/CommoditiesFeatures';
import CommoditiesIntro from '@/components/Markets/market/Commodities/CommoditiesIntro';
import CommoditiesNewsAndCalendar from '@/components/Markets/market/Commodities/CommoditiesNewsAndCalendar';
import CommoditiesPricingTable from '@/components/Markets/market/Commodities/CommoditiesPricingTable';
import PopularCommodities from '@/components/Markets/market/Commodities/PopularCommodities';
import React from 'react';




const commoditiesPage = () => (
  <main>
  <CommoditiesBanner/>
   <CommoditiesFeatures/>
 <CommoditiesIntro/>

 <CommoditiesNewsAndCalendar/>
 <CommoditiesPricingTable/>
 <PopularCommodities/>
 <CommoditiesFAQ/>
  
  </main>
);

export default commoditiesPage;
