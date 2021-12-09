// 装饰器原理：装饰器实际上是一个函数，通过定义劫持，能够对类及其方法、属性提供扩展功能

// 类装饰器
function log(target: Function) {
    // target就是传入的构造函数
    console.log(target === Foo);
    
    target.prototype.log = function () {
        console.log(this.bar);
    }
    // 如果类装饰器返回一个值，它会使用提供的构造函数来替换传入的构造函数
}

/**
 * 方法装饰器
 * @param target 原型或构造函数
 * @param name 方法名
 * @param descriptor 属性描述符
 */
function dong(target: any, name: string, descriptor: any) {
    // 对象的方法的定义/修改方式：Object.defineProperty(target, name, descriptor)
    // Object.defineProperty用法详见：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

    // descriptor：属性描述符，描述的就是target[name]这个方法，
    // console.log(target[name] === descriptor.value); // true
    const baz = descriptor.value; // 之前的方法
    // 通过修改descriptor.value扩展baz方法
    descriptor.value = function(val: string)     {
        console.log('dong...');
        // call()方法可以调用一个函数，并且可以为调用的函数指定this和参数
        baz.call(this, val);
    }

    // 返回属性描述符（// 推测：ts方法装饰器后续通过Object.defineProperty方法修改传入的方法）
    return descriptor;
}

// 属性装饰器
function mua(target: any, name: string) {
    // target 是原型(装饰实例属性时)或构造函数（装饰静态属性，即类属性时）
    target[name] = 'mua~~~'
}

// 使用类装饰器
@log
class Foo {
    bar = 'bar';

    // 使用属性装饰器
    @mua
    public ns!: string;

    // 使用方法装饰器
    @dong
    public baz(val: string) {
        this.bar = val;
    }

}

const foo2 = new Foo();
// @ts-ignore
foo2.log();
foo2.baz('lalala')
console.log(foo2.ns);
