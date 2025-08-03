'use client';

import { useState } from 'react';

interface WorkoutHistoryProps {
  workouts: Array<{
    id: string;
    date: string;
    muscleGroup: string;
    exercises: Array<{
      name: string;
      sets: number;
      reps: number;
      weight: number;
    }>;
    totalVolume: number;
  }>;
}

export default function WorkoutHistory({ workouts }: WorkoutHistoryProps) {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const sortedWorkouts = [...workouts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Workout History</h2>
      
      <div className="space-y-4">
        {sortedWorkouts.map((workout) => (
          <div key={workout.id} className="bg-white rounded-lg shadow-sm border">
            <div 
              className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setSelectedWorkout(selectedWorkout === workout.id ? null : workout.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <i className="ri-dumbbell-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{workout.muscleGroup}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(workout.date).toLocaleDateString()} • {workout.exercises.length} exercises
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{workout.totalVolume.toLocaleString()} lbs</p>
                  <p className="text-sm text-gray-600">Total Volume</p>
                </div>
              </div>
            </div>
            
            {selectedWorkout === workout.id && (
              <div className="border-t bg-gray-50 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workout.exercises.map((exercise, index) => (
                    <div key={index} className="bg-white p-3 rounded-md">
                      <h4 className="font-medium text-gray-900 mb-2">{exercise.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Sets: {exercise.sets}</p>
                        <p>Reps: {exercise.reps}</p>
                        <p>Weight: {exercise.weight} lbs</p>
                        <p className="font-medium">Volume: {(exercise.sets * exercise.reps * exercise.weight).toLocaleString()} lbs</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {sortedWorkouts.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-dumbbell-line w-16 h-16 flex items-center justify-center text-gray-400 mx-auto mb-4"></i>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No workouts yet</h3>
            <p className="text-gray-600">Start by logging your first workout!</p>
          </div>
        )}
      </div>
    </div>
  );
}