<template>
  <el-menu
    :default-active="defaultActive"
    class="layout-base-aside box-shadow"
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#BFCBD9"
    v-if="list && list.length"
    :unique-opened='true'
  >
    <template v-for="first in list">
      <el-submenu v-if="first.children" :index="first.path" :key="first.id">
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ first.title }}</span>
        </template>
        <template v-for="second in first.children">
          <el-submenu v-if="second.children" :index="second.path" :key="second.id">
            <template slot="title">
              <i class="el-icon-location" />
              <span>{{ second.title }}</span>
            </template>
            <el-menu-item v-for="third in second.children" :key="third.id" :index="third.path" @click.native='link(third.path)'>
              <i class="el-icon-location" />
              <span>{{ third.title }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="second.id" :index="second.path" @click.native='link(second.path)'>
            <i class="el-icon-menu" />
            <span>{{ second.title }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="first.path" :key="first.id" @click.native='link(first.path)'>
        <i class="el-icon-menu" />
        <span>{{ first.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component

export default class LayoutBaseAside extends Vue {
  @State('menuList') public list: any;
  get defaultActive() {
    return this.$route.path;
  }

  public isCollapse: boolean = false;

  public link(path: string) {
    const activePath: string = this.$route.path;
    if (activePath !== path) {
      this.$router.push({ path });
    }
  }

  public switchCollapseStatus() {
    this.isCollapse = !this.isCollapse;
  }
}
</script>

<style lang="less" scoped>
.layout-base-aside {
  background-color: #304156;
  height: 100%;
  position: relative;
  z-index: 300;
  border-right: none;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}

/deep/.el-submenu.is-opened .el-menu-item,
/deep/.el-submenu.is-opened .el-submenu .el-submenu__title {
  background-color: #1f2d3d !important;
  &:hover {
    background-color: #001528 !important;
  }
}
</style>