<template>
  <div class="layout-base-header box-shadow">
    <span class="collapse-icon-wrapper" @click="switchIcon">
      <i class="iconfont" v-html="collapseIcon" />
    </span>
    <span class="self-adaption"></span>
    <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
      <span class="login-out" @click='loginOut'>
        <i class="iconfont">&#xe659;</i>
      </span>
    </el-tooltip>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component

export default class LayoutBaseHeader extends Vue {
  public isCollapse: boolean = false;

  get collapseIcon() {
    return this.isCollapse ? '&#xe744;' : '&#xe601;';
  }

  public loginOut() {
    window.localStorage.removeItem('isLogin');
    this.$router.push({ name: 'login', replace: true });
  }

  @Emit('switchCollapseStatus')
  public switchIcon() {
    this.isCollapse = !this.isCollapse;
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