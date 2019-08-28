<template>
  <div class="memorandum">
    1. 利用 this.$route.matched 来实现面包屑功能（配置路由时要用children来嵌套）
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Memorandum extends Vue {}
</script>

<style lang="less" scoped>
.memorandum {
  height: 100%;
}
</style>