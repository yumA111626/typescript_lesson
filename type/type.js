"use strict";
// 基本的な型について
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
fruit_tuple.push(30);
console.log(fruit_tuple);
