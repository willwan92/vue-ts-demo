// 自己实现一个Component装饰器

// 这里需要使用 vue-property-decorator 导入Vue，不知为何
import { Vue } from 'vue-property-decorator';

/**
 * 自定义组件装饰器
 * v0.1: 这里只实现了可以接收组件选项配置项
 * @param options 
 */
export function Component(options: any) {
    // 因为Component可以接受配置项参数，并把类装饰为一个vue组件
    // 所以要返回一个函数，这个函数再来装饰类
    return function(target: Function) {
        // 在这里需要把target（传入的类）的成员解析为vue组件的选项
        
        // Vue.extend: 参数是一个包含组件选项的对象，返回一个组件
        return Vue.extend(options)
    }
}