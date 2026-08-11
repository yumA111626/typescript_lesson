class Person{
    name : string;
    // インスタンス生成時に最初に実行される関数
    constructor(initName : string){
        this.name = initName;
    }
}
// インスタンス生成
const yuma = new Person("yuma");
console.log(yuma)