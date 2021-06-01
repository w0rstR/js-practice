const numberOfFilms=+prompt("Сколько фильмов ви уже поспотрели",'');


const pernalMovieDB={
    count:{},
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const firstAnswer=prompt("Один из последних просмоттрених фильмов",'');
const secondAnswer=prompt("На сколько оцените его?",'');
const thirdAnswer=prompt("Один из последних просмоттрених фильмов",'');
const fourhAnswer=prompt("На сколько оцените его?",'');


pernalMovieDB.movies[firstAnswer]=secondAnswer; 
pernalMovieDB.movies[thirdAnswer]=fourhAnswer;
console.log(pernalMovieDB.movies)
