<template>

  <div id="container" class=""></div>

</template>



<script>
import { onMounted } from "vue";
export default {
  name: "Map",
  components: {},
  setup() {
    onMounted(() => {
      var map = new AMap.Map("container", {
        resizeEnable: true,
      });
    });
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
