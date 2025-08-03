
'use client';

import { useState } from 'react';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

interface WorkoutFormProps {
  onSubmit: (workout: any) => void;
}

export default function WorkoutForm({ onSubmit }: WorkoutFormProps) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [muscleGroup, setMuscleGroup] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({
    name: '',
    sets: 1,
    reps: 1,
    weight: 0
  });

  const muscleGroups = [
    'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Cardio'
  ];

  const exerciseOptions = {
    'Chest': ['Bench Press', 'Incline Press', 'Dumbbell Press', 'Push-ups', 'Flyes', 'Dips'],
    'Back': ['Deadlift', 'Pull-ups', 'Barbell Rows', 'Lat Pulldown', 'Cable Rows', 'Shrugs'],
    'Shoulders': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Rear Delt Flyes', 'Arnold Press'],
    'Arms': ['Bicep Curls', 'Tricep Extensions', 'Hammer Curls', 'Close-Grip Bench', 'Tricep Dips'],
    'Legs': ['Squats', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Romanian Deadlift'],
    'Core': ['Planks', 'Crunches', 'Russian Twists', 'Leg Raises', 'Dead Bug', 'Mountain Climbers'],
    'Cardio': ['Treadmill', 'Cycling', 'Elliptical', 'Rowing', 'Stair Climber', 'HIIT']
  };

  const addExercise = () => {
    if (currentExercise.name && currentExercise.sets && currentExercise.reps) {
      const newExercise: Exercise = {
        id: Date.now().toString(),
        ...currentExercise
      };
      setExercises([...exercises, newExercise]);
      setCurrentExercise({ name: '', sets: 1, reps: 1, weight: 0 });
      setShowExerciseForm(false);
    }
  };

  const removeExercise = (id: string) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && muscleGroup && exercises.length > 0) {
      const workout = {
        date,
        muscleGroup,
        exercises,
        totalVolume: exercises.reduce((sum, ex) => sum + (ex.sets * ex.reps * ex.weight), 0)
      };
      onSubmit(workout);
      setDate(new Date().toISOString().split('T')[0]);
      setMuscleGroup('');
      setExercises([]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 gradient-bg rounded-lg">
          <i className="ri-dumbbell-line w-6 h-6 flex items-center justify-center text-white"></i>
        </div>
        <h2 className="text-2xl font-bold bebas text-gray-900 dark:text-white">WORKOUT SESSION</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Muscle Group</label>
            <div className="relative">
              <select
                value={muscleGroup}
                onChange={(e) => setMuscleGroup(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-sm pr-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">Select muscle group</option>
                {muscleGroups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-3 w-5 h-5 flex items-center justify-center text-gray-400 pointer-events-none"></i>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Exercises</h3>
            <button
              type="button"
              onClick={() => setShowExerciseForm(true)}
              className="px-4 py-2 gradient-bg text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Add Exercise
            </button>
          </div>

          {exercises.length > 0 && (
            <div className="space-y-3 mb-6">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{exercise.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exercise.sets} sets × {exercise.reps} reps @ {exercise.weight} lbs
                      <span className="ml-2 text-orange-500 font-medium">
                        ({(exercise.sets * exercise.reps * exercise.weight).toLocaleString()} lbs volume)
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExercise(exercise.id)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors cursor-pointer"
                  >
                    <i className="ri-delete-bin-line w-5 h-5 flex items-center justify-center"></i>
                  </button>
                </div>
              ))}
            </div>
          )}

          {showExerciseForm && (
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Exercise</label>
                <div className="relative">
                  <select
                    value={currentExercise.name}
                    onChange={(e) => setCurrentExercise({...currentExercise, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-sm pr-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Select exercise</option>
                    {muscleGroup && exerciseOptions[muscleGroup as keyof typeof exerciseOptions]?.map(ex => (
                      <option key={ex} value={ex}>{ex}</option>
                    ))}
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-3 w-5 h-5 flex items-center justify-center text-gray-400 pointer-events-none"></i>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Sets</label>
                  <input
                    type="number"
                    value={currentExercise.sets}
                    onChange={(e) => setCurrentExercise({...currentExercise, sets: parseInt(e.target.value) || 1})}
                    min="1"
                    max="10"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Reps</label>
                  <input
                    type="number"
                    value={currentExercise.reps}
                    onChange={(e) => setCurrentExercise({...currentExercise, reps: parseInt(e.target.value) || 1})}
                    min="1"
                    max="50"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Weight (lbs)</label>
                  <input
                    type="number"
                    value={currentExercise.weight}
                    onChange={(e) => setCurrentExercise({...currentExercise, weight: parseInt(e.target.value) || 0})}
                    min="0"
                    step="2.5"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowExerciseForm(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={addExercise}
                  className="px-6 py-2 gradient-bg text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold whitespace-nowrap cursor-pointer"
                >
                  Add Exercise
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="submit"
            disabled={exercises.length === 0}
            className="px-8 py-3 gradient-bg text-white rounded-lg hover:shadow-xl transition-all duration-300 text-sm font-bold bebas tracking-wide whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            FORGE THIS WORKOUT
          </button>
        </div>
      </form>
    </div>
  );
}
