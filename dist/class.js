"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    // name : string;
    // private age : number; // クラス外からはアクセスしないようにする（先頭に#をつけることによってprivateと同じにすることが可能）
    // // インスタンス生成時に最初に実行される関数
    // constructor(initName : string , initAge : number){
    //     this.name = initName;
    //     this.age = initAge;
    // }
    // 初期化の処理を省略して記載する
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 年齢を増加する
    incrementAge() {
        this.age++;
    }
    // method を作成する (メソッドに明示的に型を指定する)
    greeting() {
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old.`);
    }
}
// インスタンス生成
const yuma = new Person("yuma", 25);
yuma.incrementAge();
yuma.greeting();
