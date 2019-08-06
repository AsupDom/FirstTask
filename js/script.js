"use strict";

let money = 0,
	time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-06");

console.log('money: ' + money + ', time: ' + time);