<template>
  <el-row type="flex" :gutter="1">
    <el-col :span="4">
      <div class="grid-content bg-purple">Jeff</div>
    </el-col>
    <el-col :span="20">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>

  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template #title><i class="el-icon-star-on"></i>功能模块</template>

          <el-menu-item index="1-1" @click="entermap">地图</el-menu-item>
          <el-menu-item index="1-2">日历</el-menu-item>
          <el-menu-item index="1-3">图片裁剪</el-menu-item>
        </el-submenu>

        <el-menu-item index="2"
          ><i class="el-icon-picture-outline"></i>美图</el-menu-item
        >

        <el-menu-item index="3"
          ><i class="el-icon-tickets"></i>富文本</el-menu-item
        >
        <el-menu-item index="4"><i class="el-icon-menu"></i>表格</el-menu-item>
        <el-menu-item index="5"
          ><i class="el-icon-user"></i>个人信息</el-menu-item
        >
      </el-menu>
    </el-aside>
          <router-view>this is a router-view</router-view>

    <el-container>
      <el-main>
        <el-table :data="tableData">
          <!-- <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column> -->

          <!-- 用来展示路由对应组件显示的位置 -->
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>


export default {
  name: "Container",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  setup() {
    // const router = useRouter()
    // const entermap = () => {
    //     router.push('/login')
    // }

    // return{
    //     entermap
      
    // }

  },

 
};
</script>

<style scoped>
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