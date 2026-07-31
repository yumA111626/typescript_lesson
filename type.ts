// 基本的な型について

let hasValue: boolean = true;
let count: number = 3;
let float: number = 3.14;
let negative: number = -3.12;
let single: string = 'hello';
let double: string = "Hello";
let back: string = `Hello2`;

// 型注釈・型推論について
// let hasValue2: boolean = true; :boolean が型注釈のこと
// ここを記載しないと、型推論で初期値の値を元に型が決まってしまう

let hasValue2: boolean = true;
let count2: number = 3;
let float2: number = 3.14;
let negative2: number = -3.12;
let single2: string = 'hello';
let double2: string = "Hello";
let back2: string = `Hello2`;

// object に型をつける

const person :{
    name : string;
    age :number;
} = {
    name : "Yuma",
    age :20
}

// 配列の書き方
const fruit = ["Apple" , "Banana" , "Grape"]
const fruitAndNumber = ["Apple" , "Banana" , "Grape" , 1]

// 型の指定をしてしまうと、配列には型指定したものしか入れることはできない
const fruit_str : string[] = ["Apple" , "Banana" , "Grape"] // この配列にはstringしか入れることはできない
