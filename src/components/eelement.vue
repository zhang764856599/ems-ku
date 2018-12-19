<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
          <el-button type="danger" round>危险按钮</el-button>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data(){
        return {
            input : ''
        }
    }
};
</script>

<style>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
