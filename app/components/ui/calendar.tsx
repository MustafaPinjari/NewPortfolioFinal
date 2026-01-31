'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

interface CalendarProps {
  mode?: 'single';
  selected?: Date;
  className?: string;
}

export function Calendar({ selected, className }: CalendarProps) {
  const [currentDate] = useState(selected || new Date());

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const days = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selected && day === selected.getDate();
    days.push(
      <div
        key={day}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-md text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800',
          isSelected && 'bg-blue-500 text-white hover:bg-blue-600',
        )}
      >
        {day}
      </div>,
    );
  }

  return (
    <div
      className={cn(
        'p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700',
        className,
      )}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div
            key={day}
            className="h-8 w-8 flex items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{days}</div>
    </div>
  );
}
