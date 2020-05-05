'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++ ) {
    console.log(i + '番目：' + fib(i));
}


//Fib関数を作る
//フィボナッチ数列の一番目と二番目はお決まりなので計算ではなくルールで値を返す
//function fib(n) {
//    if (n === 0) {
//        return 0;
//    } else if (n === 1) {
//        return 1;
//    }
//    //それ以外の場合
//    return fib(n - 1) + fib(n - 2);
//}

//40番目まで出力する
//const length = 40;
//for (let i = 0; i <= length; i++) {
//    console.log(i + '番目：' + fib(i));
//}
