/*
    算術演算子
*/
// 加算
let add = 10 + 5;
console.log(add); // 15

// 文字列の連結
let str = "Java" + "Script";
console.log(str); // "JavaScript"

let result1 = 3 + 3;
let result2 = "3" + "3";
console.log(result1);
console.log(result2);

// 減算
let sub = 10 - 5;
console.log(sub); // 5

// 乗算
let mul = 10 * 5; // 10 × 5
console.log(mul); // 50

// 除算
let div = 10 / 5; // 10 ÷ 5
console.log(div); // 2

// インクリメント
let incr = 10;
incr++; // 現在の値に1を加える
console.log(incr); // 11

// デクリメント
let decr = 10;
decr--; // 現在の値から1を引く
console.log(decr); // 9

/*
    代入演算子
*/
// 加算して代入
let add2 = 1;
add2 += 2; // 1 + 2
console.log(add2); // 3

// 文字列を連結して代入
let str2 = "Java";
str2 += "Script"; // "Java" + "Script"
console.log(str2); // "JavaScript"

// 減算して代入
let sub2 = 10;
sub2 -= 5; // 10 - 5
console.log(sub2); // 5

// 乗算して代入
let mul2 = 10;
mul2 *= 5; // 10 × 5
console.log(mul2); // 50

// 除算して代入
let div2 = 10;
div2 /= 5; // 10 ÷ 5
console.log(div2); // 2

/*
    比較演算子
*/
// 等しいかどうか
let isEqual = (10 == 10); // 値が等しい
console.log(isEqual); // true 真

// 等しくないかどうか
let isNotEqual = (10 != 5); // 値が等しくない
console.log(isNotEqual); // true 真

// より大きいかどうか >
let isGreater = (10 > 5); // 10は5より大きい
console.log(isGreater); // true 真

// より小さいかどうか <
let isLess = (10 < 5); // 10は5より小さい
console.log(isLess); // false 偽

// より大きいか等しいかどうか >=
let isGreaterOrEqaul = (10 >= 10); // 10は10以上
console.log(isGreaterOrEqaul); // true 真

// より小さいか等しいかどうか <=
let isLessOrEqaul = (10 <= 5); // 10は5以下
console.log(isLessOrEqaul); // false 偽