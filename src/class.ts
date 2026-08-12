class Person{
    name : string;
    // インスタンス生成時に最初に実行される関数
    constructor(initName : string){
        this.name = initName;
    }

    // method を作成する (メソッドに明示的に型を指定する)
    greeting(this :Person){
        console.log(`Hello my name is ${this.name}`)
    }
}
// インスタンス生成
const yuma = new Person("yuma");
yuma.greeting();