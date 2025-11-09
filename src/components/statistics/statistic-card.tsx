import React from 'react';
import { translate } from '@/lib/helper';
import { HugeiconsIcon } from '@hugeicons/react';
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

type IconType = ([string, {
  [key: string]: string | number;
}])[] | readonly (readonly [string, {
  readonly [key: string]: string | number;
}])[];

const iconConfig: {
  [key: string]: { icon: IconType; iconColor: string; bgClass: string };
} = {
  ProjectsCount: { icon: File02Icon, iconColor: '#FF6B9D', bgClass: 'bg-stat-pink-bg' },
  Collaborations: { icon: UserMultiple02Icon, iconColor: '#4CAF50', bgClass: 'bg-stat-green-bg' },
  PublishedProducts: { icon: ShoppingBag01Icon, iconColor: '#E91E63', bgClass: 'bg-stat-magenta-bg' },
  InProgress: { icon: Globe02Icon, iconColor: '#9E9E9E', bgClass: 'bg-stat-gray-bg' },
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
          <HugeiconsIcon icon={config.icon} size={28} color={config.iconColor} />
        )}
      </div>
      <div className="text-4xl font-bold text-black text-right">
        {value}
      </div>
      <div className="text-sm text-black text-right">
        {translate(label)}
      </div>
    </div>
  );
};

