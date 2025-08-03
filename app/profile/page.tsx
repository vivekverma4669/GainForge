'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProfileForm from '@/components/ProfileForm';
import { mockProfile } from '@/lib/mockData';

export default function ProfilePage() {
  const [profile, setProfile] = useState(mockProfile);
  const [bodyweightLog, setBodyweightLog] = useState([
    { date: '2024-01-01', weight: 185 },
    { date: '2024-01-08', weight: 183 },
    { date: '2024-01-15', weight: 182 },
    { date: '2024-01-22', weight: 180 },
    { date: '2024-01-29', weight: 180 }
  ]);

  const handleProfileUpdate = (updatedProfile: typeof profile) => {
    setProfile(updatedProfile);
  };

  const addBodyweightEntry = () => {
    const newEntry = {
      date: new Date().toISOString().split('T')[0],
      weight: profile.currentWeight
    };
    setBodyweightLog([...bodyweightLog, newEntry]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information and fitness goals</p>
        </div>

        <ProfileForm profile={profile} onUpdate={handleProfileUpdate} />

        {/* Bodyweight Log */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Bodyweight Log</h2>
            <button
              onClick={addBodyweightEntry}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              Add Entry
            </button>
          </div>
          
          <div className="space-y-3">
            {bodyweightLog.slice(-5).reverse().map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <span className="text-gray-900">{new Date(entry.date).toLocaleDateString()}</span>
                <span className="font-semibold text-gray-900">{entry.weight} lbs</span>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Fitness Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Weight Goal</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{profile.targetWeight} lbs</span>
                <span className="text-sm text-gray-600">
                  {Math.abs(profile.currentWeight - profile.targetWeight)} lbs to go
                </span>
              </div>
              <div className="mt-3 bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${Math.max(0, Math.min(100, 
                      ((185 - Math.abs(profile.currentWeight - profile.targetWeight)) / 185) * 100
                    ))}%` 
                  }}
                ></div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Strength Goals</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Bench Press</span>
                  <span className="text-sm font-medium">190/200 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Deadlift</span>
                  <span className="text-sm font-medium">235/250 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Squats</span>
                  <span className="text-sm font-medium">210/225 lbs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <i className="ri-trophy-line w-12 h-12 flex items-center justify-center text-yellow-600 mx-auto mb-2"></i>
              <h3 className="text-sm font-medium text-gray-900">First Workout</h3>
              <p className="text-xs text-gray-600">Completed</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <i className="ri-medal-line w-12 h-12 flex items-center justify-center text-blue-600 mx-auto mb-2"></i>
              <h3 className="text-sm font-medium text-gray-900">10 Workouts</h3>
              <p className="text-xs text-gray-600">Completed</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <i className="ri-fire-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-2"></i>
              <h3 className="text-sm font-medium text-gray-900">7 Day Streak</h3>
              <p className="text-xs text-gray-600">Active</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <i className="ri-muscle-line w-12 h-12 flex items-center justify-center text-purple-600 mx-auto mb-2"></i>
              <h3 className="text-sm font-medium text-gray-900">PR Breaker</h3>
              <p className="text-xs text-gray-600">5 PRs set</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}