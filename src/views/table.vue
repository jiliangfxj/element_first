<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; overflow-y: scroll"
      max-height="80%"
    >
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 2%">
      日期:<input type="text" style="width: 12%" v-model="date" clearable />
      姓名:<input type="text" style="width: 10%" v-model="name" clearable />

      省份:<input type="text" style="width: 8%" v-model="province" clearable />

      市区:<input type="text" style="width: 9%" v-model="city" clearable />
      地址:<input type="text" style="width: 24%" v-model="address" clearable />
      邮编:<input type="text" style="width: 8%" v-model="postcode" clearable />
    </div>
    <el-row style="text-align: center">
      <el-button
        @click="addPerson"
        style="margin: 2% auto; width: 100%"
        type="primary"
        >主要按钮</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default {
  name: "table",
  data() {
    return {
      date: "",
      name: "",
      province: "",
      city: "",
      address: "",
      postcode: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addPerson() {
      console.log(this.tableData);
      const info = {
        date: this.date,
        name: this.name,
        province: this.province,
        city: this.city,
        address: this.address,
        zip: this.postcode,
      };
      this.tableData.push(info);
    },
  },
  setup() {
    return {
      date: ref(""),
      name: ref(""),
      province: ref(""),
      city: ref(""),
      address: ref(""),
      postcode: ref(""),
    };
  },
};
</script>

<style scoped>
</style>
