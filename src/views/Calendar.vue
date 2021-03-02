<template>
<el-calendar id="calendar-container" v-model="value">
</el-calendar>
</template>

<script>
export default {
    name: 'Calendar',
    data(){
        return{
            value:new Date()
        }
    }
}
</script>

<style scoped>
#calendar-container{
    width:100%;
    height:100%;
}
</style>
