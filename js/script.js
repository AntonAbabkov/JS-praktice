"use strict"; /* директива указывающая, что мы работаем в современном режиме. Прописывать её нужно в начале страницы или в начале функции. */

/* переменные объявляем через let(изменяемая переменная) или const(не изменяемая переменная) */
let number = 5;
const leftBorderWidth = 1;
/* ----------------------------------------------------------------------------------------------------------------------------------------------
1 урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Первая практика: */

const numbersOfFilms = +prompt("Сколько фильмов вы смотрели?", ""); //ПЕРВЫЙ ВОПРОС ПОЛЬЗОВАТЕЛЮ
const personalMovieDB = { //создал объект, дальше идёт перчисление его свойств.
    count: numbersOfFilms, //1-е свойство с переменной из 1 вопроса.
    movies: {}, //2-е с пустым объектом
    actors: {}, //3-е с пустым объектом
    genres: [], //4-е с пустым массивом
    privat: false //5-е с булиновым значением false
};

//пременные можно объявлять списком
let film1 = prompt('Один из последних просмотренных фильмов?', ''), //1-я переменная 
     RatingOfFilm1 = +prompt('На сколько оцените его?', ''), //2-я
     film2 = prompt('Один из последних просмотренных фильмов?', ''), //3-я
     RatingOfFilm2 = +prompt('На сколько оцените его?', ''); //4-я

personalMovieDB.movies[film1] = RatingOfFilm1; //записывать свойства в объект лучше через квадратные скобки. Во избежания багов
personalMovieDB.movies[film2] = RatingOfFilm2;

console.log(personalMovieDB); //вывод составленного объекта в консоль
/* -----------------------------------------------------------------------------------------------------------------------------------------------
2 урок: условия */
/* обычный пример if else */
if (4 == 9) {
    console.log("ok");
} else {
    console.log("error");
}

/* Пример if else с несколькими проверками разных условий. */
const num = 50;
if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("ok");
}
/* запись условий при помощи ТЕРНАРНОГО оператора. В работе тернарного оператора учавствует 3 аргумента (Условие ? действие если верно : действие если неверно); */
/* условие   действие если верно  действие если неверно */
(num === 50) ? console.log("ok again") : console.log("error");

/* С помощью конструкции switch можно создавать строгие проверки с большим кол-вом условий. Работает так-же как if else, но занимает меньше места\кода */
const num = 50; 
switch (num) { //С помощью конструкции switch можно содавать ТОЛЬКО строгие проверки. (Совпасть должны типы данных и их значения)
    case 49: //Условие
        console.log('Неверно');
        break; //обязательная отметка break
    case 100: 
        console.log('Неверно');
        break;
    case 50: 
        console.log('Верно');
        break;
    default: //Условие, которое выполнится, если ниодно предыдущее условие не правдиво.
        console.log('Сравнение закончено');
        break;
}
/* -----------------------------------------------------------------------------------------------------------------------------------------------
3 урок: Циклы */

/* 1 пример */
let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

/* 2 пример */
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

/* 3 пример */
let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/* 2 практика: */

const numbersOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
const personalMovieDB = { 
    count: numbersOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false 
};
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''), 
        b = +prompt('На сколько оцените его?', '');
        if (a == "" || b == "" || a.length > 50 || a == null || b == null) {
            alert('Введены неккоректные данные');
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
}
if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
console.log(personalMovieDB);

/* -----------------------------------------------------------------------------------------------------------------------------------------------
4 урок: функции, стрелочные функции (ES6) */
