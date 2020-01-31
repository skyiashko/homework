//task 1
var a = 2;
var b = 2 * 3;
var c = a + b;
console.log(a, b, c);
//task 2
var firstName;
var lastName;
firstName = prompt('Enter the firstName', firstName);
lastName = prompt('Enter the lastName', lastName);
alert(`What's up ` + firstName.toUpperCase() +` ` + lastName.toUpperCase());
//task 3
var x, sum, sub, mul, div;
var y;
x = prompt('Enter the first number', x);
y = prompt('Enter the second number', y);
sum = Number(x) + Number(y);
sub = x - y;
mul = x * y;
div = x / y;
alert('The sum of the numbers is: ' + sum);
alert('Subtraction of numbers is: ' + sub);
alert('Multiply of numbers is: ' + mul);
alert('Devision of numbers is: ' + div);
//task 4
var speed, time;
speed = prompt('Enter the spacecraft speed:', speed);
const DISTANCE = 384400;
time = DISTANCE / speed;
alert(`Your spaceship will arrive on the moon in ` + time + ` hours.`);
//task 5
var number, result;
number = prompt('Enter the number', number);
result = number % 2;
alert(`The entered number is odd: ` + Boolean(result));
//task 6
var value, result;
value = prompt('Enter any value', value);
alert(`The entered value is number: ` + !isNaN(value));
//task 7
var bit;
bit = prompt('Enter the number of bits', bit);
const BYTE = bit / 8;
const KB = BYTE / 1024;
const MB = KB / 1024;
const GB = MB / 1024;
alert(`This amount is equal to: ` + BYTE + ` byte; ` + KB + ` KB; ` + MB + ` MB; ` + GB + ` GB`);
//task 8
var appleChuang, appleZeng, result;
appleChuang = prompt('Chuang Tzu had apples:', appleChuang);
appleZeng = prompt('Zeng Tzu ate apples: ', appleZeng);
result = appleChuang ==appleZeng;
alert(`Zeng Tzu ate all the apples: ` + result);
//task 9
var firstColumn, secondColumn, thirdColumn;
firstColumn = prompt('Enter the height of the first column', Number(firstColumn));
secondColumn = prompt('Enter the height of the second column', Number(secondColumn));
thirdColumn = prompt('Enter the height of the third column', Number(thirdColumn));
alert(`The highest column height is: ` + Math.max(firstColumn, secondColumn, thirdColumn));
//task 10
var firstNumber, secondNumber;
firstNumber = Math.random() * 100;
secondNumber = prompt('Enter the number', secondNumber);
alert(`First number is : ` + firstNumber + ` Second number is : ` + secondNumber + ` the first number is less than the second : ` + (firstNumber < secondNumber));