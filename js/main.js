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
console.log(appData);

//Вопросы к этому заданию
//1) Сколько типов данных существует в JS? //
// 7 типов данных
// 1 -  String
// 2 -  Number
// 3 -  Boolean
// 4 -  null
// 5 -  undefined
// 6 -  object
// 7 -  symbol
//2)Как вывести информацию в консоль?
// console.log(), console.warn();
//3) Какая функция операторов || и &&?
//1)  || - Если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.
//2) && - Если какой-либо из аргументов false , он вернёт false, если оба true, вернёт true.
