import React from 'react';
import { FaBell } from 'react-icons/fa';
import { Badge } from './badge';

function NotifBell({ count = 5 }) {
  return (
    <div className="relative">
      <FaBell className="text-2xl text-thgray" />
      {count > 0 && (
        <Badge
          variant="th-blue"
          className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none"
        >
          {count}
        </Badge>
      )}
    </div>
  );
}

export default NotifBell;
