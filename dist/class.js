"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name; // readonly と記載することによって、外部から書き換えをすることができなくなる
    id = 32; // readonly と記載することによって、外部から書き換えをすることができなくなる
    age; // protected 継承先のクラスまではアクセスすることが可能
    // インスタンス生成時に最初に実行される関数
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
        this.id = 33; // コンストラクタ関数内では値の書き換えは実行可能
    }
    // 初期化の処理を省略して記載する場合
    // constructor(public name : string , private age  : number){}
    // 年齢を増加する
    incrementAge() {
        this.age++;
    }
    // method を作成する (メソッドに明示的に型を指定する)
    greeting() {
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old.`);
    }
}
// 継承について (extends)
class Teacher extends Person {
    _subject;
    get subject() {
        if (!this._subject) {
            throw Error("There is no subject.");
        }
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    // コンストラクタを記載したい場合(継承したクラスを拡張したい場合)
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    // method を上書きして使用する
    greeting() {
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
// インスタンス生成
const teacher = new Teacher("Tanaka", 33, "Math");
console.log(teacher.subject);
teacher.subject = "Music";
console.log(teacher.subject);
teacher.greeting();
