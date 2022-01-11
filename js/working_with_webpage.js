"use strict";
/* ----------------------------------------------------------------------------------------------------------------------------------------
15 урок: Получение элементов со страницы. */
/* Объект document существует только внутри браузера. Код нужно запускать там. */

const box = document.getElementById('box'); //Создал box с элементом, который получим со страницы. Обращение к элементу сделан по ID. ID прописывается в кавычках.
console.log(box);

const btns = document.getElementsByTagName('button'); //В результате этого кода мы получим всевдомассив со всем совпадениями. (HTML Collection)(Псевдомассивы имеют все храк-ки от массива, только они не имееют никаких методов.)
const btns1 = document.getElementsByTagName('button')[1]; //Так можно обратиться только к определённому элементу по порядку.
console.log(btns);
console.log(btns1);


const circles = document.getElementsByClassName('circle'); //Классы указываются без точки
console.log(circles);

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

const hearts = document.querySelectorAll('.heart'); //метод documentquerySelectorAll улучшенный вариант методов выше. Возвращает псевдомассив с 1 методом - forEach. Если мы обращаемся к элементам по селекторам, тогда нужно указывать их синтаксис. Точки у классов, # у ID и т.д.
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});


const oneHeart = document.querySelector('.heart'); //Метод document.querySelector берёт только первый подходящий элемент.
console.log(oneHeart);

/* ----------------------------------------------------------------------------------------------------------------------------------------
16 урок: Действия с элементами на странице. Работа с инлайн стилями.*/

/* console.dir(box); */ //Код для просмотра свойств объекта в консоли

/* box.style.backgroundColor = 'blue'; //Изменение цвета заднего фона через свойство style.
box.style.width = '500px'; */ //Значения нужно указывать в кавычках и с еденицами измерения.


btns[1].style.borderRadius = '100%'; //btns это псевдомассив, по этому нужно указывать индекс нужного элемента.
circles[0].style.backgroundColor = 'red'; 


box.style.cssText = `background-color: orange; width: 500px`; //Стили можно указывать через запятую. При использовании бэктиков, можно использовать переменные через ${...}.


/* for (let i = 0; i < hearts.length; i++) { //Изменение свойств в псевдомассиве при помощи цикла for
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => { //Изменение свойств при помощи методе forEach. Это аналог перебора при помощи цикла for
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); //Создание div блока при помощи JS. 
/* const text = document.createTextNode('Тут я'); */ 
div.classList.add('black'); //При помощи classList мы можем устанавливать действия с этим классом. Здесь добавлен класс black.
/* document.body.append(div); */ //Зашли в тег body и добавляем созданный выше div при помощи метода append. Только после этого блок станет виден на странице.

wrapper.append(div); //Вариант добавляния блока в конец уже существующего div.
/* wrapper.prepend(div); */ //добавление блока в начало div wrapper
div.innerHTML = "<h1>Hello world</h1>"; //Добавление надписи в созданный div. Можно вставлять html структуру.
/* div.textContent = 'hello'; */ //Второй вариант добавления текста, можно добавлять только текст.
div.insertAdjacentHTML("beforebegin", "<h2>hi</h2>"); //добавление html кода

/* hearts[1].before(div); */ //При такой записи можно указать точное расположение нового блока между несколькими уже существующими. 

/* circles[0].remove(); */// удаление элемента

/* hearts[0].replaceWith(circles[0]) */;//Замена одного елемента другим

//УСТАРЕВШИЕ КОНСТРУКЦИИ
/* wrapper.appendChild(div); */ //Поместили новый элемент в конец родительского блока wrapper
/* wrapper.insertBefore(div, hearts[1]); //добавление в определённое место */
/* wrapper.removeChild(hearts[1]); */ //Удаление элемента
/* wrapper.replaceChild(circles[0], hearts[1]); */ //Замена элемента
