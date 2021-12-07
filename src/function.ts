/**
 * 函数中使用类型注解
 */

// 函数中使用类型注解：
// 此处name和age都是必填参数，
// 可选参数加上问好“?”，或者给出默认值
// 可选参数要放在必选参数后面
function printInfo(name: string, age: number, gender: string = '男', addr?: string): void {
    console.log(`姓名：${name}；性别：${gender}；年龄：${age}；地址：${addr}`)
}

printInfo('will', 16)

/**
 * 函数重载：函数名相同，而参数不同。返回类型可以相同也可以不同
 * 先声明，后实现
 */
function getFullName(person: { firstName: string, lastName: string }): string
function getFullName(person: { firstName: string, lastName: string }[]): string[]
function getFullName(person: { firstName: string, lastName: string } | { firstName: string, lastName: string }[]): any {
    if (Array.isArray(person)) {
        let res: string[] = []
        person.forEach(item => {
            res.push(item.firstName + item.lastName)
        })
        return res
    } else if (typeof person === 'object') {
        return person.firstName + person.lastName
    }
}

getFullName({firstName: 'chong', lastName: 'wan'})
getFullName([{firstName: 'chong', lastName: 'wan'}])