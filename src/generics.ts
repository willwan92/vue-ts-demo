// Generics：泛型，是指在定义函数、接口或类的时候，
// 不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 定义泛型接口
interface Result<T> {
    ok: 0 | 1;
    data: T[];
}

// 定义泛型函数
function getData<T>(): Result<T> {
    const data: any[] = [
        {
            id: 1,
            name: '类型注解',
            version: '2.0'
        },
        {
            id: 2,
            name: '编译型语言',
            version: '2.0'
        }
    ]

    return { ok: 1, data }
}
