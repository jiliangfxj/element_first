<template>
  <div class="demo-type">
    <div class="block" v-for="fit in fits" :key="fit">
        <el-avatar shape="square" :size="50" :fit="fit" :src="submiturl"></el-avatar>
    </div>
  </div>
</template>

<script>
  export default {
    name:'selfImg',
    data() {
      return {
        fits: ['fill'],
        // url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    props:['submiturl']
  }
</script>

<style scoped>

</style>
