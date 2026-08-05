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

// Tuple型 に関して記載
// 明示的に配列の要素の型を指定したい時にTupleを使用する
const fruit_tuple :[string , number , boolean] = ["Apple" , 1500 , false];
fruit_tuple.push(30) // 初期値は厳密に指定するが、後の操作は厳しくない
console.log(fruit_tuple)

// enum型に関して
enum Coffee_size  {
    SHORT = "Short",
    TALL = "Tall",
    GRANDE = "Grande",
    VENTI = "Venti"
}

const Coffee = {
    hot : true,
    size : Coffee_size.TALL
}

// union 型について
let unionType: number | string = 10;
// unionType.toUpperCase(); // はじめに10を代入しているためこの変数の方はnumberとなる

unionType = "Hello";
unionType.toUpperCase();

// 配列として代入する
let unionType2: (number | string)[] = [21 , "Hello"];

// literal に関して
// 指定したものしか値を入れることができなくなる
const apple: "apple" = "apple" ; // "apple" しか代入することはできない

// literal のメリット（特定の値の選択肢からしか受け付けないように可能）
let clothSize: "small" | "Medium" | "Large" = "small"; // Small , Medium , Large からしか選択することはできない

// 明示的に型を指定することでenumのようにとる値に制限を設けることが可能
const cloth :{
    color: string,
    size: "small" | "Medium" | "Large"
} = {
    color : "White",
    size : "Large"
}

// type エイリアスに関して
type cloth = "small" | "Medium" | "Large" // 特定の名称の型を作成することが可能。しかし、すでにある型名にすることができない

// 関数に型をつける
// 引数に型注釈を記載しない場合は、型推論でany型になってしまう
function add(num1: number , num2: number): number {
    return num1 + num2;
}

add(3,4)