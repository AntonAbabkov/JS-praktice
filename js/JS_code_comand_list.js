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

//цикл для перебора массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}