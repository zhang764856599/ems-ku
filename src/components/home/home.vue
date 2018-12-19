<template>
  <el-container>
    <el-header>
        <Top />
    </el-header>
    <el-container>
      <el-aside width="200px">
          <Silder />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入公共的头部和左侧 (引入文件，注册为子组件，在页面上使用子组件)
import Top from '@/components/common/top.vue'
import Silder from '@/components/common/silder.vue'
export default {
    components : {
        Top,
        Silder
    }
};
</script>

<style>
.el-container{
    height: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>
