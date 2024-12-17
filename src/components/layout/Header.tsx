import React from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { Link } from '../ui/Link';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-indigo-600">JobMatch AI</h1>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <Link href="/jobs">Find Jobs</Link>
            <Link href="/companies">Companies</Link>
            <Link href="/resources">Resources</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}