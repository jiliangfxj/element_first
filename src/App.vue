<template>
  <el-row type="flex"   :gutter="1">
    <el-col  :span="24" >
      <div  class="grid-content bg-purple">
        <selfImg  :submiturl="realurl"/>
      </div>
    </el-col>
   
  </el-row>

  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color:#fff">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template #title><i class="el-icon-star-on"></i>功能模块</template>

          <el-menu-item index="1-1"><router-link to="/map">地图</router-link> </el-menu-item>
          <el-menu-item index="1-2"><router-link to="/calendar">日历</router-link> </el-menu-item>
          <el-menu-item index="1-3"><router-link to="/imgcropping">图片上传</router-link></el-menu-item>
        </el-submenu>

        <!-- <el-menu-item index="2"
          ><i class="el-icon-picture-outline"></i>美图</el-menu-item
        > -->

        <el-menu-item index="3"
          ><i class="el-icon-tickets"></i><router-link to="/textedit" >富文本</router-link></el-menu-item
        >
        <el-menu-item index="4"><i class="el-icon-menu"></i><router-link to="/table">人员管理</router-link> </el-menu-item>
        <el-menu-item index="5"
          ><router-link to="/selfinfo" ><i class="el-icon-user"></i>个人信息</router-link></el-menu-item
        >
      </el-menu>
    </el-aside>
   

    <el-container>
       <router-view @childByValue="getchildvalue" :person="this.person"></router-view>
       
    </el-container>
  </el-container>
</template>

<script>

import selfImg from '@/components/selfImg.vue'

export default {
  name: "app",
  components: {
    selfImg
  },
  data() {
      return{
        // realurl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        realurl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        person:{

        }
      }
  },
  setup () {
   
     
     
  },
  methods:{
    getchildvalue(childValue){
      this.person = childValue
      console.log(this.person)
    }
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}


/* header开始 */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/* header结束 */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
