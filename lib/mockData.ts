
export const mockWorkouts = [
  {
    id: '1',
    date: '2024-01-15',
    muscleGroup: 'Chest',
    exercises: [
      { name: 'Bench Press', sets: 4, reps: 8, weight: 185 },
      { name: 'Incline Press', sets: 3, reps: 10, weight: 155 },
      { name: 'Dumbbell Press', sets: 3, reps: 12, weight: 70 }
    ],
    totalVolume: 8920
  },
  {
    id: '2',
    date: '2024-01-17',
    muscleGroup: 'Back',
    exercises: [
      { name: 'Deadlift', sets: 4, reps: 6, weight: 225 },
      { name: 'Pull-ups', sets: 3, reps: 8, weight: 0 },
      { name: 'Rows', sets: 3, reps: 10, weight: 135 }
    ],
    totalVolume: 9450
  },
  {
    id: '3',
    date: '2024-01-19',
    muscleGroup: 'Legs',
    exercises: [
      { name: 'Squats', sets: 4, reps: 10, weight: 205 },
      { name: 'Leg Press', sets: 3, reps: 12, weight: 315 },
      { name: 'Lunges', sets: 3, reps: 12, weight: 50 }
    ],
    totalVolume: 12540
  },
  {
    id: '4',
    date: '2024-01-22',
    muscleGroup: 'Shoulders',
    exercises: [
      { name: 'Overhead Press', sets: 4, reps: 8, weight: 115 },
      { name: 'Lateral Raises', sets: 3, reps: 12, weight: 25 },
      { name: 'Front Raises', sets: 3, reps: 12, weight: 20 }
    ],
    totalVolume: 5580
  },
  {
    id: '5',
    date: '2024-01-24',
    muscleGroup: 'Arms',
    exercises: [
      { name: 'Bicep Curls', sets: 4, reps: 10, weight: 35 },
      { name: 'Tricep Extensions', sets: 4, reps: 10, weight: 45 },
      { name: 'Hammer Curls', sets: 3, reps: 12, weight: 30 }
    ],
    totalVolume: 4280
  }
];

export const mockProgressData = [
  { date: '2024-01-01', weight: 175, exercise: 'Bench Press' },
  { date: '2024-01-08', weight: 180, exercise: 'Bench Press' },
  { date: '2024-01-15', weight: 185, exercise: 'Bench Press' },
  { date: '2024-01-22', weight: 185, exercise: 'Bench Press' },
  { date: '2024-01-29', weight: 190, exercise: 'Bench Press' },
  { date: '2024-01-01', weight: 205, exercise: 'Deadlift' },
  { date: '2024-01-10', weight: 215, exercise: 'Deadlift' },
  { date: '2024-01-17', weight: 225, exercise: 'Deadlift' },
  { date: '2024-01-24', weight: 230, exercise: 'Deadlift' },
  { date: '2024-01-31', weight: 235, exercise: 'Deadlift' },
  { date: '2024-01-05', weight: 195, exercise: 'Squats' },
  { date: '2024-01-12', weight: 200, exercise: 'Squats' },
  { date: '2024-01-19', weight: 205, exercise: 'Squats' },
  { date: '2024-01-26', weight: 210, exercise: 'Squats' }
];

export const mockProfile = {
  name: 'John Smith',
  age: 28,
  height: '6\'0"',
  currentWeight: 180,
  targetWeight: 175,
  fitnessGoal: 'Muscle Gain',
  experienceLevel: 'Intermediate'
};

export const personalRecords = [
  { exercise: 'Bench Press', weight: 190, date: '2024-01-29' },
  { exercise: 'Deadlift', weight: 235, date: '2024-01-31' },
  { exercise: 'Squats', weight: 210, date: '2024-01-26' },
  { exercise: 'Overhead Press', weight: 115, date: '2024-01-22' }
];
