"use strict";
// Перепишите функцию, используя оператор '?' или '||'

let age = prompt("How old are you?");

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
console.log(checkAge(age));

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

console.log(checkAge(age));

// Функция pow(x,n)

let x = prompt('x = ');
let n = prompt('n = ');
function pow(x,n){
    return x**n;
}

console.log(pow(x,n));

// Перепишите с использованием функции-стрелки
let ask = (question, yes, no) => (confirm(question) ? yes() : no());
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => b-a);

alert( arr ); // 8, 5, 2, 1, -10

// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша

// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

// Получить средний возраст

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

let getAverageAge = (arr) => {
    let sum =0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i].age;
    }
    let res = sum/arr.length;
    return res;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28