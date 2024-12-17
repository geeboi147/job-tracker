import React from 'react';

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'];
const salaryRanges = ['$0-$50k', '$50k-$100k', '$100k-$150k', '$150k+'];

export function JobFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Job Type</h3>
        <div className="mt-2 space-y-2">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Experience Level</h3>
        <div className="mt-2 space-y-2">
          {experienceLevels.map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Salary Range</h3>
        <div className="mt-2 space-y-2">
          {salaryRanges.map((range) => (
            <label key={range} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}