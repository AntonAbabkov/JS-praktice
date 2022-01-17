"use strict";

const btns = document.querySelectorAll('button'); //получили все кнопки

btns.forEach(item => {                            //при помощи forEach добавил всем кнопкам новый класс.
    item.classList.add('new_class');
});

console.log(btns[0].classList.length);            //Так можно узнать, сколько всего классов назначено для первого элемента.
console.log(btns[0].classList.item(0));           //Так можно вывести в консоль название класса.
console.log(btns[1].classList.remove('new_class'));//удалил класс у второго элемента

//Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть.
console.log(btns[1].classList.toggle('blue'));      //Добавили класс
console.log(btns[1].classList.toggle('blue'));      //Удалили класс
console.log(btns[1].classList.toggle('new_class')); //Добавили класс
console.log(btns[1].classList.toggle('new_class')); //Удалили класс
//btns[1] должен быть без классов в этот момент


btns[1].classList.add('red');            //Добавили класс
if (btns[1].classList.contains('red')) { //Метод contains объекта classList проверяет наличие CSS класса элемента.
    console.log('contains сработал');
}