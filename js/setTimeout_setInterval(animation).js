const btn = document.querySelector('.btn');
let timerID,
    i = 0;


function myAnimation() { //функция для анимации
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
btn.addEventListener('click', myAnimation);
//setTimeout позволяет вызвать функцию один раз через определённый интервал времени.


/* clearInterval(timerID); */ //Функция clearInterval останавливает таймер, заданный функцией setInterval или setTimeout

/* function logger () {
    if (i === 3) {
        clearInterval(timerID); 
    }
    console.log('text');
    i++;
} */


//Рекурсивный вызов setTimeout позволит избежать ошибки, когда когд ещё выполняется, а setTimeout уже запускает следующее действие, не дожидаясь конца прошлой операции.

/* let id = setTimeout(function log() {
    console.log('hello');
    id = setTimeout(log, 500);
}, 500); */