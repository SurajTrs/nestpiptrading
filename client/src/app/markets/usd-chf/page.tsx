
'use client';

import UsdChfBanner from '@/components/Markets/popular-fx-markets/usdchf/UsdChfBanner';
import UsdChfChart from '@/components/Markets/popular-fx-markets/usdchf/UsdChfChart';
import UsdChfExplanation from '@/components/Markets/popular-fx-markets/usdchf/UsdChfExplanation';
import React from 'react';




const UsdJpyBannerPage = () => (
  <main>
   
    <UsdChfBanner/>
    <UsdChfExplanation/>
    <UsdChfChart/>
  </main>
  
);

export default UsdJpyBannerPage;
