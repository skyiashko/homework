/* Task 1
Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
*/

let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;

for (var i = 0; i < arr.length; i++) {
	if (isFinite(arr[i])){
		sum += +(arr[i]);
	}
}
alert(sum);

/* Task 2
Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
*/
let array = ['AngularJS', 'jQuery'];

array.unshift('Backbone.js');
array.push('ReactJS', 'Vue.js');
array.splice(1, 0, 'CommonJS');
alert((array.indexOf('jQuery')) + ' Это здесь лишнее');
array.splice((array.indexOf('jQuery')), 1);

console.log(array);

/* Task 3
Создайте массив из минимум 100 случайных целых чисел. Переберите массив и сгенерируйте на его основе новый, 
который содержит только уникальные (неповторяющиеся) значения исходного массива. Решите, используя только цикл for.
*/

let array = [];
let uniqueArray = [];

for (var i = 0; i < 100; i++) {
	array.push(Math.trunc(Math.random() * 100));
	}

	console.log(array);

for (var i = 0; i < array.length; i++) {
	for (var j = 0; j < array.length; j++) {
		if (array[i] == array[j]) array.splice(array[i], 1); 
	}
}
uniqueArray = array;
console.log(uniqueArray);

/* Task 4
Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. Разбейте ее на массив слов, и переставьте 
слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в 
строку и выведите в alert исходный и итоговый варианты.
*/

let str = 'Как однажды Жак звонарь сломал городской фонарь';
let array = str.split(' ');
console.log(array);

array.splice(4, 2, 'городской', 'сломал');
let newStr = array.join(' ');

console.log(newStr);
alert(str);
alert(newStr);

/* Task 5 
Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение 
добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert 
полученный результат.
*/
let array = [];
let sum = 0;
let n = +prompt('Enter the number of elements in the array', 5);

for (let i = 0; i < n; i++){
	let element = prompt('add new element');
	array.push(element);
		if (isFinite(array[i])){
		sum += +(array[i]);
	}
}
alert(sum);
/* Task 6
Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
*/

let array = [];

for (let i = 1; i <= 10; i++) {
	let numberArray = [];
	for (let j = 1; j <= 10; j++){
		let res = `${i} x ${j} = ${i * j}`;
		numberArray.splice(j - 1, 1, res);
	}
	array.push(numberArray);
}
console.log(array);