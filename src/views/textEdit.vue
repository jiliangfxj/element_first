<template>
  <div>
    <p>我的名称：<input type="text" v-model="person.username" :disabled="true" /></p>

    <p>
      性别: 男<input type="radio" style="margin-left:0" value="男" v-model="person.usersex" name="sex" :disabled="true" /> 
      女<input
      style="margin-left:0"
        type="radio"
        name="sex"
        value="女"
        v-model="person.usersex"
        :disabled="true" 
      />
    </p>

    <p>手机：<input type="text" v-model="person.userphone" :disabled="true" /></p>
    <p>邮箱：<input type="email" v-model="person.useremail" :disabled="true" /></p>
  </div>
</template>

<script>
export default {
  name: "textEdit",
  props: ["person"],
};
</script>

<style scoped>
div {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
p {
  margin-bottom: 5%;
}
input{
   margin-left:5%;
   
    line-height:2;
}

</style>
