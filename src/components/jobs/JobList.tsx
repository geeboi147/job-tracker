import React from 'react';
import { JobCard } from './JobCard';
import { mockJobs } from '../../data/mockData';

export function JobList() {
  return (
    <div className="space-y-6">
      {mockJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}