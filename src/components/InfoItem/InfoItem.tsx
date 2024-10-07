import React from 'react';
import { Iconify } from '@/components/Iconify/Iconify';

interface InfoItemProps {
  icon: string;
  label: string;
  value: string | null;
  link?: boolean;
}

export function InfoItem({ icon, label, value, link }: InfoItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <Iconify icon={icon} className="w-5 h-5 text-gray-500" />
      <span className="text-gray-700 font-medium">{label}:</span>
      {link && value ? (
        <a
          href={value}
          className="text-gray-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-600 truncate" >{value || 'N/A'}</span>
      )}
    </div>
  );
}
