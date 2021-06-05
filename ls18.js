let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов ви уже посмотрели?", '')

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов ви уже посмотрели?", '')
    }

}

start()

const personalMovieDb={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


function showMyDb(){
    if(personalMovieDb.privat==false){
        console.log(personalMovieDb)
    }
}

showMyDb()

function writeYourGenres(){
    for(let i=1;i<4;i++){
        answer=prompt('Ваш любимий жанр по номером ${i}')
        personalMovieDb.genres.push(answer)
    }
    console.log(personalMovieDb.genres)
}

writeYourGenres();


function rememberMyFilms(){
    for(let i=0;i<2;i++){
        const firstAnswer=prompt('Один из оследних просмотрених фильмов?','');
        const secondAnswer=prompt('На сколько оцените его?','')

        if(firstAnswer != null && secondAnswer !=null && firstAnswer != '' && secondAnswer !='' && firstAnswer.length < 50 && secondAnswer.length < 50){
            personalMovieDb.movies[firstAnswer]=secondAnswer;
            console.log('done')
        }else{
            console.log('eroor');
            i--;
        }
    }
}



function detectPersonalLevel(){ 
    if(personalMovieDb.count < 10){
         console.log('Просмотрено довольно мало фильмов')
    }else if(personalMovieDb.count >=10 && personalMovieDb.count <30){
        console.log('Ви классичесний зритель');
    }else if(personalMovieDb.count >=30){
         console.log('Ви киноман')
    }else{
        console.log('Произошла ошибка')
    }
}