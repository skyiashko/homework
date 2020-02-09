/* Task 2
Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.*/
for (let i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(i * i);
	}
}
/* Task 3
Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for.
 После выхода из цикла распечатайте полученную строку.*/
let result = '';
 for (let  i =1; i <= 10; i++) {
 	result = result + '.';
 		result = result + '#';
 }
 console.log(result);
/* Task 4
Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.*/
let conf = confirm();
for (let i = 1; i <= 10; i++) {
	if (conf == true) {
		break;
	}
	console.log(i);
}
/* Task 5
Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99. 
Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.*/
let count = 0;
for (var i = 0; ;) {
	count++;
	var random = Math.random();
	if (random > 0.99) {
		break;
	}
}
alert(`random : ${random}`);
alert(`count : ${count}`);
/* Task 6
Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, чтобы получилась шахматный узор.
 Для перевода строки используйте символ \n. Код должен поддерживать легкое изменение размеров доски.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
*/
let size = prompt('Enter size');
let result = '';
for ( let j = 1; j<=size; j++){
	result = result + '\n';
 for (let  i =1; i <=size; i++) {
 		result = result + '.';
 		result = result + '#';
 }
}
  console.log(result);
/* Task 7
С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 
*/
let fib1 = 0;
let fib2 = 1;
console.log(fib1);
console.log(fib2);
let sizeRow = +prompt("Enter size");
for (i = 2; i <= sizeRow / 2; i++){
	console.log(fib1 = fib1+fib2);
	console.log(fib2 = fib1+fib2);
} 
/* Task 8
Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. 
После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое. 
*/
let count = 0;
let sum = 0;
let average = 0;

for (;;) {

	let number = prompt('Enter a number', '');

	if (number === null) {

		break;
	}

	count++;
	sum = sum + Number(number);
	average = sum / count;
}

alert('Count is: ' + count);
alert('Sum is: ' + sum);
alert('Average is: ' + average);

/* Task 9
Найдите и исправьте ошибки в коде:

for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; i++) {
		console.log(i + j);
	}
}
*/
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(i + j);
	}
}

/* Level Up
Сформируйте строку в виде треугольника-елочки:

.....#.....
....###....
...#####...
..#######..
.#########.
###########

*/
let i = 0;
let j = 0;

while (i < 6) {
let dot = '';
let star = '';
	for (j = 0; j < 5 - i; j++) {
		dot += '.';
	}
	for (j = 0; j < 2 * i + 1; j++) {
		star += '*';
	}
	console.log(dot + star + dot);
	i++;
}