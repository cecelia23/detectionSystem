<template>
<div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      background-color="#2C3E74"
      text-color="#fff"
      @select="changeShow">
      <template v-for="(item,index) in $router.options.routes">
        <el-menu-item :index="item.path" :key="index">
            <i :class="item.styleType"></i>
            <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
</div>
</template>
<script>
export default {
    methods: {
        changeShow (key) {
            this.$emit('on-select-menu', key)
        }
    }
}
</script>