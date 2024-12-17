import React from 'react';
import { Header } from './components/layout/Header';
import { SearchBar } from './components/search/SearchBar';
import { JobList } from './components/jobs/JobList';
import { JobFilters } from './components/filters/JobFilters';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600">
            Discover opportunities matched to your skills and experience
          </p>
        </div>

        <SearchBar />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <JobFilters />
          </div>
          
          <div className="lg:col-span-3">
            <JobList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;