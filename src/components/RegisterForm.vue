<template>
  <el-form
    ref="registerForm"
    :rules="registerRules"
    :model="registerUser"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        @input="forceUpdate"
        placeholder="Enter name"
      ></el-input>
    </el-form-item>

    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        @input="forceUpdate"
        placeholder="Enter Email"
        type="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password"
      ></el-input>
    </el-form-item>

    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter Password"
      ></el-input>
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister('registerForm')"
        type="primary"
        class="submit_btn"
        >注册</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
  </el-form>
</template>
<script lang='ts'>
import { ref, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router'
// import axios from 'axios'局部使用
export default {
  name: "RegisterForm",
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    //@ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter()
    const handleRegister = (formName) => {
      ctx.$refs[formName].validate((valid) => {
        if (valid) {
            router.push('/')

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {
      handleRegister
    };
  },
};
</script>

<style scoped>
</style>
