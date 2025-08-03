'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProgressChart from '@/components/ProgressChart';
import { mockProgressData } from '@/lib/mockData';

export default function ProgressPage() {
  const [selectedExercise, setSelectedExercise] = useState('Bench Press');
  const [selectedTimeframe, setSelectedTimeframe] = useState('3months');

  const exercises = [
    { name: 'Bench Press', icon: 'ri-dumbbell-line', pr: 225 },
    { name: 'Deadlift', icon: 'ri-scales-3-line', pr: 315 },
    { name: 'Squats', icon: 'ri-run-line', pr: 275 },
    { name: 'Overhead Press', icon: 'ri-arrow-up-line', pr: 135 }
  ];

  const timeframes = [
    { value: '1month', label: '1 Month' },
    { value: '3months', label: '3 Months' },
    { value: '6months', label: '6 Months' },
    { value: '1year', label: '1 Year' }
  ];

  const progressStats = [
    { label: 'Total Weight Gained', value: '+45 lbs', trend: '+15%', color: 'text-green-500' },
    { label: 'Strength Increase', value: '+35%', trend: 'avg', color: 'text-blue-500' },
    { label: 'PRs This Month', value: '4', trend: '+2', color: 'text-orange-500' },
    { label: 'Consistency Rate', value: '87%', trend: '+12%', color: 'text-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black bebas text-gray-900 dark:text-white mb-4">
            PROGRESS <span className="gradient-text">TRACKING</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Monitor your strength gains and progressive overload journey
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {progressStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</h3>
                <span className={`text-sm font-semibold ${stat.color}`}>{stat.trend}</span>
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Exercise Selection */}
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bebas text-gray-900 dark:text-white mb-4 md:mb-0">
              EXERCISE PROGRESS
            </h2>
            <div className="flex space-x-2">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.value}
                  onClick={() => setSelectedTimeframe(timeframe.value)}
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    selectedTimeframe === timeframe.value
                      ? 'gradient-bg text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {timeframe.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {exercises.map((exercise) => (
              <button
                key={exercise.name}
                onClick={() => setSelectedExercise(exercise.name)}
                className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                  selectedExercise === exercise.name
                    ? 'gradient-bg text-white shadow-lg neon-glow'
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <div className="text-center">
                  <i className={`${exercise.icon} w-8 h-8 flex items-center justify-center text-2xl mx-auto mb-2`}></i>
                  <h3 className="font-semibold text-sm mb-1">{exercise.name}</h3>
                  <p className="text-xs opacity-80">PR: {exercise.pr} lbs</p>
                </div>
              </button>
            ))}
          </div>

          <ProgressChart
            data={mockProgressData}
            title={`${selectedExercise} Progress - ${timeframes.find(t => t.value === selectedTimeframe)?.label}`}
            exercise={selectedExercise}
          />
        </div>

        {/* Progressive Overload Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold bebas text-gray-900 dark:text-white mb-4">
              OVERLOAD INDICATORS
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <i className="ri-arrow-up-circle-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                  <span className="font-semibold text-gray-900 dark:text-white">Bench Press</span>
                </div>
                <span className="text-green-600 font-bold">+10 lbs</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <i className="ri-arrow-up-circle-line w-6 h-6 flex items-center justify-center text-orange-600"></i>
                  <span className="font-semibold text-gray-900 dark:text-white">Deadlift</span>
                </div>
                <span className="text-orange-600 font-bold">+15 lbs</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <i className="ri-arrow-up-circle-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  <span className="font-semibold text-gray-900 dark:text-white">Squats</span>
                </div>
                <span className="text-blue-600 font-bold">+20 lbs</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold bebas text-gray-900 dark:text-white mb-4">
              NEXT TARGETS
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Bench Press Goal</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="gradient-bg h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Current: 225 lbs → Goal: 250 lbs</p>
              </div>
              
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Deadlift Goal</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="gradient-bg h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Current: 315 lbs → Goal: 350 lbs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Volume Analysis */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold bebas text-gray-900 dark:text-white mb-6">
            VOLUME ANALYSIS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">This Week</h3>
              <p className="text-3xl font-black gradient-text">42,500</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">lbs total volume</p>
              <span className="inline-block mt-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                +15% from last week
              </span>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Monthly Average</h3>
              <p className="text-3xl font-black gradient-text">38,750</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">lbs per month</p>
              <span className="inline-block mt-2 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                Consistent trend
              </span>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Best Month</h3>
              <p className="text-3xl font-black gradient-text">45,200</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">December 2023</p>
              <span className="inline-block mt-2 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-full">
                Personal Record
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}