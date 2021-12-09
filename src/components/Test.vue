<template>
    <div>
        {{msg}}
    </div>
</template>

<script lang="ts">
import { Component } from '../component';
import { Vue } from 'vue-property-decorator';

// function Component(options: any) {
//     // 因为Component可以接受配置项参数，并把类装饰为一个vue组件
//     // 所以要返回一个函数，这个函数再来装饰类
//     return function(target: Function) {
//         // 在这里需要把target（传入的类）的成员解析为vue组件的选项
        
//         // Vue.extend: 参数是一个包含组件选项的对象，返回一个组件
//         return Vue.extend(options)
//     }
// }

// @ts-ignore
@Component({
    props: {
        msg: {
            type: String,
            default: ''
        }
    }
})
export default class Test extends Vue {}
</script>