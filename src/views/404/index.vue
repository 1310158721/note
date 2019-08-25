<template>
  <div class="not-found">
    <i class="iconfont">&#xe605;</i>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class NotFound extends Vue {}
</script>

<style lang="less" scoped>
.not-found {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.1);
  position: relative;
  i {
    font-size: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgba(0,0,0,.5);
  }
}
</style>