import React from 'react';
import { Search, MapPin } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search
        </button>
      </div>
    </div>
  );
}