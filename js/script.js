"use strict";

let money = 0,
	time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-06");

console.log('money: ' + money + ', time: ' + time);

let appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let rasxod1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
	cost1 = prompt("Во сколько обойдется?", ""),
	rasxod2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
	cost2 = prompt("Во сколько обойдется?", "");

appData.expenses.r1 = rasxod1;
appData.expenses.a1 = cost1;
appData.expenses.r2 = rasxod2;
appData.expenses.a2 = cost2;

console.log("r1: " + appData.expenses.r1);
console.log("a1: " + appData.expenses.a1);
console.log("r2: " + appData.expenses.r2);
console.log("a2: " + appData.expenses.a2);

alert("Бюджет на 1 день = " + appData.budjet/30);