import React from 'react';
import { translate } from '@/lib/helper';
import { HugeiconsIcon, HugeiconsIconProps } from '@hugeicons/react';
import {
  File02Icon,
  UserMultiple02Icon,
  ShoppingBag01Icon,
  Globe02Icon,
} from '@hugeicons/core-free-icons';

interface IStatisticCardProps {
  value: string;
  label: string;
}

type IconType = HugeiconsIconProps['icon']

const iconConfig: {
  [key: string]: { icon: IconType; bgClass: string; iconColorClass: string };
} = {
  ProjectsCount: { icon: File02Icon, bgClass: 'bg-stat-pink-bg', iconColorClass: 'text-stat-pink' },
  Collaborations: { icon: UserMultiple02Icon, bgClass: 'bg-stat-green-bg', iconColorClass: 'text-stat-green' },
  PublishedProducts: { icon: ShoppingBag01Icon, bgClass: 'bg-stat-magenta-bg', iconColorClass: 'text-stat-magenta' },
  InProgress: { icon: Globe02Icon, bgClass: 'bg-stat-gray-bg', iconColorClass: 'text-stat-gray' },
};

export const StatisticCard = ({
  value,
  label,
}: IStatisticCardProps) => {
  const config = iconConfig[label];

  return (
    <div className="flex flex-col justify-center gap-3 bg-whitesmoke rounded-2xl md:w-full w-[358px] h-[207px] px-2 py-4 md:p-6 md:h-auto">
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center ${config?.bgClass || 'bg-gray'}`}
      >
        {config && (
          <HugeiconsIcon icon={config.icon} size={28} className={config.iconColorClass} />
        )}
      </div>
      <div className="text-[40px] font-bold text-black text-right">
        {value}
      </div>
      <div className="text-[16px] text-gray text-right">
        {translate(label)}
      </div>
    </div>
  );
};

