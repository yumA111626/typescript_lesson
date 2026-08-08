"use strict";
// 基本的な型について
Object.defineProperty(exports, "__esModule", { value: true });
let hasValue = true;
let count = 3;
let float = 3.14;
let negative = -3.12;
let single = 'hello';
let double = "Hello";
let back = `Hello2`;
// 型注釈・型推論について
// let hasValue2: boolean = true; :boolean が型注釈のこと
// ここを記載しないと、型推論で初期値の値を元に型が決まってしまう
let hasValue2 = true;
let count2 = 3;
let float2 = 3.14;
let negative2 = -3.12;
let single2 = 'hello';
let double2 = "Hello";
let back2 = `Hello2`;
// object に型をつける
const person = {
    name: "Yuma",
    age: 20
};
// 配列の書き方
const fruit = ["Apple", "Banana", "Grape"];
const fruitAndNumber = ["Apple", "Banana", "Grape", 1];
// 型の指定をしてしまうと、配列には型指定したものしか入れることはできない
const fruit_str = ["Apple", "Banana", "Grape"]; // この配列にはstringしか入れることはできない
// Tuple型 に関して記載
// 明示的に配列の要素の型を指定したい時にTupleを使用する
const fruit_tuple = ["Apple", 1500, false];
fruit_tuple.push(30); // 初期値は厳密に指定するが、後の操作は厳しくない
console.log(fruit_tuple);
// enum型に関して
var Coffee_size;
(function (Coffee_size) {
    Coffee_size["SHORT"] = "Short";
    Coffee_size["TALL"] = "Tall";
    Coffee_size["GRANDE"] = "Grande";
    Coffee_size["VENTI"] = "Venti";
})(Coffee_size || (Coffee_size = {}));
const Coffee = {
    hot: true,
    size: Coffee_size.TALL
};
// union 型について
let unionType = 10;
// unionType.toUpperCase(); // はじめに10を代入しているためこの変数の方はnumberとなる
unionType = "Hello";
unionType.toUpperCase();
// 配列として代入する
let unionType2 = [21, "Hello"];
// literal に関して
// 指定したものしか値を入れることができなくなる
const apple = "apple"; // "apple" しか代入することはできない
// literal のメリット（特定の値の選択肢からしか受け付けないように可能）
let clothSize = "small"; // Small , Medium , Large からしか選択することはできない
// 明示的に型を指定することでenumのようにとる値に制限を設けることが可能
const cloth = {
    color: "White",
    size: "Large"
};
// 関数に型をつける
// 引数に型注釈を記載しない場合は、型推論でany型になってしまう
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
