/* 18 урок: События и их обработчики */ */
/* 2 из 3 способов назначить обработчик событий. Использовать свойство DOM - дерево для событий. Тоже не лучший вариант для использования. При многократном использовании одних и тех же ствойств на странице, возникнут ошибки. Будет срабатывать только последний вызов события, игнорируя предыдущие.*/ 

const btn = document.querySelector('button'); //Создаём элемент, на который будет цепляться обработчик событий.
      overlay = document.querySelector('.overlay');
 

/* btn.onclick = function() { //onclick - указали вид события, далее функция, которая будет выполненна.
    alert('click');
}; */

/* btn.onclick = function() { //если эта функция будет активна, сработает только она, первый вызов аналогичной функции не сработает.
    alert('second click');
}; */



/* 3 из 3 способов. Актуальный способ. Метод addEventListener и . В первом аргументе указывается событие, во втором функция с действиями.*/

/* btn.addEventListener('click', () => {
    alert('click');
});
btn.addEventListener('click', () => {
    alert('second click'); //Оба действия отработают без ошибок
}); */

/* btn.addEventListener('click', (event) => {
    console.log(event.target); //С помощью event.target можно получить элемент со страницы для дальнейшей работы с ним.
    event.target.remove(); //Удаление блока при наведении курсора
}); */

let i = 0;
const deleteElement = (e) => {
    console.log(e.target); //Если прописать console.log(e.curretTarget); можно удет увидеть на где и на каком уровне сработали события.
    console.log(e.type);
/*     i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement); //удалили событие
    } */
};
btn.addEventListener('click', deleteElement); //Добавили событие
overlay.addEventListener('click', deleteElement); //Добавили событие


const link = document.querySelector('a');
/* код для отмены стандартного поведения браузера */
link.addEventListener('click', (event) => {
    event.preventDefault();//preventDefault отменяет стандартное поведение, указывать нужно самым первым.
    console.log(event.target);
});