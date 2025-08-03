'use client';

import { useState } from 'react';

interface ProfileData {
  name: string;
  age: number;
  height: string;
  currentWeight: number;
  targetWeight: number;
  fitnessGoal: string;
  experienceLevel: string;
}

interface ProfileFormProps {
  profile: ProfileData;
  onUpdate: (profile: ProfileData) => void;
}

export default function ProfileForm({ profile, onUpdate }: ProfileFormProps) {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  const handleChange = (field: keyof ProfileData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleChange('age', parseInt(e.target.value) || 0)}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
              <input
                type="text"
                value={formData.height}
                onChange={(e) => handleChange('height', e.target.value)}
                disabled={!isEditing}
                placeholder="e.g., 5'10&quot;"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Weight (lbs)</label>
              <input
                type="number"
                value={formData.currentWeight}
                onChange={(e) => handleChange('currentWeight', parseInt(e.target.value) || 0)}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Weight (lbs)</label>
              <input
                type="number"
                value={formData.targetWeight}
                onChange={(e) => handleChange('targetWeight', parseInt(e.target.value) || 0)}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
              <div className="relative">
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => handleChange('experienceLevel', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-50 pr-8"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-2 top-2 w-5 h-5 flex items-center justify-center text-gray-400 pointer-events-none"></i>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fitness Goal</label>
            <div className="relative">
              <select
                value={formData.fitnessGoal}
                onChange={(e) => handleChange('fitnessGoal', e.target.value)}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-50 pr-8"
              >
                <option value="Weight Loss">Weight Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Strength">Strength</option>
                <option value="Endurance">Endurance</option>
                <option value="General Fitness">General Fitness</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-2 top-2 w-5 h-5 flex items-center justify-center text-gray-400 pointer-events-none"></i>
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700">Weight Progress</h4>
            <p className="text-2xl font-bold text-blue-600">
              {Math.abs(formData.currentWeight - formData.targetWeight)} lbs
            </p>
            <p className="text-sm text-gray-600">
              {formData.currentWeight > formData.targetWeight ? 'to lose' : 'to gain'}
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700">Experience</h4>
            <p className="text-2xl font-bold text-green-600">{formData.experienceLevel}</p>
            <p className="text-sm text-gray-600">Level</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700">Goal</h4>
            <p className="text-2xl font-bold text-purple-600">{formData.fitnessGoal}</p>
            <p className="text-sm text-gray-600">Focus</p>
          </div>
        </div>
      </div>
    </div>
  );
}