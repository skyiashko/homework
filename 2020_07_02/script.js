/*Task 1
Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
 С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из 
 prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением,
  которое также запрашивается из prompt.
*/
var person = {'firstname': 'John', 'lastname': 'Doe'};
var key = prompt('Enter key');

	if (key in person) {
		alert(person[`${key}`]);
	} else {
		var value = prompt('Enter value');
		person[key] = value;
	}
console.log(Object.keys(person));
console.log(Object.values(person));
/* Task 2
Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными 
из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. 
Добавьте этот гаджет персоне, созданной ранее.
*/
var mobile = {};

	while (true) {

		let mobileKey = prompt('Enter mobilekey', '');

		if (mobileKey === null) {
		break;
	}
		let mobileValue = prompt('Enter mobileValue', '');

		mobile[mobileKey] = mobileValue;
	}
person.mobile = mobile;
console.log(person);

/*Task 3
Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. 
В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны 
(которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. 
Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении 
prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.
*/

var action = '';

while(true) {
	action = prompt('Choose action: update or delete')
	if (action === null) {
		break;
	}
	else if (action === 'update') {
		let key = prompt('Enter key');
		let value = prompt('Enter value');
		person[key] = value;
	}
		else if (action === 'delete') {
		key = prompt('Enter key');
		delete person[key]
	}
}
console.log(person);

/* Task 4
Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее 
объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с 
использованием методов Native JS).
*/
let list = document.createElement('dl');
document.body.appendChild(list);

for (var key in person) {

	let dt = document.createElement('dt');
	dt.innerText = key;

	let dd = document.createElement('dd');
	dd.innerText = person[key];

	list.appendChild(dt);
	list.appendChild(dd);
}
/* Task 5
Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) 
минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в 
диапазон дат объекта dates.
*/

date = new Date();
somedate = new Date(prompt('Enter date', 'yyyy-MM-dd'));
var dates = {
	firstDate: date.setDate(date.getDate() - 2),
	secondDate: date.setDate(date.getDate() - 365)
}

if ((somedate <= dates['firstDate']) && (somedate >= dates['secondDate'])){
  alert('The entered date is in the date range');
} else {
  alert('The entered date is not in the date range');
}

/* Task 6

Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов браузера добавьте 
ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.

<img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" 
alt="" style="border: 1px solid #ccc" width="200" />
*/

let image = {
	src:'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
	alt:'',
	width:200,
	style:{
		border:{
		borderWidth :'1px',
		style :'solid',
		color :'#ccc'
  		}
	}
}
console.log(image);