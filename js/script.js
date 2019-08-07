"use strict";

let money = 0,
	time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-06");

let appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

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

appData.budjetPerDay = appData.budjet / 30;

console.log(appData);