<template>
  <el-form class='login' :rules='rules' ref="form" :model="form" label-width="0px">
    <h3 class='title'>系统登录</h3>
    <el-form-item prop="account">
      <el-input class='account input' v-model="form.account" placeholder="账号">
        <i slot="prefix" class="el-input__icon iconfont">&#xe616;</i>
      </el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input :type="isEyeOpen ? 'password' : 'text'" class='password input' v-model="form.password" placeholder="密码" >
        <i slot="prefix" class="el-input__icon iconfont">&#xe635;</i>
        <i slot="suffix" v-if='form.password' class="el-input__icon iconfont" v-html='getEyeIcon'  @click='isEyeOpen = !isEyeOpen' style='cursor: pointer;' />
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button class='sign-in' type="primary" @click="submitForm('form')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import {
  Mutation
} from 'vuex-class';

@Component

export default class Login extends Vue {
  public isEyeOpen: boolean = true;

  @Mutation('setMenuList') public setMenuList: any;

  get getEyeIcon() {
    return this.isEyeOpen ? '&#xe6cc;' : '&#xe61b;';
  }

  public form: any = {
    account: 'admin',
    password: 'admin',
    code: ''
  };

  public rules: any = {
    account: [
      { required: true, message: '请输入你的账号', trigger: 'blur' },
      { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' },
      { pattern: /[\da-zA-Z]+$/, message: '密码只能是数字或字母组合', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入你的密码', trigger: 'blur' },
      { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' },
      { pattern: /[\da-zA-Z]+$/, message: '密码只能是数字或字母组合', trigger: 'blur' }
    ]
  };

  public submitForm(formName: string) {
    const dom: any = this.$refs[formName];
    dom.validate((valid: any) => {
      if (valid) {
        window.localStorage.setItem('isLogin', 'true');
        this.setMenuList(null); // 清除vuex里面的菜单栏数据
        this.$router.replace({ path: '/layout-base', replace: true });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 50px;

  /deep/.el-form-item {
    outline: none;
    border: 1px solid hsla(0,0%,100%,.1)
  }

  .title {
    color: #EEEEEE;
    text-align: center;
    font-size: 26px;
    line-height: 26px;
    margin-bottom: 40px;
  }
  .input {
    height: 50px;
    /deep/input {
      height: 50px;
      background: rgba(0,0,0,.3);
      color: #ffffff;
    }
    /deep/.el-input__icon {
      font-size: 20px;
      position: relative;
      top: 2px;
      color: #889aa4;
    }
  }
  .sign-in {
    width: 100%;
    height: 36px;
  }
}
</style>