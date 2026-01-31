'use client';

import { Fragment, useState } from 'react';
import useSWR from 'swr';
import Calendar from './calendar';
import Days from './days';
import { GITHUB_USERNAME } from './github';
import GithubCalendarSkeleton from './github-calendar-skeleton';
import GithubStats from './github-stats';
import GithubStatsSkeleton from './github-stats-skeleton';
import YearSelect from './year-select';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch');
  }
  return response.json();
};

export default function Contributions() {
  const [year, setYear] = useState(2024); // Default to 2024 instead of current year

  const {
    data: contributions,
    isLoading,
    error,
  } = useSWR(
    `/api/github/contributions?username=${GITHUB_USERNAME}&year=${year}`,
    fetcher,
  );

  if (error) {
    console.error('❌ SWR Error:', error);
    return (
      <div className="flex flex-col space-y-4">
        <div className="text-red-500 p-4 border border-red-300 rounded">
          <p>Failed to load GitHub contributions</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!contributions || isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <Days />
          <GithubCalendarSkeleton />
          <YearSelect selectedYear={year} onYearChange={setYear} />
        </div>
        <GithubStatsSkeleton />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="flex space-x-2">
        <Days />
        <Calendar contributions={contributions} />
        <YearSelect selectedYear={year} onYearChange={setYear} />
      </div>
      <GithubStats contributions={contributions} />
    </Fragment>
  );
}
