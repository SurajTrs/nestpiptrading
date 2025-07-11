'use client';

import QualityExecutionFeatures from '@/components/Account/type/Standard/QualityExecutionFeatures';
import StandardAccountFeatures from '@/components/Account/type/Standard/StandardAccountFeatures';
import StandardAccountSection from '@/components/Account/type/Standard/StandardAccountSection';
import StandardBanner from '@/components/Account/type/Standard/StandardBanner';
import StandardMarketPricingTable from '@/components/Account/type/Standard/StandardMarketPricingTable';
import TradingPlatformsSection from '@/components/Account/type/Standard/TradingPlatformsSection';
import TradingSteps from '@/components/Account/type/Standard/TradingStep';
import React from 'react';




const StandardPage = () => (
  <main>

<StandardBanner/>
<TradingSteps/>
<StandardAccountSection/>
<StandardAccountFeatures/>
<StandardMarketPricingTable/>
<QualityExecutionFeatures/>
<TradingPlatformsSection/>


 </main>
);

export default StandardPage;
