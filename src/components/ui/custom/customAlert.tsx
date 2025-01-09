import React from 'react';
import { FaInfoCircle, FaRegTimesCircle } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosWarning } from 'react-icons/io';

import { cn } from '@/shared/lib/utils';

type CustomAlertProps = {
  type?: 'success' | 'warning' | 'error' | 'default';
  className?: string;
  children: React.ReactNode; // Accept children as ReactNode
};

const CustomAlert: React.FC<CustomAlertProps> = ({
  type = 'default',
  className,
  children, // Use children prop
}) => {
  const customAlertClasses = cn(
    'rounded-lg p-4',
    {
      'bg-blue-100 text-blue-800': type === 'default',
      'bg-green-100 text-green-800': type === 'success',
      'bg-yellow-100 text-yellow-800': type === 'warning',
      'bg-red-100 text-red-800': type === 'error',
    },
    className,
  );

  const iconClasses = cn('h-5 w-5 mr-3', {
    'text-blue-500': type === 'default',
    'text-green-500': type === 'success',
    'text-yellow-500': type === 'warning',
    'text-red-500': type === 'error',
  });

  // Define icons explicitly for all possible types
  const iconType = {
    success: FaCircleCheck,
    warning: IoIosWarning,
    error: FaRegTimesCircle,
    default: FaInfoCircle,
  };

  const IconComponent = iconType[type]; // Get the corresponding icon component

  return (
    <div className={customAlertClasses}>
      <div className='flex items-center'>
        <IconComponent className={iconClasses} />
        <span>{children}</span> {/* Render children directly */}
      </div>
    </div>
  );
};

export default CustomAlert;
