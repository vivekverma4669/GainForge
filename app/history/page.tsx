'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import WorkoutHistory from '@/components/WorkoutHistory';
import ProgressChart from '@/components/ProgressChart';
import { mockWorkouts, mockProgressData } from '@/lib/mockData';

export default function HistoryPage() {
  const [workouts] = useState(mockWorkouts);
  const [selectedExercise, setSelectedExercise] = useState('Bench Press');

  const exercises = ['Bench Press', 'Deadlift', 'Squats', 'Overhead Press'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Workout History</h1>
          <p className="text-gray-600 mt-2">View your training history and progress over time</p>
        </div>

        {/* Exercise Progress Chart */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Exercise Progress</h2>
              <div className="flex space-x-2">
                {exercises.map((exercise) => (
                  <button
                    key={exercise}
                    onClick={() => setSelectedExercise(exercise)}
                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                      selectedExercise === exercise
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {exercise}
                  </button>
                ))}
              </div>
            </div>
            <ProgressChart
              data={mockProgressData}
              title={`${selectedExercise} Progress`}
              exercise={selectedExercise}
            />
          </div>
        </div>

        {/* Workout Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <i className="ri-dumbbell-line w-12 h-12 flex items-center justify-center text-blue-600 mx-auto mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Total Workouts</h3>
            <p className="text-3xl font-bold text-blue-600">{workouts.length}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <i className="ri-scales-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Total Volume</h3>
            <p className="text-3xl font-bold text-green-600">
              {workouts.reduce((sum, w) => sum + w.totalVolume, 0).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">lbs lifted</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <i className="ri-heart-pulse-line w-12 h-12 flex items-center justify-center text-red-600 mx-auto mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Avg per Workout</h3>
            <p className="text-3xl font-bold text-red-600">
              {Math.round(workouts.reduce((sum, w) => sum + w.totalVolume, 0) / workouts.length).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">lbs per session</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <i className="ri-muscle-line w-12 h-12 flex items-center justify-center text-purple-600 mx-auto mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Muscle Groups</h3>
            <p className="text-3xl font-bold text-purple-600">
              {new Set(workouts.map(w => w.muscleGroup)).size}
            </p>
            <p className="text-sm text-gray-600">trained</p>
          </div>
        </div>

        {/* Workout History List */}
        <WorkoutHistory workouts={workouts} />

        {/* Monthly Volume Chart */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Volume Trend</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-gray-900">This Month</h3>
              <p className="text-2xl font-bold text-blue-600">42,500 lbs</p>
              <p className="text-sm text-gray-600">+15% from last month</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-gray-900">Best Month</h3>
              <p className="text-2xl font-bold text-green-600">45,200 lbs</p>
              <p className="text-sm text-gray-600">December 2023</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-gray-900">Average</h3>
              <p className="text-2xl font-bold text-purple-600">38,750 lbs</p>
              <p className="text-sm text-gray-600">per month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}