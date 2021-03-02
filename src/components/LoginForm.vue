<template>
  <el-form
    ref="loginForm"
    :rules="rules"
    :model="loginUser"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        @input="forceUpdate"
        placeholder="Enter Email"
      ></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit_btn"
        >提交</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？<a href="">立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang='ts'>
import { ref,getCurrentInstance } from 'vue'
import {useRouter} from 'vue-router'
export default {
    name: 'LoginForm',
    props:{
        loginUser:{
            type:Object,
            required: true
        },
        rules:{
            type:Object,
            required: true
        }
    },
    setup(props) {
     //@ts-ignore
    const {ctx} = getCurrentInstance()
    const router = useRouter()
    //出发登录
    const handleLogin = (formName) => {
        ctx.$refs[formName].validate((valid) => {
          if (valid) {
            router.push('/')

           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
    return {
      handleLogin
    }

    }
};
</script>

<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  background-color: #fff;
  padding: 100px 40px 100px 40px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
