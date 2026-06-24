"use strict";
const movies = [
    {
        title: 'The Dark Knight',
        genre: 'action',
        rating: 9.0,
        runtime: 152,
        isWatched: true,
    },
    {
        title: 'Finding Nemo',
        genre: 'animation',
        rating: 8.2,
        runtime: 100,
        isWatched: true,
    },
    {
        title: 'Interstellar',
        genre: 'sci-fi',
        rating: 8.7,
        runtime: 169,
        isWatched: false,
    },
    {
        title: 'The Grand Budapest Hotel',
        genre: 'comedy',
        rating: 8.1,
        runtime: 99,
        isWatched: false,
    },
];
const horrorFilm = movies.find((movie) => {
    return movie.genre === 'horror';
});
console.log(horrorFilm);
