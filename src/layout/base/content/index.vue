<template>
  <div class='layout-base-content'>
    <!-- transition 的 mode 模式可以使动画更加流畅 -->
    <transition name='second-router' mode='out-in'>
      <router-view />
    </transition>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class LayoutBaseContent extends Vue {}
</script>

<style lang="less" scoped>
.second-router-enter-active {
  transition: all .5s linear;
}

.second-router-leave-active {
  transition: all .5s linear;
}

.second-router-enter, .second-router-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.layout-base-content {
  flex: 1;
  background: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
}
</style>