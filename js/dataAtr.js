/* Разбор 32 урока.

Все элементы в html странице являются DOM узлами.
Узлы бывают нескольких видов.

1) Узлы - элементы или просто элементы. Сюда входят все html теги такие как head, body, span и т.д.
2) Текстовые узлы. Сюда входят переносы строк, пробелы или текст между тегами.

Пример - <div class="text">some text</div> - Блок с классом text является элементом, а текст между тегами является текстовым узлом.

Еще узлами являются комментарии в html файле.
Чтобы получить все дочерние узлы мы можем воспользоваться командой childNodes.
Пример - document.body.childNodes;

Чтобы получить первый и последний узел мы используем команду firstChild и lastChild соответственно.

Пример - document.body.firstChild; document.body.lastChild;

Если нужно уточнить, что нам нужен именно первый и последний элемент используем команды firstElementChild и lastElementChild.

Для получения родительского узла или элемента используем команды parentNode - для узла и parentElementNode для элемента.

Пример - document.querySelector('.someclass').parentNode; и document.querySelector('.someclass').parentElementNode;

Если нам нужно получить родителя родителя тоесть подняться на ступень вверх по иерархии, то нужно просто еще раз вызвать эту команду.

Пример - document.querySelector('.someclass').parentNode.parentNode;

Для получения соседнего узла используем команду previousSibling - для предыдущего соседа и nextSibling для следующего соседа.

Пример - document.getElementById("circle").previousSibling; document.getElementById("circle").nextSibling;

Если нужно уточнить, что нам нужно именно элемент, то прописываем previousElementSibling и nextElementSibling.

data атрибутами являются те атрибуты, которые мы прописываем в html тегах в ситуативных случаях.

Пишется так - data-sometext = ''

Пример - <div class="window" data-modal="2"></div>

В css коде мы пишем [data-modal="2"]{}

На этом разбор 32 урока окончен.
----------------------------------------------------------------------------------------- */
/* console.log(document.body); */ //С помощью такой записи можно получить часть html кода. (Всё, что внутри body)
/* console.log(document.head); */

/* console.log(document.documentElement); */ //С помощью такой записи можно получить весь HTML код

console.log(document.body.childNodes); //С помощью chilNodes можн о получить всевдомассив со всеми нодами и узлами в указанном родителе. Для получения только первого или только последнего элемента, существует console.log(document.body.firstChild); и console.log(document.body.lastChild);

/* console.log(document.querySelector('#current').parentNode.parentNode); */ //С помощью метода parentNode можно получить родителя элемента. Если указать команду дважды, мы поднимемеся по иэрархии ещё на 1 уровень.

/* console.log(document.querySelector('[data-current="3"').nextSibling); */ //свойство nextSibling объекта Node возвращает дочерний узел следующий за указанным узлом внутри родительского элемента, или null, если указанный узел является последним дочерним узлом в родительском элементе. 

/* Перебор при помощи цикла for Of, для отсортировки текстовых нод (Node) */
for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }

    console.log(node);
}