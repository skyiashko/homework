/* Task 1
Создайте функцию p и a, которые будут служить короткими именами для prompt и alert
 соответственно, то есть запрашивать окно с полем ввода и выводить любое 
 пользовательское сообщение в стандартном модальном окне. Напишите функцию d, 
 которая будет служить коротким именем для debugger, то есть запускать процесс 
 отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert.
  А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.
  */
  function p() {
  	return prompt();
  }

  function a(a) {
  	alert(a);
  }

  function d() {
  	debugger;
  }

d();
let name = p( 'Enter your name', '');
a(name);

a( 'Hello World' ); 

/* Task 2
Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее:

console.log( max(0, -1) ); // 0
*/

let max = (a, b) => { 

	if (a > b) {
		
		return  a;
	}
        else return b
    };

console.log(max(-6, 5));

/* Task 3
Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

console.log( min(0, -1, 100, 500, 100500) ); // -1
*/

function min (array) {
	let minimum = array[0];
	for (var i = 0; i < array.length; i++) {
		if(array[i] < minimum) minimum = array[i];
	}
	return minimum;
}

console.log(min([9, 0, -5, 5, -2, 1]));

/* Task 4
Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), 
каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. 
Используя встроенные функции массивов:	
Отфильтруйте пользователей младше 18 лет
Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, 
если есть все три, и только firstname и lastname, если middlename нет
Сформируйте новый массив, который содержит только полное имя пользователей
*/

const persons = [{

    firstname: "Stephen",
    lastname: "Hawking",
    age : 76

}, {

    firstname: "Richard",
    lastname: "Dawkins",
    age : 78

},{

    firstname: "Neil",
    middlename: "deGrasse",
    lastname: "Tyson",
    age : 61

},{

    firstname: "Henry",
    lastname: "Ford",
    age : 14

},{

    firstname: "Alexander",
    middlename: "Graham",
    lastname: "Bell",
    age : 15

},{

    firstname: "Albert",
    lastname: "Einstein",
    age : 76

},{

    firstname: "Max",
    lastname: "Planck",
    age : 89

},{

    firstname: "Richard",
    middlename: "Phillips",
    lastname: "Feynman",
    age : 69

},{

    firstname: "Max",
    lastname: "Born",
    age : 11

},];

console.log(persons);

let underAge = persons.filter(person => person.age < 18);
console.log(underAge);

persons.forEach(function(person){

	let names = [];

	if ('firstname' in person) names.push(person.firstname);
	if ('middlename' in person) names.push(person.middlename);
  	if ('lastname' in person) names.push(person.lastname);

  	person.fullName = names.join(' ');
});

console.log(persons);

let fullNames = persons.map(function(person){
	return person.fullName;
});

console.log(fullNames);

/* Task 5
Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из 
переданного в параметре массива первый элемент и возвращает новый массив.
*/

let array = [0, 1, 2, 3, 4, 5];
console.log(array);

function deleteFirstEl(array){
	let newArray = [];
	for (var i = 1; i < array.length; i++) {
		 newArray[i - 1] = array[i];
	}
	return newArray;
}
console.log(deleteFirstEl(array));

/* Task 6
Не используя методы массива, напишите функцию аналог метода массива push.
 Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
*/


let array = [0, 1, 2, 3, 4, 5];
console.log(array);

function addElement(array){
	let newArray = [];

	for (var i = 0; i < array.length; i++) {
		newArray[i] = array[i];
	}

	for (let i = array.length; i < array.length + arguments.length - 1; i++) {
		newArray[i] = arguments[i - array.length + 1];
	}
	return newArray;
}

console.log(addElement(array, 6, 7, 8));

/* task 7
Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, 
поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых
 будет расширяться целевой объект.
*/

function extend(target,...sources) {

  for(let i = 0; i < sources.length; i++){

    for(let key in sources[i]){
      target[key] = sources[i][key];
    }
  }
  return target;
}

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

/* Task 8
Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает
 с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением 
 - определяет callback
*/

function ask(question, defaultValue, callback){
	var response = prompt(`${question}`, defaultValue);
		callback(response);
	}

ask('How old are you?', '10', function(response) {
	console.log(response);
});

/* Task 9
Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает
 с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением 
 - определяет callback
*/

function highAndLow(string){
	let array = string.split(' ');
	let max = Math.max.apply(null, array);
	let min = Math.min.apply(null, array);
	return `${max} ${min}`;
}

var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log( result ); // "542 -214"
