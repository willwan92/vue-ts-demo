// 接口：仅定义结构，不需要实现
interface Person {
    firstName: string;
    lastName: string;
    sayHello(): string;
}

// 实现接口
class Greeter implements Person {
    constructor(public firstName= '', public lastName= '') {
        // ...
    }
    public sayHello() {
        return 'Hello, ' + this.firstName + this.lastName;
    }
}

// 面向接口编程
function greeting(person: Person) {
    return person.sayHello();
}

const jane = new Greeter('Jane', 'Su');
greeting(jane);
