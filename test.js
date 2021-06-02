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




let num=439;

(num === 50) ? console.log("ok") : console.log("no")

switch(num){
    case 49:
        console.log("49")
        break;
    
    case 50:
        console.log("50")
        break;
    case 50000:
        console.log("50000")
        break;
    default:
        console.log("default")
}



