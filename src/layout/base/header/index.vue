<template>
  <div class="layout-base-header box-shadow">
    <span class="collapse-icon-wrapper" @click="switchIcon">
      <i class="iconfont" v-html="collapseIcon" />
    </span>
    <el-breadcrumb separator=">" class='breadcrumb'>
      <el-breadcrumb-item v-for='item in breadcrumb' :key='item.id' :to="{ path: item.path }" replace>
        <span class='breadcrumb-span'>{{ item.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <span class="self-adaption"></span>
    <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
      <span class="login-out" @click='loginOut'>
        <i class="iconfont">&#xe659;</i>
      </span>
    </el-tooltip>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Emit, Watch } from 'vue-property-decorator';

@Component

export default class LayoutBaseHeader extends Vue {
  public isCollapse: boolean = false;

  public breadcrumb: any[] = [];

  get collapseIcon() {
    return this.isCollapse ? '&#xe744;' : '&#xe601;';
  }

  public loginOut() {
    window.localStorage.removeItem('isLogin');
    this.$router.replace({ path: '/login' });
  }

  public getBreadcrumb() {
    const matched: any[] = this.$route.matched;
    const breadcrumb: any = matched.map((item, index) => {
      if (index === matched.length - 1) {
        return ({ title: item.meta.title });
      }
      return ({ path: item.path, title: item.meta.title });
    }).filter((item, index) => index !== 0);
    if (breadcrumb[0].title !== '首页') {
      breadcrumb.unshift({ path: '/', title: '首页' });
    }
    this.breadcrumb = breadcrumb;
  }

  public created() {
    this.getBreadcrumb();
  }

  @Emit('switchCollapseStatus')
  public switchIcon() {
    this.isCollapse = !this.isCollapse;
  }

  @Watch('$route.matched')
  public showMatch() {
    this.getBreadcrumb();
  }
}
</script>

<style lang="less" scoped>
.layout-base-header {
  height: 50px;
  background-color: #ffffff;
  position: relative;
  z-index: 200;
  display: flex;
  flex-direction: row;
  .breadcrumb {
    margin-left: 20px;
    line-height: 50px;
    &-span {
      color: #303133;
      font-size: 14px;
      font-weight: normal;
      &:hover {
        color: #409eff;
      }
    }
  }
  .collapse-icon-wrapper, .login-out {
    display: inline-block;
    width: 50px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      i {
        color: #409eff;
      }
    }
    i {
      font-size: 30px;
      color: #304156;
    }
  }
  .self-adaption {
    flex: 1;
    height: 100%;
  }
}
</style>