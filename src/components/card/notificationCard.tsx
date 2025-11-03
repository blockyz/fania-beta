
import React from 'react';

interface Props {
  icon: React.ReactNode;
  iconBg: string;
  number: string;
  text: string;
  className?: string;
}

export const NotificationCard = ({
  icon,
  iconBg,
  number,
  text,
  className = '',
}: Props) => {
  return (
    <div className={`w-full p-6 bg-white rounded-lg shadow-md ${className}`}>
      <div className="pr-6">
        <div className="flex items-center justify-between">
          <div className={`w-14 h-14 ${iconBg} rounded-full flex items-center justify-center`}>
            {icon}
          </div>

          <div className="flex flex-col items-end space-y-1">
            <span className="text-lg font-semibold text-gray-900">{number}</span>
            <span className="text-sm text-gray-600">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};