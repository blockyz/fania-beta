import React from 'react';
import { translate } from '@/lib/helper';
import { getStatistics } from '@/lib/data';
import { StatisticCard } from '@/components/content/statistic-card';

const statistics = getStatistics();
export const Statistics = () => {

  return (
    <div className="lg:w-full w-[390px] mx-auto mt-8 flex align-center flex-col gap-4">
      <div className="mb-6 px-2 text-right">
        <h2 className="text-[16px] lg:text-[24px] font-bold text-black">
          {translate('OurActivitiesStatistics')}
        </h2>
        <p className="text-[16px] lg:text-[24px] font-bold text-textgray mt-1">
          {translate('InRecentYears')}
        </p>
      </div>
      <div className="flex flex-col md:flex-row px-4 gap-4">
        {statistics.map((stat) => (
          <StatisticCard
            key={stat.id}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

