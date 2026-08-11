"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    // インスタンス生成時に最初に実行される関数
    constructor(initName) {
        this.name = initName;
    }
    // method を作成する
    greeting() {
        console.log(`Hello my name is ${this.name}`);
    }
}
// インスタンス生成
const yuma = new Person("yuma");
yuma.greeting();
