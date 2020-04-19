//2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
let money = +prompt('Ваш бюджет на месяц?');
let time =  +prompt('YYYY-MM-DD');
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

    // appData.expenses[a1] = a2;
    // appData.expenses[a3] = a4;
// 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
alert('Ваш бюджет на 1 день: '+ Math.round(money / 30 ))
//
// for (let i = 0; i < 2;){
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = prompt('Во сколько обойдется?');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null &&  (typeof (b)) != null && a !== '' && b !== '' && a.length < 50 && b.length < 50){
//         appData.expenses[a] = b;
//         i++;
//         console.log('Success')
//     }else {
//         // Вернутся в цикл заново
//
//     }
//
// }

////////////// 1) Цикл while
// let i = 0;
//  while(i < 2){
//      let a = prompt('Введите обязательную статью расходов в этом месяце'),
//          b = prompt('Во сколько обойдется?');
//      if ((typeof (a)) === 'string' && (typeof (a)) != null &&  (typeof (b)) != null && a !== '' && b !== '' && a.length < 50 && b.length < 50){
//          appData.expenses[a] = b;
//          i++;
//          console.log('Success')
//      }else {
//          // Вернутся в цикл заново
//
//      }
//  }
///////// Цикл do while
// let i = 0;
//  do {
//      let a = prompt('Введите обязательную статью расходов в этом месяце'),
//          b = prompt('Во сколько обойдется?');
//      if ((typeof (a)) === 'string' && (typeof (a)) != null &&  (typeof (b)) != null && a !== '' && b !== '' && a.length < 50 && b.length < 50){
//          appData.expenses[a] = b;
//          i++;
//          console.log('Success')
//      }else {
//          // Вернутся в цикл заново
//
//      }
//  }while (i < 2);




appData.moneyPerDay = (appData.budget / 30);

alert('Ежедневный бюджет: ' + appData.moneyPerDay);
if (appData.moneyPerDay < 100){
    console.log('Минимальный уровень достака');
}else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достака');
}else  if (appData.moneyPerDay > 2000){
    console.log('Высокий уровень достака');
}else {
    console.log('Ошибка!');
}

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
