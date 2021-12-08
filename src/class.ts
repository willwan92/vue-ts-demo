// 类：ts的类和es6的类是类似的，但是比es6的类多了一些特性，比如：修饰符等。
export class MyComp {

    // 存取器：存取数据时可添加额外逻辑，在vue组件里可用作计算属性
    get foo() {
        return this._foo;
    }
    set foo(val) {
        this._foo = val;
    }
    
    // 静态属性（类属性），通过类名访问
    public static alias: string = 'my_comp';

    // 以下都是实例属性（仅当类被实例化的时候才会被初始化的属性）
    // 公共属性，在类的内部和外部（通过类的实例）都可以访问
    public baz: string;
    // 只读属性，必须在声明时或者构造函数里初始化
    public readonly mua: string = 'mua';
    // 保护属性，除了在类的内部访问，还可以在派生类（继承他的类）中访问
    protected bar: string;
    // 私有属性，只能在类的内部访问
    private _foo: string; 

    /**
     * 构造函数：初始化成员变量
     * @param tua 参数加上修饰符，
     *  相当于定义并初始化一个成员属性（这种方式跟便捷，推荐使用）
     */
    constructor(private tua = 'tua') {
        this._foo = 'foo';
        this.bar = 'bar';
        this.baz = 'baz';
    }

    // 方法也有修饰符
    private someMethod() {

    }
}

// class 是语法糖
export class Person { // 类名指向构造函数
    constructor(public name: string, public age: number) { // constructor是默认方法，new实例化时调用
        this.name = name; // 属性会声明在实例上
        this.age = age;
    }

    public say() { // 方法会声明在原型上
        return '我的名字叫：' + this.name + ', 今年' + this.age + '岁了';
    }
}

console.log(typeof Person); // function
console.log(Person === Person.prototype.constructor); // true


// 上面的class Person 等效于
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.say = function () {
//     return "我的名字叫：" + this.name + ", 今年" + this.age + "岁了";
// }
