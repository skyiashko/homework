/*Task 1
Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
*/

var calculator = {
	x: 0,
	y: 0,

	read() {
		this.x = +prompt('Enter x ', '');
		this.y = +prompt('Enter y ', '');

		if (!this.x || !this.y) throw new Error('x and y should be entered');
	},

	sum() {
		return this.x + this.y;
	},

	multi() {
		return this.x * this.y;
	},

	diff() {
    return this.x - this.y;
  	},

  	div() {
    return this.x / this.y;
  	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

/* Task 2
Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
 при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, 
 записанным в свойстве объекта message.
*/

var coffeeMachine = {
	message: 'Your coffee is ready!',

	start() {
		setTimeout(function() {
			alert(coffeeMachine.message)
		}, 3000);
	}
}

coffeeMachine.start();

/* Task 3
Создайте объект array с методом инициализации начального значения массива, c методами добавления, 
удаления последнего элемента массива и методом возврата текущего состояния массива. Используйте 
концепцию chaining для создания цепочки вызовов.

array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]
*/

var array = {
	array: null,

	setValue(x) {
		this.array = x;
		return this;

	},

	push(y) {
		this.array.push(y);
		return this;
	},

	pop() {
		this.array.pop();
		return this;
	},

	getValue(){
		return this.array;
	}
}

array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]

/* Task 4
Создайте функцию hello(), которая выводит приветствие пользователю. 
Создайте два объекта, содержащие поля firstname, lastname. Используя 
метод call и функцию hello() приветствуйте каждого из пользователей персонально.
*/

 function hello() {
    alert('Hello ' + this.firstname + ' ' + this.lastname);
};

var user1 = {
    firstname: 'John',
    lastname: 'Doe'
};

var user2 = {
	firstname: 'Doe',
	lastname: 'John'
};

hello.call(user1);
hello.call(user2);

/* Task 5
Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида 
‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал 
ранее созданного калькулятора.

alert(me.getSum());
alert(me.getDiv());

*/

var newCalculator = {
  x: calculator.x,
  y: calculator.y,

  getSum() {
    return (this.x + ' + ' + this.y) + ' = ' + calculator.sum(this);
  },
  getDiff() {
    return (this.x + ' - ' + this.y) + ' = ' + calculator.diff(this);
  },
  getMulti() {
    return (this.x + ' * ' + this.y) + ' = ' + calculator.multi(this);
  },
  getDiv() {
    return (this.x + ' / ' + this.y) + ' = ' + calculator.div(this);
  }
}

alert(newCalculator.getSum());
alert(newCalculator.getDiv());

/* Task 6
“Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText. 
Метод appendTo с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода.
Метод appendText может дописывать текст в добавленный элемент. Создайте массив строк и запустите 
цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст добавленного 
html-элемента добавляется соответствующий по порядку элемент массива. Учтите, что для доступа к 
вашему элементу не должен производиться поиск по DOM-дереву. Live preview
*/

let element = '';
let addElement = {
  delay: 500,
  appendTo(container){
    element = $('<p>').appendTo(container)
  },
  appendText(text) {
      text = text.split('');
      for (let i = 0; i < text.length; i++) {
          let item = text[i];
          setTimeout (function() {
              $('<span>').text(item).appendTo(element);
          }, this.delay * i);

      }
  }
}

addElement.appendTo('body');
addElement.appendText('Lorem ipsum...');

/* Task 7
Есть следующий код:
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}


Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:


//format.apply(/* Ваш код ); */// [Ukraine]
//format.call(/* Ваш код */); // Kyiv
//format.apply(/* Ваш код */); // Kyiv
//format.apply(/* Ваш код */); // undefined

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, ' ',' '); // Ukraine
format.apply(country , [' [', '] ']); // [Ukraine]
format.call(country.capital, ' ',' '); // Kyiv
format.apply(country.capital,[' ',' ']); // Kyiv
format.apply(country.name, [' ',' ']); // undefined

/* Task 8

Создайте объект user с полем name. Создайте функцию format с параметрами start и end:


function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя


userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().
*/

user = {
	name: 'John'
}

function format(start, end) {
    console.log(start + this.name + end);
}

function userFormat(start, end) {
	format.call(user, start, end);
}

userFormat('<<<', '>>>'); // <<<John>>>

let bindFormat = format.bind(user);
bindFormat('<<<', '>>>');

/* Task 9 
Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую
 функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

hello('World'); // Hello World
hello('John'); // Hello John
*/

function concat(string1, string2, separator) {
  return string1 + separator + string2;
}
function hello(element) {
  let greetings = concat.bind(null, 'Hello', element, ' ');
  return console.log(greetings());
}

hello('World'); // Hello World
hello('John'); // Hello John