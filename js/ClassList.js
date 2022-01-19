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


btns[0].addEventListener('click', () => { //Пример события,меняющего классы у элементов.  
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red'); //Вместо add и remove можно использовать toggle.
        console.log('Добавили класс red');
    } else {
        btns[1].classList.remove('red');
        console.log('Удалили класс red');
    }
});

console.log(btns[0].className); //Так можно посмотреть классы объекта. УСТАРЕЛО


/* Делегирование событий - это передача событий от родителя к потомку, таким образом событие можно назначать только родительскому элементу, не вешая события на каждый из элементов. */

const wrapper = document.querySelector('.btn-block'); //Создали переменную с родительским элементом, на которую будет подвешанно событие.
wrapper.addEventListener('click', (event) => {
    console.dir(event.target); //Так можно вывести в консоль объект со всеми свойствами.
    if (event.target && event.target.matches("button.red")) { //метод matches полезен когда на странице много похожих элементов и нужен какой-то конкретный. 
        console.log('hello');
    }
});

/* При делигировании событий, все новые элементы будут с уже назначенными событиями. */
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);