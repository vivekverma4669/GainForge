
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import WorkoutForm from '@/components/WorkoutForm';
import { mockWorkouts } from '@/lib/mockData';

export default function LogWorkoutPage() {
  const [workouts, setWorkouts] = useState(mockWorkouts);
  const [showSuccess, setShowSuccess] = useState(false);
  const [notes, setNotes] = useState('');

  const handleWorkoutSubmit = (newWorkout: any) => {
    const workoutWithId = {
      ...newWorkout,
      id: Date.now().toString(),
      notes: notes
    };
    setWorkouts([...workouts, workoutWithId]);
    setShowSuccess(true);
    setNotes('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black bebas text-gray-900 dark:text-white mb-4">
            LOG <span className="gradient-text">WORKOUT</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Record your training session and track your progress
          </p>
        </div>

        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="flex items-center">
              <i className="ri-check-circle-line w-6 h-6 flex items-center justify-center text-green-600 mr-3"></i>
              <div>
                <p className="text-green-800 dark:text-green-200 font-semibold">Workout logged successfully!</p>
                <p className="text-sm text-green-600 dark:text-green-300">Keep crushing those goals! 💪</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Workout Form */}
          <div className="lg:col-span-2">
            <WorkoutForm onSubmit={handleWorkoutSubmit} />
            
            {/* Notes Section */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold bebas text-gray-900 dark:text-white mb-4">
                WORKOUT NOTES
              </h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="How did you feel today? Diet notes, mood, energy level, recovery notes..."
                className="w-full h-32 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                maxLength={500}
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Add notes about diet, mood, energy, or recovery
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {notes.length}/500
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progressive Overload Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold bebas text-gray-900 dark:text-white mb-4">
                OVERLOAD TIPS
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
                  <i className="ri-arrow-up-circle-line w-6 h-6 flex items-center justify-center text-orange-600 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Increase Weight</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Add 2.5-5 lbs when you complete all sets</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                  <i className="ri-refresh-line w-6 h-6 flex items-center justify-center text-blue-600 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Add Reps</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Increase reps by 1-2 per set</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                  <i className="ri-add-circle-line w-6 h-6 flex items-center justify-center text-green-600 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Add Sets</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Include an additional set for more volume</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold bebas text-gray-900 dark:text-white mb-4">
                TODAY'S FUEL
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="ri-calendar-line w-5 h-5 flex items-center justify-center text-orange-500"></i>
                    <span className="font-medium text-gray-900 dark:text-white">This Week</span>
                  </div>
                  <span className="text-2xl font-bold text-orange-500">
                    {workouts.filter(w => {
                      const workoutDate = new Date(w.date);
                      const oneWeekAgo = new Date();
                      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                      return workoutDate >= oneWeekAgo;
                    }).length}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="ri-fire-line w-5 h-5 flex items-center justify-center text-red-500"></i>
                    <span className="font-medium text-gray-900 dark:text-white">Streak</span>
                  </div>
                  <span className="text-2xl font-bold text-red-500">7</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="ri-trophy-line w-5 h-5 flex items-center justify-center text-yellow-500"></i>
                    <span className="font-medium text-gray-900 dark:text-white">Next PR</span>
                  </div>
                  <span className="text-lg font-bold text-yellow-500">230 lbs</span>
                </div>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className="gradient-bg rounded-xl shadow-lg p-6 text-white">
              <div className="text-center">
                <i className="ri-double-quotes-l w-8 h-8 flex items-center justify-center text-2xl mx-auto mb-3 opacity-60"></i>
                <p className="text-lg font-semibold italic mb-3">
                  "The iron never lies. Every rep is a step closer to your goals."
                </p>
                <p className="text-sm opacity-80">Stay strong, stay consistent! 🔥</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
