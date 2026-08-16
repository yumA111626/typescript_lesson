class Person{
    readonly name : string; // readonly と記載することによって、外部から書き換えをすることができなくなる
    readonly id : number = 32; // readonly と記載することによって、外部から書き換えをすることができなくなる
    private age : number; // クラス外からはアクセスしないようにする（先頭に#をつけることによってprivateと同じにすることが可能）

    // インスタンス生成時に最初に実行される関数
    constructor(readonly initName : string , initAge : number){
        this.name = initName;
        this.age = initAge;
        this.id = 33; // コンストラクタ関数内では値の書き換えは実行可能
    }

    // 初期化の処理を省略して記載する場合
    // constructor(public name : string , private age  : number){}

    // 年齢を増加する
    incrementAge(){
        this.age++
    }

    // method を作成する (メソッドに明示的に型を指定する)
    greeting(this :Person){
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old.`)
    }
}
// インスタンス生成
const yuma = new Person("yuma" , 25);
yuma.incrementAge();
yuma.greeting();