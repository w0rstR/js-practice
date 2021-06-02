const numberOfFilms=+prompt("Сколько фильмов ви уже посмотрели",'');


const pernalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

for(let i=0;i<2;i++){
    const firstAnswer=prompt("Один из последних просмоттрених фильмов",'');
    const secondAnswer=prompt("На сколько оцените его?",'');
    if(firstAnswer != null && secondAnswer != null && firstAnswer !='' && secondAnswer !='' && firstAnswer.length <50 && secondAnswer <50){
        pernalMovieDB.movies[firstAnswer]=secondAnswer;
        console.log('done')
    }else{
        console.log('error')
        i--;
    }
}

if(pernalMovieDB.count<10){
    alert("Просмотрено мало фильмов")
}else if(pernalMovieDB.count >= 10 && pernalMovieDB.count <30){
    alert("Ви классичесний зритель")
}else if(pernalMovieDB.count>=30){
    alert("Ви кономан")
}else{
    alert("Произошла ошибка")
}
