import React from 'react';
import { MapPin, Clock, Building2 } from 'lucide-react';
import { Job } from '../../types';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Building2 className="h-4 w-4 mr-1" />
            {job.company}
          </div>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location}
          </div>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            Posted {job.posted}
          </div>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          {job.type}
        </span>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-medium text-gray-900">{job.salary}</span>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Apply Now
        </button>
      </div>
    </div>
  );
}