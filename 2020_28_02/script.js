/* Task 1 
Расширьте глобальный объект Date методом getWeek, с помощью которого можно узнать номер недели в году. 
А также добавьте в прототип метод getQuarter - для получения номера годового квартала

var date = new Date();
console.log( date.getWeek() ); // 9
console.log( date.getQuarter() ); // 1
*/

Date.prototype.getWeek = function() {
let currentTime = new Date();
let startYear = new Date(currentTime.getFullYear(), 0, 1).getTime();
let week = 1000 * 3600 * 24 * 7;
let numberOfWeeks = Math.trunc((currentTime.getTime() - startYear) / week + 1);
return numberOfWeeks;
}

Date.prototype.getQuarter = function() {
    if (this.getMonth() <= 2) {
        return 1;
    } else if(this.getMonth() > 2 && this.getMonth() <= 5) {
        return 2;
    } else if(this.getMonth() > 5 && this.getMonth() <= 8) {
        return 3;
    } else return 4;
}

var date = new Date();
console.log( date.getWeek() ); // 9
console.log( date.getQuarter() ); // 1

/* Task 2
Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам.
 Метод изменяет исходный массив

var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]
*/

Array.prototype.swap = function(i, j) {
    this[this.length] = this[i];
    this[i] = this[j];
    this[j] = this[this.length-1];
    this.pop();
    return this;
};

var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]

/* Task 3
В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. Игроки должны иметь свойство 
health - которое определяет базовые боевые возможности игрока (выносливость), и power - сила удара. Оба 
свойства определяются при создании экземпляра класса. Также игрок должен иметь метод hit для нанесения
 удара другому игроку. При нанесении удара “жертва” теряет энергии (health) соответственно значению power
  игрока, который наносит удар. Также все игроки имеют возможность лечиться - метод heal.
Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями.
 И напишите пример боя, используя соответствующие методы и свойства.
 */

function Warrior(name, health, power) {
	this.name = name;
	this.health = health;
	this.power = power;
}

Warrior.prototype.hit = function(player) {
	player.health = player.health - this.power;
	alert(`${this.name} hits ${player.name} by ${this.power} points`);
	alert(`${this.name} health : ${this.health} - ${player.name} health : ${player.health}`)
	if (player.health < 0) {
		alert(`${this.name} wins`);
	}
}

Warrior.prototype.heal = function(point) {
	this.health = this.health + point;
	alert(`${this.name} cures ${point} points`);
}
 
let player1 = new Warrior('Java', 10, 2);
let player2 = new Warrior('JavaScript', 8, 4);

alert(`In the right corner of the ring name : ${player1.name}; health: ${player1.health}; power: ${player1.power}`);
alert(`In the left corner of the ring name : ${player2.name}; health: ${player2.health}; power: ${player2.power}`);

player1.hit(player2);
player1.hit(player2);
player1.hit(player2);
player1.hit(player2);
player2.heal(6);
player2.hit(player1);
player2.hit(player1);
player2.hit(player1);
