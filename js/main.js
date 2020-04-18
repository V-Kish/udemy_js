//2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
let money = prompt('Ваш бюджет на месяц?');
let time =  prompt('YYYY-MM-DD');
//

//3) Создать объект appData, который будет содержать такие данные:
let  appData = {
    budget: money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};
//
//4) Задать пользователю по 2 раза вопросы:
let answerOne = prompt('Введите обязательную статью расходов в этом месяце');
let answerTwo = prompt('Во сколько обойдется?');
//
appData.expenses[answerOne] = answerTwo;
// 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
alert('Ваш бюджет на 1 день: '+ Math.round(money / 30 ))
//
console.log(appData)

//Вопросы к этому заданию
//1)
//2)
//3)
