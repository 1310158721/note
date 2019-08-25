<template>
  <div class="layout-login-wrapper">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class LayoutLoginWrapper extends Vue {}
</script>

<style lang="less" scoped>
.layout-login-wrapper {
  width: 100%;
  height: 100%;
  background-color: #2D3A4B;
  position: relative;
}
</style>