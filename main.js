// Task 1

// var x = prompt ("Введите x");
// var n = prompt ("Введите n");

// function pow (x, n) {
//     var res = x;
//     for (var i = 1; i < n; i++) {
//     res = res * x;
// }
//     return res;
// }

// alert (pow(x, n));

// Task 2

// var x = Number(prompt("Введите x"));
// var y = Number(prompt("Введите y"));

// function minMax (x, y) {
//     if (x > y) {
//         return y;
//     }
//     else {
//         return x;
//     }  
// }

// alert (minMax (x, y));

// // Task 3

// var x = Number(prompt ("Введите x"));

// function sign (x) {
//     if (x < 0) {
//         return -1;
//     }
//     else if ( x > 0 ) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

// alert (sign(x));

// Task 4

// var a = Number(prompt("Введите a"));
// var b = Number(prompt("Введите b"));
// var op = Number(prompt("Введите значение operation"));

// function calc (a, b, op){
//     switch (op) {
//         case 1:
//             return a-b;
//             break;
//         case 2:
//             return a*b;
//             break;
//         case 3:
//             return a/b;
//             break;
//         default:
//             return a+b;
//     }
// }

// alert (calc(a, b, op));

// Task 5

var k = Number(prompt("Введите k"));
var n = Number(prompt("Введите n"));

function digitN(k, n) {
    for ( var i=1; i<=n-1; i++ ){
        k=k/10;
        console.log (k);
    }
        if (k != 0) {
            return k%10;
        }
        else {
            return -1;
        }
    
}

alert(digitN(k, n));

// Task 6

// var x = Number(prompt("Введите x"));
// var y = Number(prompt("Введите y"));

// var add = function (x,y) {
//     return x+y;
// }

// alert (add(x,y));