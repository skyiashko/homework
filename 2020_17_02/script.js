/* Task 1
Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения
 - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции
  должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные 
  переданы некорректно. Параметр author - опциональный, но должна происходить проверка: 
  если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция 
  распечатывает на странице текст в формате: 
				<имя_автора>, <дата>
				<текст_сообщения>

setComment('2016-11-02', 'Everything is ok', 'John');

John, 2016-12-22
Everything is ok

setComment('2016-11-02', 'You could do it better!');

Anonymous, 2016-12-22
You could do it better!
*/

function setComment(date, message, author) {

	message = document.createElement('div');
	message.innerText = prompt('Enter a message: ', 'My comment');

	date = prompt('Enter a date: ', 'yyyy-dd-mm');

	author = prompt('Enter name" ', 'Name');

	if (date === null || message === null) {
		alert("Incorrect data");
		return;
	}
	if (author === null) {
		author = 'Anonymous';
	}

	let element = document.createElement('div');
	element.innerText = `${author}, ${date}`;

	document.body.appendChild(element);
	document.body.appendChild(message);
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');

/*Task 2
Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – 
a) используя цикл b) используя рекурсию:

console.log( cube(2) ); // 8
*/

/*
function cube(x){
  let result = x;
  for (let i = 1; i < 3; i++){
    result *= x;
  }
  return result;
}
*/
function cube(x, n = 3) {
  if (n == 1) {
    return x;
  } else {
    return x * cube(x, n - 1);
  }
}

console.log( cube(2) ); // 8

/*Task 3
Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив 
числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от типа 
входящего параметра (typeof). Для расчета куба числа вместо встроенного метода Math.pow 
используйте собственную функцию.

console.log( extraCube(2) ); // 8
console.log( extraCube([0, 1, 2, 3]) ); // [0, 1, 8, 27]

*/

function extraCube(x) {
  if (Array.isArray(x)) {
    let resultArray = [];
    for (var i = 0; i < x.length; i++) {
      resultArray.push(cube(x[i]));
    }
    return resultArray;
  } else return cube(x);
}

console.log( extraCube(2) ); // 8
console.log( extraCube([0, 1, 2, 3]) ); // [0, 1, 8, 27]

/*Task 4
Напишите функцию, которая вызывается и работает следующим образом:

console.log( multi(2)(3)(4) ); // 24

*/

const multi = x => y => z => x * y * z;

console.log( multi(2)(3)(4) ); // 24

/* task 6
Дан массив, элементами которого могут быть любые значения, включая другие массивы. 
Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на глубину 
depth, указанную в параметре функции. По умолчанию flat поднимает элементы на одну глубину 
(то есть если depth не указан).
*/

const flat = (newArr = []) => (data, a) => {
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i]) && a !== 0) {
            flat(newArr)(data[i], a - 1);
        } else {
            newArr.push(data[i]);
        }
    }
    return newArr;
};

var data1 = [1, 2, [3, 4, [5, 6]]];
flat()(data1); // [1, 2, 3, 4, [5, 6]]

var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log( flat()(data2, 1) ); // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
console.log( flat()(data2, 2) ); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
console.log( flat()(data2, 3) ); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
console.log( flat()(data2, 4) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log( flat()(data2, 0) ); // [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log( flat()(data2, 5) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log( flat(data2, 4) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log( flat(data2, 5) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* Task 7
“История в картинках”. Создайте массив тематически связанных строковых картинок. 
Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу 
один из элементов массива (одну из картинок). Тема - свободная, ограничена только набором 
доступных строковых картинок.
*/

let smile = ['🧐', '🤔', '😕', '☹', '🥺', '😭', '😱', '😤', '🙏', '🤗', '😎']

function storyHomeWork(arr){
let emoji = document.querySelector('.emoji');
  for ( let i = 0; i < arr.length; i++){
    (function(x){
      setTimeout(function(){
        emoji.innerText = arr[x];
      }, 1000 * x)
    })(i);
  }
}
storyHomeWork(smile);

/* Task 8
Найдите и исправьте ошибки в коде:

function foo() {
	function bar(a) {
		i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21
*/

function foo() {
	function bar(a) {
		let i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21

/* Task 9
Используя замыкание, напишите функцию createTimer, которая использует метод performance.now()
 для получения текущей временной метки и служит для замера времени выполнения другого кода:

var timer = createTimer();
alert('!');  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()
*/

function createTimer(){
  let t0 = performance.now();
  return function(){
    t1 = performance.now();
    return t1 - t0;
  }
}

var timer = createTimer();
alert('!');  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

/* Task 10
Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный
 параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по
  следующему принципу:

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10

*/

function createAdder(firstElement){
  return function(secondElement){
    return firstElement + secondElement;
  }
}


var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
