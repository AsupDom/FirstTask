"use strict";

let money = 0,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-06");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}

start();

let appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses() {
	let i = 0;

	while (i < 2) {
		let r = prompt("Введите обязательную статью расходов в этом месяце", ""),
			a = +prompt("Во сколько обойдется?", ""); 
		
		if ( (typeof(r) === 'string') && (typeof(r) != null) && (typeof(a) != null) && (r != '') & (a != 0) ) {
			appData.expenses[r] = a;
			i++;
		} else {
			continue;
		}
	}
}

chooseExpenses();

appData.budjetPerDay = (appData.budjet / 30).toFixed(1);

function checkSavings() {
	if (appData.savings) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Каков просцент? %");

		appData.monthIncome = +(save * percent / 100 / 12);
	}
}

function detectLevel() {
	console.log(appData.budjet);
	switch(true) {
		case(appData.budjet < 1000):
			console.log("У Вас низкий уровень бюджета");
			break;
		case(appData.budjet < 2000):
			console.log("У Вас средний уровень бюджета");
			break;
		case(appData.budjet > 2000):
			console.log("У Вас высокий уровень бюджета");
			break;
		default:
			console.log("Что-то пошло не так");
	}
}

function chooseOptExpenses() {
	let question = "",
		answer = "";

	for (let i = 1; i < 4; i++) {
		question = prompt("Статья необязательных расходов?", "");
		answer = prompt("Ответ на вопрос","");

		if ( (typeof(question) === 'string') && (typeof(question) != null) && (question != "") &&
		(typeof(answer) === 'string') && (typeof(answer) != null) && (answer !="") ) {
			appData.optionalExpenses[question] = answer;
		} else {
			i = i - 1;
		}
	}
}

checkSavings();
chooseOptExpenses();
detectLevel();

console.log(appData);