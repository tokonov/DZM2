// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

// let result;
//  if (a + b < 4) {
//    result = 'Мало';
//  }  else {
//    result = 'Много';
// //  }
//
  let a = 3;
  let b = 5;
  result = ( a + b < 4) ? 'Мало': 'много';
  console.log(result)

// let message;
//
// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
let login = [
    'Сотрудник',
    'Директор',
    ''
];
let message = (login === 'Сотрудник') ? alert('Привет') :
  (login === 'Директор') ? 'Здравствуйте' :
  (login === '') ? 'Нет логина' :
  '';
console.log(message)

// Если переменная a больше нуля - то в переменную ggg записать функцию,
//     которая выводит один !, иначе записать функцию, которая выводит два !
//
let A = prompt('numbers', 2) ;
let ggg = (A > 0) ? alert(1): alert(2);


// function getNumbers() {
//   let A = prompt('введите число', '0');
// if (A > 0) {
//   alert('1');
// } else {
//   alert('2');
// }
// }
// getNumbers()


let elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
alert('длина массива')
alert(elements.length)


