//Код для перебора ключей в массиве options.
let counter = 0;//Создание счётчика, для подсчёта кол-ва свойств
for (let key in options) { //Цикл for in для перебора ключей в объекте\массиве
    if (typeof(options[key]) === 'object') { //Проверка, является-ли проверяемое свойство объектом
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }   
}

//Код для получения всех методов объекта. Запустить нужно в браузерной консоли, методы будут в свойстве prototype
console.dir(String); 

//цикл for для перебора массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//метод for of для перебора массива
for (let value of arr) {
    console.log(value);
}

//метод for each с callback функцией для перебора массива. Break и continue не работают в методе forEach
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//Функция для правильной сортировки чисел в массиве при использовании метода SORT
function compareNum(a, b) {
    return a - b;
}

/* Функция для перебора объекта и создания его копии */
function copyObj(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}