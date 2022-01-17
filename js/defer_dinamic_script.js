"use strict";
/* Динамеческое создание скриптов при помощи JS */

const p = document.querySelectorAll('p');
console.log(p);

/* Вариант добавления script.js файла в HTML струтуру. */ 
/* const script = document.createElement('script'); //Создали переменную в которую помещаем новосозданный элемент
script.src = "js/test.js";                       //Установили путь к этому скрипту
script.async = false;                            //async со статусом false позволяет работать скрипту как самый обычный скрипт
document.body.append(script);                    //Добавление созданного script файла в body */


function loadScript(src) {                           //Код выше помещен в функцию
    const script = document.createElement('script'); 
    script.src = src;                                //Изменил путь на src для корректной работы фуункции
    script.async = false;                            
    document.body.append(script);                    
}

loadScript('js/test.js');       //вызов функций добавления файла в DOM структуру с атрибутом в виде пути к файлу
loadScript("js/another-test.js");