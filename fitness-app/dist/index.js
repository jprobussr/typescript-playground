"use strict";
const workouts = [
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
const highCalorie = workouts.some((workout) => {
    return workout.calories === 500;
});
console.log(highCalorie);
