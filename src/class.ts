class Person{
    name : string;
    private age : number; // クラス外からはアクセスしないようにする（先頭に#をつけることによってprivateと同じにすることが可能）

    // インスタンス生成時に最初に実行される関数
    constructor(initName : string , initAge : number){
        this.name = initName;
        this.age = initAge;
    }

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