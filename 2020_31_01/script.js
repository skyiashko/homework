/*Task 1
Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел.
Запишите алгоритм программно: создайте три переменные с любыми числовыми
значениями; используя только вложенные условные операторы if 
(НЕ логические операторы), найдите минимальное число и отобразите на экране 
его значение. */
var a = prompt('Enter the first number');
var b = prompt('Enter the second number');
var c = prompt('Enter the third number');
var min;
if (a < b) {
	if  (a < c){
		min = a;
	} else min = c;
} else if (b < c) {
	min = b;
}else min = c;
alert('Minimum is: ' + min);
/*Task 2 
По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне. Проверить
 и вывести на экран, улитка двигается вперед, назад или остается на месте (скорость 
 (вектор) положительная, отрицательная или ноль).*/
 var speed = prompt('Enter the speed: ');
 if (speed < 0) {
 	alert('The snail is moving back');
 } else if (speed > 0) {
 	alert('The snail is moving forward');
 } else alert('The snail is standing');
 /*Task 3 
У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать 
английский язык или выпить пива. С помощью условного оператора определите ваши возможности
 и отобразите на экране в alert.*/
var yourMoney = prompt('How much money do you have?');
var friedsMoney = prompt('How much money does your friend have?');
(yourMoney + friedsMoney) > 5000 ? alert(`Let's fly to Malta!`) : alert(`Let's have a beer!`);
 /*Task 4
В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 30, в 
alert выводится “Выслать повестку”.*/
var age = prompt('How old are you?');
(age >= 20 && age <= 30) ? alert('Send a writ') : null;
 /*Task 5
Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – 
определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.*/
var busNumber = prompt('What is the bus number?');
(busNumber == 7 || busNumber == 225 || busNumber == 255) ? alert(`Let's go home!`) : alert(`Let's wait.`);
 /*Task 6
В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert 
сентенцию о необходимости идти на работу.*/
var date = new Date();
(date.getDay() == 0 || date.getDay() == 6) ? null : alert(`WTF! Back to work.`);
 /*Task 7
Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, 
что пользователь может не ввести ничего или нажать на Отмена.*/
var name = prompt('Enter your name');
(name == null || name == undefined) ? alert(`Hi!`) : alert(`Hi ${name} !`);
 /*Task 8
Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов
 не имеет значения), из второго - сумма, подлежащая конвертации. Используя switch, рассчитайте результат
  конвертации. Результат выведите его в alert.*/
var typeTransaction = prompt('Enter transaction type USD-UAH or UAH-USD');
var amount = prompt(`Enter amount`);
var result;
switch (typeTransaction.toUpperCase()) {
	case 'USD-UAH' : result = amount * 25; break;
	case 'UAH-USD' : result = amount / 25; break;
	default : result = 'Where is the money?';
}
alert(`Check ${result}`);
 /*Task 9
Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать
 три значения: 'ru', 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную greeting 
 запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. 
 Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через 
 switch-case.*/
var greeting;
var lang = prompt(`Choose a language: 'ru', 'en', 'de`);
switch (lang.toUpperCase()) {
	case `RU` : greeting = `Привет!`; break;
	case `EN` : greeting = `Hi!`; break;
	case `DE` : greeting = `Hallo!`; break;
}
alert(greeting);
//version 2
var greeting;
var lang = prompt(`Choose a language: 'ru', 'en', 'de`);
if (lang.toUpperCase() == `RU`) {
	greeting = `Привет!`;
} else if (lang.toUpperCase() == `EN`) {
	greeting = `Hi!`;
} else if (lang.toUpperCase() == `DE`) {
	greeting = `Hallo!`; 
}
alert(greeting);
 /*Task 10
В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц 
(зима, лето, весна, осень).*/
var month = new Date().getMonth();
if (month == 11 || month == 0 || month == 1) {
	alert('This is winter');
} else if (month == 2 || month == 3 || month == 4) {
	alert('This is spring');
} else if (month == 5 || month == 6 || month == 7) {
	alert('This is summer');
} else alert ('This is autumn');
 /*Task 11
Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти.
 Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в 
 соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же 
 lang имеет значение 'en' – то аналогично, но день недели будет на английском.*/
var language = prompt(`Choose a language: 'ru', 'en'`);
var day = new Date().getDay();
var today;
const DAY = Object.freeze({"sunday":0, "monday":1, "tuesday":2, "wednesday":3, "thursday":4, "friday":5, "saturday":6});
const RU_DAY = Object.freeze({"воскресенье":0, "понедельник":1, "вторник":2, "среда":3, "четверг":4, "пятница":5, "суббота":6});
if (language.toUpperCase() == 'EN') {
	switch (day){
		case 0: today = Object.keys(DAY)[0]; break;
		case 1: today = Object.keys(DAY)[1]; break;
		case 2: today = Object.keys(DAY)[2]; break;
		case 3: today = Object.keys(DAY)[3]; break;
		case 4: today = Object.keys(DAY)[4]; break;
		case 5: today = Object.keys(DAY)[5]; break;
		case 6: today = Object.keys(DAY)[6]; break;
		default: today = 'undefined day';
	} 
}else if (language.toUpperCase() == 'RU'){
		switch (day){
		case 0: today = Object.keys(RU_DAY)[0]; break;
		case 1: today = Object.keys(RU_DAY)[1]; break;
		case 2: today = Object.keys(RU_DAY)[2]; break;
		case 3: today = Object.keys(RU_DAY)[3]; break;
		case 4: today = Object.keys(RU_DAY)[4]; break;
		case 5: today = Object.keys(RU_DAY)[5]; break;
		case 6: today = Object.keys(RU_DAY)[6]; break;
		default: today = 'undefined day';
	}
}
alert(`Today is ${today}.`)
 /*Task 12
Найдите и исправьте ошибки в коде:*/
var x = prompt('x', 0);
var error = null;

switch (Number(x)) {
    case 0: error = 'На ноль делить нельзя'; break;
    case 1: error = 'На единицу делить бессмысленно'; break;
    case NaN: error = 'Не математическая операция'; break;
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}

