'use client';



import WallStreetBanner from '@/components/Markets/PopularIndices/wallstreet/WallStreetBanner';
import WallStreetChart from '@/components/Markets/PopularIndices/wallstreet/WallStreetChart';
import WallStreetInsights from '@/components/Markets/PopularIndices/wallstreet/WallStreetInsights';
import WallStreetNews from '@/components/Markets/PopularIndices/wallstreet/WallStreetNews';
import React from 'react';




const commoditiesPage = () => (
  <main>
  <WallStreetBanner/>
 <WallStreetChart/>
 <WallStreetInsights/>
 <WallStreetNews/>


  </main>
);

export default commoditiesPage;
