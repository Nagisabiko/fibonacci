'use strict';
//Fib関数を作る
//フィボナッチ数列の一番目と二番目はお決まりなので計算ではなくルールで値を返す
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    //それ以外の場合
    return fib(n - 1) + fib(n - 2);
}

//40番目まで出力する
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(i + '番目：' + fib(i));
}

//テスト「０」console.log(fib(0));
//テスト「１」console.log(fib(1));
//テスト「１０」console.log(fib(10));