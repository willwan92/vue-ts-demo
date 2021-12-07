/**
 * 类型注解：内置常用类型：number, string, boolean, any, void
 */

// 基础类型
let user: string = 'will';
let age: number = 30;

// 任意类型
let foo: any;
foo = 123;
foo = 'abc';

// 数组使用类型注解
let lang: string[];
lang = ['js', 'ts'];

// 数组使用任意类型
let list: any[] = ['abc', false, 123];

// 不指定具体类型声明并初始化时，会有类型推断
let str = 'abc';
// str = 123 //会报错

// 指定两种类型
let abc: string | number;
abc = '123';
abc = 123;

// 在对象中使用注解
let person: { name: string, age: number };
person = { name: 'will', age: 20 };

// 函数中使用类型注解
function sum(a: number, b: number): number {
    return a + b;
}

// void类型，用于没有返回值的函数
function warning(msg: string): void {
    alert(msg);
}
