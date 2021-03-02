<template>
  <div>
  
    <p>我的名称<input type="text" v-model="person.username" /></p>

    <p>
      性别: 男：<input type="radio" value="男" v-model="person.usersex" name="sex" /> 
      女：<input
        type="radio"
        name="sex"
        value="女"
        v-model="person.usersex"
      />
    </p>


     <!-- <input type="radio" id="male" value="Male" v-model="gender"> Male
    <input type="radio" id="female" value="Female" v-model="gender"> Femalea -->

    <p>手机: <input type="text" v-model="person.userphone" /></p>
    <p>邮箱: <input type="email" v-model="person.useremail" /></p>

   
    <el-button
        @click="selfbtn"
        
        type="primary"
        >主要按钮</el-button
      >
  </div>
</template>

<script>
export default {
  name: "selfInfo",
  data() {
    return {
      person:{
          username:'',
          usersex:'',
          userphone:'',
          useremail:''
      }
    };
  },
  methods: {
   
    selfbtn(){
         this.$emit('childByValue', this.person)
    }
  },
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

</style>
