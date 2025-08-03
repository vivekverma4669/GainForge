
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', href: '/' },
    { id: 'log-workout', label: 'Log Workout', href: '/log-workout' },
    { id: 'history', label: 'History', href: '/history' },
    { id: 'progress', label: 'Progress', href: '/progress' },
    { id: 'profile', label: 'Settings', href: '/profile' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 gradient-bg rounded-lg neon-glow">
              <i className="ri-fire-line w-6 h-6 flex items-center justify-center text-white"></i>
            </div>
            <h1 className="text-2xl font-bold bebas tracking-wide gradient-text">GAINFORGE</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'gradient-bg text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tab.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
              <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
