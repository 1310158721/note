<template>
  <div class="layout-base-wrapper">
    <layout-base-aside ref='aside' />
    <div class="layout-main">
      <layout-base-header @switchCollapseStatus='switchCollapseStatus' />
      <layout-base-content />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LayoutBaseAside from '@/layout/base/aside/index.vue';
import LayoutBaseHeader from '@/layout/base/header/index.vue';
import LayoutBaseContent from '@/layout/base/content/index.vue';

@Component({
  components: {
    LayoutBaseAside,
    LayoutBaseHeader,
    LayoutBaseContent
  }
})

export default class LayoutBaseWrapper extends Vue {
  public switchCollapseStatus() {
    const aside: any = this.$refs.aside;
    aside.switchCollapseStatus();
  }
}
</script>

<style lang="less" scoped>
.layout-base-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.1);
  position: relative;
  display: flex;
  flex-direction: row;
  .layout-main {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>