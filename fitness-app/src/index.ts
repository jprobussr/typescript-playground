type Workout = {
  name: string;
  duration: number;
  calories: number;
  difficulty: string;
  completed: boolean;
};

const workouts: Workout[] = [
  {
    name: 'Morning Walk',
    duration: 30,
    calories: 180,
    difficulty: 'easy',
    completed: true,
  },
  {
    name: 'Strength Training',
    duration: 45,
    calories: 350,
    difficulty: 'medium',
    completed: false,
  },
  {
    name: 'HIIT Cardio',
    duration: 20,
    calories: 300,
    difficulty: 'hard',
    completed: true,
  },
];


const completedCalories = workouts.reduce((total, workout) => {
  if (workout.completed === true) {
    return total + workout.calories;
  }

  return total;
}, 0);

console.log(`Your total calories burned today is ${completedCalories} calories.`);