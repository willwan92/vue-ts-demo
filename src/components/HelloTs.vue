<template>
  <div>
      <input type="text" @keydown.enter="handleInputFeature">
      <ul>
          <li v-for="item in features" :key="item.id">{{ item.name }}</li>
      </ul>

      <p>属性总数：{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

// 接口定义数据结构
interface Feature {
    id: number;
    name: string;
}

// 定义泛型接口
interface Result<T> {
    ok: 0 | 1;
    data: T[];
}

@Component
export default class HelloTs extends Vue { // 基于类的组件
    private features: Feature[];

    constructor() {
        super();
        this.features = [];
    }

    // 生命周期函数
    public async created() {
        // console.log('created');
        const result = await this.getData<Feature>()
        this.features = result.data;
    }

    // 定义泛型函数，返回promise
    public getData<T>(): Promise<Result<T>> {
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
        return Promise.resolve<Result<T>>({ ok: 1, data });
    }

    public addFeatures(feature: Feature) {
        this.features.push(feature);
    }

    public handleInputFeature(event: any) {
        this.addFeatures({
            id: Date.now(),
            name: event.target.value,
        });
        event.target.value = '';
    }

    // 利用getter作计算属性
    get count() {
        return this.features.length;
    }
}
</script>

<style>

</style>